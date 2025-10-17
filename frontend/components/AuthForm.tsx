import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface AuthFormProps {
  title: string;
  children: ReactNode;
}

export default function AuthForm({ title, children }: AuthFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <GlassCard className="max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          {title}
        </h1>
        {children}
      </GlassCard>
    </div>
  );
}
