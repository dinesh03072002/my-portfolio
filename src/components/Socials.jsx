import React from 'react';

const Socials = () => {
  const socials = [
    { 
      name: 'GitHub', 
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      url: 'https://github.com/dinesh03072002'
    },
    { 
      name: 'Twitter', 
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      url: 'https://twitter.com'
    },
    { 
  name: 'LinkedIn', 
  icon: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.04-3.02 4.15V24h-4V8z',
  url: 'https://www.linkedin.com/in/dinesh-dubakula-935b73283/'
},

    { 
  name: 'Instagram', 
  icon: 'M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1 1 0 100 2 1 1 0 000-2z',
  url: 'https://www.instagram.com/'
}

  ];

  return (
    <>
      {/* Desktop - Left sidebar */}
      <div className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col gap-4 z-[100]">
        {socials.map((social, idx) => (
          <a 
            key={idx} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] border border-white/10 rounded-xl text-gray-400 hover:text-[#00ff88] hover:translate-x-1 hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all duration-300 relative group opacity-0 animate-[slideInLeft_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-[#00ff88] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <svg 
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d={social.icon} />
            </svg>
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-[13px] font-medium whitespace-nowrap opacity-0 -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
              {social.name}
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-white/10"></span>
            </span>
          </a>
        ))}
      </div>

      {/* Mobile - Bottom navigation */}
      <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-3 bg-[#1a1a1a] border border-white/10 rounded-2xl p-3 z-[100]">
        {socials.map((social, idx) => (
          <a 
            key={idx} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#00ff88] transition-all duration-300 relative group"
          >
            <svg 
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d={social.icon} />
            </svg>
            
            {/* Mobile Tooltip - appears above */}
            <span className="absolute bottom-full mb-2 px-3 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              {social.name}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/10"></span>
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Socials;