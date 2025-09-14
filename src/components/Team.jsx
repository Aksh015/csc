import React, { useState, useEffect } from 'react';

const boardMembers = [
  {
    id: 1,
    name: "Ayush Patel",
    title: "Vice President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    bio: "Leading cybersecurity initiatives with a focus on ethical hacking and threat analysis.",
    social: {
      github: "https://github.com/ap0309",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    bio: "Leading the club with a vision to make Nirma University a cybersecurity hub.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Technical Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    bio: "Developing secure applications and tools for the club. Expert in web security and secure coding practices.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "Emma Williams",
    title: "Marketing Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    bio: "Full-stack developer with focus on building cybersecurity tools and educational platforms for the club.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 5,
    name: "Eh ih",
    title: "Marketing Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

// Role styling functions with better contrasting colors
const getRoleColor = (role) => {
  switch(role) {
    // case 'President': return 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900';
    // case 'Vice President': return 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white';
    // case 'Technical Director': return 'bg-gradient-to-r from-purple-400 to-pink-500 text-white';
    // case 'Marketing Head': return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
    // case 'Software Developer': return 'bg-gradient-to-r from-indigo-400 to-blue-500 text-white';
    // case 'General Secretary': return 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white';
    // case 'Managing Director': return 'bg-gradient-to-r from-red-400 to-orange-500 text-white';
    // case 'Tech Head': return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white';
    // case 'Public Relations Officer': return 'bg-gradient-to-r from-pink-400 to-rose-500 text-white';
    // case 'Social Media Head': return 'bg-gradient-to-r from-violet-400 to-purple-500 text-white';
    // case 'Publicity Head': return 'bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900';
    // case 'Treasurer': return 'bg-gradient-to-r from-emerald-400 to-green-500 text-white';
    default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
  }
};

const getRoleIcon = (role) => {
  switch(role) {
    case 'President': return '👑';
    case 'Vice President': return '🥈';
    case 'Technical Director': return '⚡';
    case 'Marketing Head': return '📊';
    case 'Software Developer': return '💻';
    case 'General Secretary': return '📋';
    case 'Managing Director': return '📊';
    case 'Tech Head': return '⚡';
    case 'Public Relations Officer': return '🤝';
    case 'Social Media Head': return '📱';
    case 'Publicity Head': return '📢';
    case 'Treasurer': return '💰';
    default: return '👤';
  }
};

// Individual Member Card Component
const BoardMemberCard = ({ member, onMemberClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 h-80 mx-auto cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="absolute inset-0 transition-all duration-500 transform group-hover:scale-105">
        {/* Front of the card (always visible) */}
        <div className="absolute inset-0 bg-gray-900 shadow-xl border-2 border-green-400 rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-green-400">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(member.title)}`}>
            {getRoleIcon(member.title)} {member.title}
          </div>
        </div>
        
        {/* Back of the card (appears on hover) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-500 text-white shadow-xl rounded-xl p-6 flex flex-col justify-center items-center transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getRoleColor(member.title)}`}>
            {getRoleIcon(member.title)} {member.title}
          </div>
          
          <p className="text-sm mb-6 text-center line-clamp-3">{member.bio}</p>
          
          <div className="social-icons flex space-x-4 mb-6">
            <a 
              href={member.social.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={member.social.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onMemberClick(member);
            }}
            className="bg-gray-900 text-green-400 hover:bg-green-400 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Component
const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 rounded-full p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Member Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-green-400">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
            <div className={`px-4 py-2 rounded-full text-sm font-semibold mb-3 ${getRoleColor(member.title)}`}>
              {getRoleIcon(member.title)} {member.title}
            </div>
          </div>
          
          {/* Bio */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-white mb-3">About</h4>
            <p className="text-gray-300 leading-relaxed">{member.bio}</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
            >
              <i className="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
            <a 
              href={member.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Team Component
const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Add Font Awesome
  useEffect(() => {
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fontAwesome);
    
    return () => {
      document.head.removeChild(fontAwesome);
    };
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals behind Nirma Security Club
          </p>
        </header>
        
        {/* 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {boardMembers.map(member => (
            <BoardMemberCard 
              key={member.id} 
              member={member} 
              onMemberClick={handleMemberClick}
            />
          ))}
        </div>
        
        <footer className="text-center mt-16 text-gray-400">
          <p>Nirma Security Club - Protecting Tomorrow's Digital World</p>
        </footer>

        <MemberModal member={selectedMember} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Team;