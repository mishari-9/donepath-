import { create } from 'zustand';
import { Node, Edge } from 'reactflow';
import { cppNodes, cppEdges } from '@/data/cpp';
import { pythonNodes, pythonEdges } from '@/data/python';
import { networkingNodes, networkingEdges } from '@/data/networking';
import { cybersecurityNodes, cybersecurityEdges } from '@/data/cybersecurity';

export type NodeStatus = 'locked' | 'unlocked' | 'completed';

export interface SkillNodeData {
  label: string;
  status: NodeStatus;
  timeEstimate: string;
  description: string;
  importance: string;
  resources: { title: string; url: string; type: 'video' | 'article' }[];
  prerequisites: string[]; // Node IDs
  isSubNode?: boolean; // For styling smaller nodes
}

export type SkillNode = Node<SkillNodeData>;

interface RoadmapData {
  nodes: SkillNode[];
  edges: Edge[];
}

const roadmaps: Record<string, RoadmapData> = {
  'cpp': { nodes: cppNodes, edges: cppEdges },
  'python': { nodes: pythonNodes, edges: pythonEdges },
  'networking': { nodes: networkingNodes, edges: networkingEdges },
  'cybersecurity': { nodes: cybersecurityNodes, edges: cybersecurityEdges },
};

interface AppState {
  nodes: SkillNode[];
  edges: Edge[];
  activeNodeId: string | null;
  roadmapId: string;
  setRoadmap: (id: string) => void;
  setNodes: (nodes: SkillNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  setActiveNode: (nodeId: string | null) => void;
  markNodeComplete: (nodeId: string) => void;
  getCompletionPercentage: (id?: string) => number;
}

export const useStore = create<AppState>((set, get) => ({
  nodes: roadmaps['cpp'].nodes,
  edges: roadmaps['cpp'].edges,
  activeNodeId: null,
  roadmapId: 'cpp',
  setRoadmap: (id: string) => {
    const data = roadmaps[id] || roadmaps['cpp'];
    set({
      roadmapId: id,
      nodes: data.nodes,
      edges: data.edges,
      activeNodeId: null,
    });
  },
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setActiveNode: (nodeId) => set({ activeNodeId: nodeId }),
  getCompletionPercentage: (id?: string) => {
    // If id is provided, calculate for that specific roadmap (useful for dashboard)
    // Otherwise calculate for current active roadmap
    const nodesToCount = id ? (roadmaps[id]?.nodes || []) : get().nodes;
    
    if (nodesToCount.length === 0) return 0;
    const completed = nodesToCount.filter(n => n.data.status === 'completed').length;
    return Math.round((completed / nodesToCount.length) * 100);
  },
  markNodeComplete: (nodeId) => {
    set((state) => {
      const newNodes = state.nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, data: { ...node.data, status: 'completed' as NodeStatus } };
        }
        return node;
      });

      const finalNodes = newNodes.map((node) => {
        if (node.data.status === 'locked') {
          const allPrereqsMet = node.data.prerequisites.every((prereqId) => {
            const prereqNode = newNodes.find((n) => n.id === prereqId);
            return prereqNode?.data.status === 'completed';
          });
          if (allPrereqsMet) {
            return { ...node, data: { ...node.data, status: 'unlocked' as NodeStatus } };
          }
        }
        return node;
      });

      // We also update the `roadmaps` object in memory so if they switch back, it saves state for this session.
      // In a real app with Supabase, this would sync to the DB.
      if (roadmaps[state.roadmapId]) {
        roadmaps[state.roadmapId].nodes = finalNodes;
      }

      return { nodes: finalNodes };
    });
  },
}));
