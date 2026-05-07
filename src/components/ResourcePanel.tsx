"use client";

import { useStore } from "@/store/useStore";
import { X, ExternalLink, CheckCircle, Video, FileText, Info, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function ResourcePanel() {
  const { activeNodeId, nodes, setActiveNode, markNodeComplete } = useStore();

  const activeNode = nodes.find((n) => n.id === activeNodeId);

  const handleComplete = () => {
    if (activeNodeId) {
      markNodeComplete(activeNodeId);
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#ffe534', '#ffffff']
      });
    }
  };

  return (
    <AnimatePresence>
      {activeNodeId && activeNode && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-white dark:bg-zinc-900 border-l border-border flex flex-col shadow-2xl z-40 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-zinc-50 dark:bg-zinc-950/50">
            <div className="flex items-center gap-3">
              {activeNode.data.status === 'locked' && <Lock className="text-gray-400 w-5 h-5" />}
              {activeNode.data.status === 'completed' && <CheckCircle className="text-green-500 w-5 h-5" />}
              <h2 className="text-2xl font-bold pr-4">{activeNode.data.label}</h2>
            </div>
            <button
              onClick={() => setActiveNode(null)}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* Description & Importance */}
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900/50">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> What is this?
                </h3>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm">
                  {activeNode.data.description}
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-100 dark:border-amber-900/50">
                <h3 className="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
                  💡 Why is it important?
                </h3>
                <p className="text-amber-800 dark:text-amber-200 leading-relaxed text-sm">
                  {activeNode.data.importance}
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-border pb-2">Learning Resources</h3>
              
              <div className="space-y-3">
                {activeNode.data.resources.length > 0 ? activeNode.data.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800 hover:border-blue-500 hover:shadow-md transition-all group"
                  >
                    <div className="mt-1 bg-white dark:bg-zinc-700 p-2 rounded-lg shadow-sm">
                      {resource.type === 'video' ? (
                        <Video className="w-5 h-5 text-red-500" />
                      ) : (
                        <FileText className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </p>
                      <span className="text-xs text-muted-foreground mt-1 inline-block">Click to open in new tab</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transition-colors mt-2" />
                  </a>
                )) : (
                  <p className="text-muted-foreground italic text-sm">No specific resources linked yet. Try searching on YouTube or Google.</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 border-t border-border bg-zinc-50 dark:bg-zinc-950/80 backdrop-blur-md">
            {activeNode.data.status === "completed" ? (
              <div className="flex items-center justify-center gap-2 w-full py-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl font-bold border border-green-200 dark:border-green-800">
                <CheckCircle className="w-5 h-5" />
                <span>Topic Completed</span>
              </div>
            ) : activeNode.data.status === "locked" ? (
              <div className="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 dark:bg-zinc-800 text-gray-500 rounded-xl font-bold cursor-not-allowed">
                <Lock className="w-5 h-5" />
                <span>Complete previous topics to unlock</span>
              </div>
            ) : (
              <button
                onClick={handleComplete}
                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Mark as Complete</span>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
