"use client";

import { Handle, Position, NodeProps } from "reactflow";
import { SkillNodeData } from "@/store/useStore";
import { CheckCircle2, Lock } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SkillNode({ data, selected }: NodeProps<SkillNodeData>) {
  const isLocked = data.status === "locked";
  const isUnlocked = data.status === "unlocked";
  const isCompleted = data.status === "completed";
  const isSubNode = data.isSubNode;

  return (
    <div
      className={cn(
        "relative px-4 py-2 min-w-[160px] text-center transition-all duration-200 cursor-pointer",
        "border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-md",
        isSubNode ? "bg-[#ffdf91] text-black" : "bg-[#ffe534] text-black font-bold",
        isLocked && "opacity-50 grayscale",
        !isLocked && "hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
        selected && "ring-4 ring-blue-500"
      )}
    >
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <Handle type="target" position={Position.Left} id="left" className="opacity-0" />
      
      {/* Status Icons overlay */}
      <div className="absolute -top-3 -left-3 bg-white dark:bg-zinc-900 rounded-full">
        {isCompleted && <CheckCircle2 className="w-6 h-6 text-green-600 fill-green-100" />}
        {isLocked && <div className="w-6 h-6 rounded-full border-2 border-gray-400 bg-gray-200 flex items-center justify-center"><Lock className="w-3 h-3 text-gray-500"/></div>}
        {isUnlocked && <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-100"></div>}
      </div>

      <div className="text-sm">
        {data.label}
      </div>

      <Handle type="source" position={Position.Bottom} className="opacity-0" />
      <Handle type="source" position={Position.Right} id="right" className="opacity-0" />
    </div>
  );
}
