import React from 'react';

const TechStack = () => {
  const techStack = {
    languages: ['Java', 'python', 'JavaScript', 'TypeScript'],
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js'],
    tools: ['Postman'],
    databases: ['MySQL']
  };

  return (
    <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 hover:border-[#00ff88]/30 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden h-full">
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]"></div>
      </div>

      <h2 className="font-['Space_Grotesk'] text-[42px] font-light tracking-tight mb-8 relative z-10">
        Tech
        <span className="italic font-normal"> stack</span>
      </h2>

      <div className="space-y-7 relative z-10">
        {/* Languages */}
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-3">Languages:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.languages.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[13px] font-medium text-gray-400 hover:bg-[#00ff88]/[0.08] hover:border-[#00ff88]/30 hover:text-[#00ff88] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,255,136,0.15)] transition-all duration-300 cursor-default relative overflow-hidden group/tag"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover/tag:left-full transition-[left] duration-500"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-3">Front-end:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[13px] font-medium text-gray-400 hover:bg-[#00ff88]/[0.08] hover:border-[#00ff88]/30 hover:text-[#00ff88] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,255,136,0.15)] transition-all duration-300 cursor-default relative overflow-hidden group/tag"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover/tag:left-full transition-[left] duration-500"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-3">Back-end:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[13px] font-medium text-gray-400 hover:bg-[#00ff88]/[0.08] hover:border-[#00ff88]/30 hover:text-[#00ff88] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,255,136,0.15)] transition-all duration-300 cursor-default relative overflow-hidden group/tag"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover/tag:left-full transition-[left] duration-500"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-3">Tools:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.tools.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[13px] font-medium text-gray-400 hover:bg-[#00ff88]/[0.08] hover:border-[#00ff88]/30 hover:text-[#00ff88] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,255,136,0.15)] transition-all duration-300 cursor-default relative overflow-hidden group/tag"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover/tag:left-full transition-[left] duration-500"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-3">Databases:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.databases.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[13px] font-medium text-gray-400 hover:bg-[#00ff88]/[0.08] hover:border-[#00ff88]/30 hover:text-[#00ff88] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,255,136,0.15)] transition-all duration-300 cursor-default relative overflow-hidden group/tag"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover/tag:left-full transition-[left] duration-500"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;