"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Lock, KeyRound, Bot, Github, Mail } from "lucide-react";
import Link from "next/link";
import { Route } from "lucide-react";

export function SentientPasswordField() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Calculate password strength (0-3)
  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 5) score += 1;
    if (pass.length > 8 && /[A-Z]/.test(pass)) score += 1;
    if (pass.length > 8 && /[A-Z]/.test(pass) && /[0-9!@#$]/.test(pass)) score += 1;
    return score;
  };

  const strength = getStrength(password);
  
  // Map strength to colors
  const strengthColor = 
    password.length === 0 ? "border-border" :
    strength === 0 ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]" :
    strength === 1 ? "border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]" :
    "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]";

  const textColor = 
    password.length === 0 ? "text-muted-foreground" :
    strength === 0 ? "text-red-500" :
    strength === 1 ? "text-amber-500" :
    "text-emerald-500";

  return (
    <div className="space-y-4 relative">
      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
        <KeyRound className="w-4 h-4" />
        Password
      </label>
      
      {/* Sentient Character */}
      <div className="absolute -top-10 right-2 w-16 h-16 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          animate={{
            y: password.length > 0 ? 0 : 5,
            scale: password.length > 0 ? 1 : 0.9,
          }}
          className="relative"
        >
          <Bot className={`w-8 h-8 transition-colors duration-300 ${textColor}`} />
          {/* Hands covering eyes when typing but not showing password */}
          <AnimatePresence>
            {password.length > 0 && !showPassword && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-3 bg-zinc-900 dark:bg-zinc-100 rounded-full flex items-center justify-between px-1"
              >
                <div className="w-2 h-2 rounded-full bg-zinc-100 dark:bg-zinc-900" />
                <div className="w-2 h-2 rounded-full bg-zinc-100 dark:bg-zinc-900" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className={`h-5 w-5 transition-colors duration-300 ${textColor}`} />
        </div>
        
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`block w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 dark:bg-zinc-900/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${strengthColor} ${
            strength === 0 && password.length > 0 ? 'focus:ring-red-500' :
            strength === 1 ? 'focus:ring-amber-500' :
            strength === 2 ? 'focus:ring-emerald-500' :
            'focus:ring-blue-500 border-border'
          }`}
          placeholder="••••••••"
        />
        
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Strength Indicator Bar */}
      <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden flex gap-1">
        <motion.div 
          className="h-full bg-red-500" 
          animate={{ flex: password.length > 0 ? 1 : 0 }} 
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="h-full bg-amber-500" 
          animate={{ flex: strength >= 1 ? 1 : 0 }} 
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="h-full bg-emerald-500" 
          animate={{ flex: strength >= 2 ? 1 : 0 }} 
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate login for now
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-3xl tracking-tight mb-2 hover:opacity-80 transition-opacity">
            <Route className="w-8 h-8 text-primary" />
            <span>DonePath</span>
          </Link>
          <p className="text-muted-foreground text-sm">Sign in to continue your learning journey.</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl shadow-xl border border-border/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="block w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-zinc-900/50 text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="student@example.com"
                />
              </div>

              <SentientPasswordField />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-zinc-50 dark:bg-zinc-900 px-2 text-muted-foreground rounded-full">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium text-sm">
                <Github className="w-5 h-5" />
                GitHub
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium text-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
