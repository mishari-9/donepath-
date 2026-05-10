"use client";

import { useMemo, useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap, ConnectionMode, useNodesState, useEdgesState, Node } from "reactflow";
import { SkillNode } from "./SkillNode";
import { useStore } from "@/store/useStore";

import { PomodoroTimer } from "./PomodoroTimer";

const nodeTypes = {
  skillNode: SkillNode,
};

export function RoadmapViewer() {
  const { nodes, edges, setActiveNode, getCompletionPercentage } = useStore();
  
  const [rfNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  const percentage = getCompletionPercentage();

  useMemo(() => {
    setNodes(nodes);
  }, [nodes, setNodes]);

  useMemo(() => {
    setEdges(edges);
  }, [edges, setEdges]);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setActiveNode(node.id);
    },
    [setActiveNode]
  );

  const onPaneClick = useCallback(() => {
    setActiveNode(null);
  }, [setActiveNode]);

  return (
    <div className="w-full h-full relative">
      {/* Progress Header */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-96 max-w-full px-4">
        <div className="glass-panel p-4 rounded-2xl shadow-xl flex flex-col gap-2 items-center text-center">
          <h2 className="text-xl font-bold tracking-tight">Roadmap Progress</h2>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-border">
            <div 
              className="bg-blue-500 h-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-sm font-semibold">{percentage}% Completed</span>
        </div>
      </div>

      {/* Productivity Timer */}
      <div className="absolute bottom-6 left-6 z-10">
        <PomodoroTimer />
      </div>

      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        connectionMode={ConnectionMode.Loose}
        fitView
        className="bg-zinc-50 dark:bg-zinc-950"
      >
        <Background gap={24} size={2} color="#cbd5e1" />
        <Controls className="bg-white dark:bg-zinc-800 shadow-md border border-border rounded-lg" />
        <MiniMap 
          className="bg-white dark:bg-zinc-800 shadow-md border border-border rounded-lg"
          nodeColor={(n) => {
            if (n.data?.status === 'completed') return '#22c55e';
            if (n.data?.status === 'unlocked') return '#3b82f6';
            return '#e4e4e7';
          }} 
        />
      </ReactFlow>
    </div>
  );
}
