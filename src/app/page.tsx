/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Flame, Code, Shield, Network, Terminal, Target, Edit3, CheckCircle2 } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { getCompletionPercentage } = useStore();
  const [goal, setGoal] = useState("Complete C++ Mastery Roadmap by next month");
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [tempGoal, setTempGoal] = useState(goal);

  // Load goal from local storage
  useEffect(() => {
    const savedGoal = localStorage.getItem("donepath_user_goal");
    if (savedGoal) {
      setGoal(savedGoal);
      setTempGoal(savedGoal);
    }
  }, []);

  const saveGoal = () => {
    setGoal(tempGoal);
    localStorage.setItem("donepath_user_goal", tempGoal);
    setIsEditingGoal(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12">
      {/* User Goal Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4 w-full">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
            <Target className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-blue-100 uppercase tracking-wider mb-1">Your Primary Goal</h2>
            {isEditingGoal ? (
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={tempGoal} 
                  onChange={(e) => setTempGoal(e.target.value)}
                  className="bg-white/10 border border-white/30 text-white rounded-lg px-3 py-1 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-white/50"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && saveGoal()}
                />
                <button onClick={saveGoal} className="p-1 hover:bg-white/20 rounded-md transition-colors"><CheckCircle2 className="w-5 h-5 text-green-300" /></button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <p className="text-xl md:text-2xl font-bold">{goal}</p>
                <button onClick={() => setIsEditingGoal(true)} className="p-1 hover:bg-white/20 rounded-md transition-colors"><Edit3 className="w-4 h-4 text-blue-200" /></button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Welcome back, Student!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Pick up where you left off or start a new learning journey today. Consistency is key to mastery.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-border px-5 py-3 rounded-2xl shadow-sm text-sm font-bold">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
              <Flame className="w-5 h-5 text-orange-600 dark:text-orange-500" />
            </div>
            <div>
              <span className="block text-xs text-muted-foreground font-normal">Current Streak</span>
              <span>5 Days</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-border px-5 py-3 rounded-2xl shadow-sm text-sm font-bold">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
              <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
            </div>
            <div>
              <span className="block text-xs text-muted-foreground font-normal">Global Rank</span>
              <span>Novice</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Roadmaps Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-500" />
          Active Roadmaps
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* C++ Card */}
          <Link href="/roadmap/cpp">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl cursor-pointer hover:border-blue-500 border border-border transition-all shadow-lg hover:shadow-blue-500/20 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code className="w-32 h-32 text-blue-500" />
              </div>
              <div className="flex-1 z-10 relative">
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Software Eng.</span>
                <h3 className="text-xl font-extrabold mb-2 group-hover:text-blue-500 transition-colors">C++ Mastery</h3>
                <p className="text-muted-foreground text-xs mb-8 leading-relaxed">
                  Deep dive into C++, memory management, pointers, and OOP concepts.
                </p>
              </div>
              
              <div className="space-y-2 z-10 relative mt-auto">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span className="text-blue-600 dark:text-blue-400">{getCompletionPercentage('cpp')}%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden border border-border">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-1000" style={{ width: `${getCompletionPercentage('cpp')}%` }}></div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Python Card */}
          <Link href="/roadmap/python">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl cursor-pointer hover:border-amber-500 border border-border transition-all shadow-lg hover:shadow-amber-500/20 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal className="w-32 h-32 text-amber-500" />
              </div>
              <div className="flex-1 z-10 relative">
                <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Data / Scripts</span>
                <h3 className="text-xl font-extrabold mb-2 group-hover:text-amber-500 transition-colors">Python</h3>
                <p className="text-muted-foreground text-xs mb-8 leading-relaxed">
                  Learn Python from scratch. Variables, loops, OOP, and package managers.
                </p>
              </div>
              
              <div className="space-y-2 z-10 relative mt-auto">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span className="text-amber-600 dark:text-amber-400">{getCompletionPercentage('python')}%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden border border-border">
                  <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-full rounded-full transition-all duration-1000" style={{ width: `${getCompletionPercentage('python')}%` }}></div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Networking Card */}
          <Link href="/roadmap/networking">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl cursor-pointer hover:border-emerald-500 border border-border transition-all shadow-lg hover:shadow-emerald-500/20 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Network className="w-32 h-32 text-emerald-500" />
              </div>
              <div className="flex-1 z-10 relative">
                <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Infrastructure</span>
                <h3 className="text-xl font-extrabold mb-2 group-hover:text-emerald-500 transition-colors">Networking</h3>
                <p className="text-muted-foreground text-xs mb-8 leading-relaxed">
                  OSI model, IP addressing, routing, and switching. The foundation.
                </p>
              </div>
              
              <div className="space-y-2 z-10 relative mt-auto">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{getCompletionPercentage('networking')}%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden border border-border">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full transition-all duration-1000" style={{ width: `${getCompletionPercentage('networking')}%` }}></div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Cyber Security Card */}
          <Link href="/roadmap/cybersecurity">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl cursor-pointer hover:border-red-500 border border-border transition-all shadow-lg hover:shadow-red-500/20 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32 text-red-500" />
              </div>
              <div className="flex-1 z-10 relative">
                <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Security</span>
                <h3 className="text-xl font-extrabold mb-2 group-hover:text-red-500 transition-colors">Cyber Security</h3>
                <p className="text-muted-foreground text-xs mb-8 leading-relaxed">
                  Ethical hacking, penetration testing, cryptography, and network defense.
                </p>
              </div>
              
              <div className="space-y-2 z-10 relative mt-auto">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span className="text-red-600 dark:text-red-400">{getCompletionPercentage('cybersecurity')}%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden border border-border">
                  <div className="bg-gradient-to-r from-red-500 to-rose-600 h-full rounded-full transition-all duration-1000" style={{ width: `${getCompletionPercentage('cybersecurity')}%` }}></div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  );
}
