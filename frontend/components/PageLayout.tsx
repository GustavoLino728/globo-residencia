import { ReactNode } from "react";
import BackgroundImage from "./BackgroundImage";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showGradientAccent?: boolean;
  className?: string;
}

export default function PageLayout({ 
  children, 
  title, 
  subtitle, 
  showGradientAccent = true,
  className = ""
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen text-white flex flex-col font-sans relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <BackgroundImage src="/Home.png" alt="Background" priority />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <main className="flex-1 p-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg">
              {subtitle}
            </p>
          )}
        </div>
        
        {children}
      </main>

      {/* Bottom gradient accent */}
      {showGradientAccent && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
      )}
    </div>
  );
}
