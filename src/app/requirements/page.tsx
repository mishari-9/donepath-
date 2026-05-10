"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Server, Shield, Zap, Smartphone, HardDrive, EyeOff } from "lucide-react";

const functionalRequirements = [
  { title: "User Authentication", desc: "The system shall allow users to register an account and securely log in using their email and a password." },
  { title: "Interactive Roadmap Visualization", desc: "The system shall provide a visual roadmap interface using interactive nodes and connecting edges to represent the sequence of learning paths." },
  { title: "Progress Tracking", desc: "The system shall track and save the user's progress through the learning roadmap, visually differentiating between completed, in-progress, and locked topics." },
  { title: "Prerequisite Enforcement (Node Locking)", desc: "The system shall enforce node locking logic, ensuring users cannot access or mark advanced topics as complete until their designated prerequisite nodes have been fulfilled." },
  { title: "Dynamic Resource Presentation", desc: "The system shall display a dynamic resource panel containing relevant external links, articles, and video tutorials corresponding specifically to the currently selected roadmap node." },
  { title: "Administrator Management", desc: "The system shall provide an administrative interface allowing authorized users to create new roadmap nodes, edit existing content, and establish connections between nodes." },
  { title: "Theme Customization", desc: "The system shall provide a user-accessible toggle switch to switch the application's user interface between Dark Mode and Light Mode." },
  { title: "Integrated Pomodoro Timer", desc: "The system shall include an integrated Pomodoro timer feature allowing users to track study sessions and breaks directly within the learning platform." },
  { title: "Automatic State Synchronization", desc: "The system shall automatically synchronize the user's progress and roadmap state with the backend database without requiring manual 'save' actions." },
  { title: "Visual Feedback and Animations", desc: "The system shall provide immediate visual feedback, utilizing smooth animations, when a user successfully completes a module or unlocks a new section of the roadmap." },
];

const nonFunctionalRequirements = [
  { title: "Performance Requirement", type: "Product", icon: Zap, desc: "The system shall load and render the initial interactive learning roadmap visualizer in under 2.5 seconds on a standard desktop broadband connection." },
  { title: "Security Requirement", type: "Product/External", icon: Shield, desc: "All user authentication passwords must be securely hashed and salted (e.g., using bcrypt) before being stored in the database to prevent plain-text exposure." },
  { title: "Usability Requirement", type: "Product", icon: Smartphone, desc: "The platform's user interface shall be fully responsive, ensuring all interactive elements and text are readable and functional on both desktop monitors and mobile device screens." },
  { title: "Dependability/Availability", type: "Product", icon: Server, desc: "The system shall guarantee a minimum uptime of 99.9% outside of pre-scheduled and announced maintenance windows." },
  { title: "Development Requirement", type: "Organization", icon: CheckCircle2, desc: "The frontend application must be developed utilizing Next.js and React, strictly adhering to modern functional component architectures and hooks." },
  { title: "Operational Requirement", type: "Organization", icon: HardDrive, desc: "The system's production database shall undergo automated full backups every 24 hours to ensure rapid recovery in the event of data corruption." },
  { title: "Ethical Requirement", type: "External", icon: EyeOff, desc: "The system shall strictly comply with user privacy standards by not sharing or selling email addresses or learning tracking data to any third-party marketing entities." },
  { title: "Efficiency Requirement", type: "Product", icon: Zap, desc: "The roadmap visualization engine shall maintain a smooth rendering rate of at least 60 frames per second (fps) during user panning and zooming interactions." },
];

export default function RequirementsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-16">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-4">
          Documentation
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          System Requirements
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive Software Requirements Specification (SRS) detailing the capabilities, constraints, and operational guidelines of the DonePath platform.
        </p>
      </motion.header>

      {/* Functional Requirements */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
            <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Functional Requirements</h2>
            <p className="text-muted-foreground text-sm">Services and functions that the system should provide.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {functionalRequirements.map((req, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              key={i} 
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-border hover:border-blue-500/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold">{req.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-11">{req.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Non-Functional Requirements */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl">
            <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Non-Functional Requirements</h2>
            <p className="text-muted-foreground text-sm">Applied to the system as a whole, including constraints.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {nonFunctionalRequirements.map((req, i) => {
            const Icon = req.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i} 
                className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-border hover:border-indigo-500/50 transition-colors shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24 text-indigo-500" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      {req.title}
                    </h3>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold mb-4 text-zinc-600 dark:text-zinc-400 border border-border">
                    Type: {req.type}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{req.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  );
}
