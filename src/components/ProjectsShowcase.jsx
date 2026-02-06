import React, { useState } from 'react';

const ProjectsShowcase = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "AI-Powered Interview Analyzer",
      description: "Smart interview preparation platform that generates questions, analyzes spoken answers using AI, and provides instant personalized feedback.",
      tech: ["React", "Flask", "NLP", "Gemini API"],
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
      github: "https://github.com/dinesh03072002/Ai-Powered-Interview-analyser.git",
      //live: "https://demo-ecommerce.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Admin Panel – Authentication System",
      description: "Secure admin panel with user authentication, role-based access, and protected routes.",
      tech: ["Next.js", "Node.js", "Express", "MySQL"],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
      github: "https://github.com/dinesh03072002/web-platform.git",
     // live: "https://task-manager-demo.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Flight Ticket Booking System",
      description: "Frontend flight ticket booking interface with search, booking flow, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&h=600&q=80"
,

      github: "https://github.com/dinesh03072002/Flight-Ticket-Booking-System.git",
      //live: "https://social-dash.com",
      color: "from-green-500 to-teal-500"
    },
   
    
   
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
        
        <h1 className="text-6xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-gray-400 text-lg">A collection of my recent work</p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs text-green-400 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-center text-sm font-medium transition-colors border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
                
              </div>
            </div>

            {/* Hover Overlay Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-green-500 rounded-full p-2">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-8 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-30`}></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-800 rounded-lg text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-center font-medium transition-colors border border-gray-700"
                >
                  View on GitHub
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsShowcase;