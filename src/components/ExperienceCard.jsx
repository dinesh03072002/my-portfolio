import React from 'react';

const ExperienceCard = () => {
  const experiences = [
    {
      id: 1,
      company: 'ArrayBots Technologies',
      role: 'Full Stack Developer Intern',
      period: 'Dec 2025 - Feb 2026',
    
      color: '#4FD1C5'
    },
    {
      id: 2,
      company: 'AICTE',
      role: 'AI-ML Virtual Intern',
      period: 'May 2023 – July 2023',
    
      color: '#4FD1C5'
    },
    

  ];

  return (
    <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 hover:border-[#00ff88]/30 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]"></div>
      </div>

      <h2 className="font-['Space_Grotesk'] text-[28px] font-semibold mb-6 relative z-10">
        Experience
      </h2>

      <div className="flex flex-col gap-5 relative z-10">
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className="flex gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.04] hover:border-white/20 hover:translate-x-1 transition-all duration-300 relative overflow-hidden group/item"
          >
            {/* Accent line on hover */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#00ff88] to-purple-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>

            {/* Company Logo 
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border group-hover/item:scale-105 transition-transform duration-300"
              style={{ 
                backgroundColor: `${exp.color}20`, 
                borderColor: `${exp.color}40` 
              }}
            >
              <img 
                src={exp.logo} 
                alt={exp.company} 
                className="w-8 h-8 object-contain"
              />
            </div> */}

            {/* Experience Details */}
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="font-['Space_Grotesk'] text-[17px] font-semibold text-white">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                {exp.role}
              </p>
              <p className="text-[13px] text-gray-500 font-['Space_Grotesk']">
                {exp.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;