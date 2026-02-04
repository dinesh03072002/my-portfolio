import React from 'react';

const ProjectsCard = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-gradient-to-br from-[#1e1e2e] to-[#2a2a3e] border border-white/10 rounded-3xl min-h-[280px] flex items-center justify-center hover:border-[#00ff88]/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
    >
      {/* Animated background gradient */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[float_15s_ease-in-out_infinite]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.1),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(0,255,136,0.1),transparent_50%)]"></div>
      </div>

      {/* Projects Title */}
      <div className="relative z-10">
        <h2 className="font-['Pacifico'] text-[64px] font-normal bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)] tracking-[2px] animate-[titleGlow_3s_ease-in-out_infinite]">
          Projects
        </h2>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[180px] h-[180px] top-[10%] left-[10%] rounded-full bg-white/[0.03] border border-white/10 animate-[orbit1_20s_linear_infinite]"></div>
        <div className="absolute w-[120px] h-[120px] bottom-[15%] right-[15%] rounded-full bg-white/[0.03] border border-white/10 animate-[orbit2_15s_linear_infinite_reverse]"></div>
        <div className="absolute w-[80px] h-[80px] top-1/2 right-[20%] rounded-full bg-white/[0.03] border border-white/10 animate-[orbit3_10s_linear_infinite]"></div>
      </div>

      {/* Click indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-[#00ff88] rounded-full p-2">
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;