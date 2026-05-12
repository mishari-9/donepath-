"use client";

import { RoadmapViewer } from "@/components/RoadmapViewer";
import { ResourcePanel } from "@/components/ResourcePanel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, use } from "react";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";

export default function RoadmapPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { setRoadmap } = useStore();

  const router = useRouter();

  useEffect(() => {
    if (id) {
      setRoadmap(id);
    }
  }, [id, setRoadmap]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'h' || e.key === 'H') {
        router.push('/');
      } else if (e.key === 'Escape') {
        useStore.getState().setActiveNode(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div className="relative flex flex-col h-[calc(100vh-4rem)]">
      <div className="absolute top-4 left-4 z-10 glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-sm">
        <Link href="/" className="hover:text-primary transition-colors text-muted-foreground font-medium">
          Home
        </Link>
        <span className="text-muted-foreground/50">/</span>
        <span className="text-muted-foreground font-medium">Roadmaps</span>
        <span className="text-muted-foreground/50">/</span>
        <span className="font-bold capitalize text-primary">{id}</span>
      </div>
      
      <RoadmapViewer />
      <ResourcePanel />
    </div>
  );
}
