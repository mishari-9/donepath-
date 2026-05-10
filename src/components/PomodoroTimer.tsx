"use client";

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";
import { clsx } from "clsx";

export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"Work" | "Break">("Work");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Switch mode automatically
      setTimeout(() => {
        if (mode === "Work") {
          setMode("Break");
          setTimeLeft(5 * 60);
        } else {
          setMode("Work");
          setTimeLeft(25 * 60);
        }
        setIsActive(false);
      }, 0);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "Work" ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border flex flex-col items-center min-w-[200px]">
      <div className="flex items-center gap-2 mb-2 text-sm font-bold text-muted-foreground">
        <Timer className="w-4 h-4" />
        <span>Focus Timer: {mode}</span>
      </div>
      <div className={clsx(
        "text-4xl font-mono font-bold tracking-tighter mb-4",
        mode === "Work" ? "text-blue-600 dark:text-blue-400" : "text-green-600 dark:text-green-400"
      )}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="flex gap-2 w-full">
        <button
          onClick={toggleTimer}
          className={clsx(
            "flex-1 flex items-center justify-center py-2 rounded-xl font-bold text-white transition-all",
            isActive ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
        </button>
        <button
          onClick={resetTimer}
          className="p-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-xl transition-all"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
