import React from 'react';

const HeroCard = () => {
  const EMAIL = 'dineshdubakula12@gmail.com';

  const CV_URL =
    'https://drive.google.com/file/d/1WgKhkxwVrG7WOwk5keM6NjBFG_rWlePS/view?usp=drive_link';

  const handleHireMe = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Project%20Inquiry&body=Hi%20Dinesh,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewCV = () => {
    window.open(CV_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 hover:border-[#00ff88]/30 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,255,136,0.1),transparent_50%)]"></div>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-['Space_Grotesk'] text-[42px] font-bold">
            Dinesh
          </h1>

          <p className="text-gray-400 text-[15px] leading-relaxed">
            I build end-to-end web applications as a{' '}
            <strong className="text-white font-semibold">
              Full Stack Developer
            </strong>
            , working with{' '}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-md text-[#00ff88] text-[13px] font-medium">
              <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88]"></span>
              React
            </span>,{' '}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-md text-[#00ff88] text-[13px] font-medium">
              <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88]"></span>
              Next.js
            </span>,{' '}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-md text-[#00ff88] text-[13px] font-medium">
              <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88]"></span>
              Node.js
            </span>, and{' '}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-md text-[#00ff88] text-[13px] font-medium">
              <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88]"></span>
              Databases
            </span>{' '}
            to deliver scalable, user-focused solutions.
          </p>

          {/* Buttons — SAME UI */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              onClick={handleHireMe}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00ff88] text-black rounded-xl font-semibold hover:shadow-[0_8px_24px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="currentColor" />
              </svg>
              Hire me
            </button>

            <button
              onClick={handleViewCV}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 4h12M2 8h8M2 12h10" />
              </svg>
              View CV
            </button>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#00ff88]/5 border border-[#00ff88]/20 rounded-xl mt-2">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full shadow-[0_0_12px_#00ff88]"></span>
            <span className="text-[#00ff88] font-medium text-sm flex-1">
              Available for work
            </span>
            <span className="text-gray-400 text-xs">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
