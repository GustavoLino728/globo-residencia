import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
