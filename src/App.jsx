import React, { useState } from 'react'; 
import HeroCard from './components/HeroCard'; 
import ProjectsCard from './components/ProjectsCard'; 
import ExperienceCard from './components/ExperienceCard'; 
import TechStack from './components/TechStack'; 
import Socials from './components/Socials'; 
import ProjectsShowcase from './components/ProjectsShowcase';

function App() { 
  const [showProjects, setShowProjects] = useState(false);

  if (showProjects) {
    return <ProjectsShowcase onBack={() => setShowProjects(false)} />;
  }

  return ( 
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden"> 
      {/* Animated starfield background */} 
      <div className="fixed inset-0 opacity-30 pointer-events-none"> 
        <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20%_30%,white,transparent),radial-gradient(2px_2px_at_60%_70%,white,transparent),radial-gradient(1px_1px_at_50%_50%,white,transparent),radial-gradient(1px_1px_at_80%_10%,white,transparent),radial-gradient(2px_2px_at_90%_60%,white,transparent),radial-gradient(1px_1px_at_33%_80%,white,transparent)] bg-[length:200%_200%] animate-[starfield_60s_ease-in-out_infinite]"></div> 
      </div> 

      <div className="container mx-auto px-5 py-10 relative z-10"> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto"> 
          {/* Left Column */} 
          <div className="flex flex-col gap-6 order-2 lg:order-1"> 
            <div onClick={() => setShowProjects(true)} className="cursor-pointer">
              <ProjectsCard />
            </div>
            <ExperienceCard /> 
          </div> 

          {/* Middle Column */} 
          <div className="flex flex-col gap-6 order-1 lg:order-2"> 
            <HeroCard /> 
             
            {/* Design Engineer Badge */} 
            <div className="bg-gradient-to-r from-gray-500 to-black-500 rounded-2xl p-6 text-center relative overflow-hidden group"> 
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> 
              <h3 className="font-['Space_Grotesk'] text-2xl font-semibold relative z-10"> 
                Full stack Developer 
              </h3> 
            </div> 
          </div> 

          {/* Right Column */} 
          <div className="flex flex-col gap-6 order-3 lg:order-3 "> 
            <TechStack /> 
          </div> 
        </div> 
      </div> 

      <Socials /> 
    </div> 
  ); 
} 

export default App;
