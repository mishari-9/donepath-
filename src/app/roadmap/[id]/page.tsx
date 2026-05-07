"use client";

import { RoadmapViewer } from "@/components/RoadmapViewer";
import { ResourcePanel } from "@/components/ResourcePanel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, use } from "react";
import { useStore } from "@/store/useStore";

export default function RoadmapPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { setRoadmap } = useStore();

  useEffect(() => {
    if (id) {
      setRoadmap(id);
    }
  }, [id, setRoadmap]);

  return (
    <div className="relative flex flex-col h-[calc(100vh-4rem)]">
      <div className="absolute top-4 left-4 z-10 glass-panel px-4 py-2 rounded-full flex items-center gap-2">
        <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium text-sm">Back to Dashboard</span>
        </Link>
      </div>
      
      <RoadmapViewer />
      <ResourcePanel />
    </div>
  );
}
