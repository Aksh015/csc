import React, { useState, useEffect } from 'react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setSelectedMember(null);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedMember) {
        closeModal();
      }
    };

    if (selectedMember) {
      // Push a state when modal opens
      window.history.pushState({ modalOpen: true }, '');
      window.addEventListener('popstate', handlePopState);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  const teamMembers = [
    {
      id: 1,
      name: "Arjun Patel",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/arjunpatel",
      instagram: "https://instagram.com/arjun_patel",
      department: "Computer Science Engineering",
      year: "Final Year",
      email: "arjun.patel@nirmauni.ac.in",
      phone: "+91 98765 43210",
      bio: "Leading the club with a vision to make Nirma University a cybersecurity hub. Specialized in ethical hacking and penetration testing.",
      achievements: ["Winner of National Cybersecurity Championship 2024", "Certified Ethical Hacker (CEH)", "Published research on AI in Cybersecurity"],
      skills: ["Penetration Testing", "Network Security", "Python", "Linux", "OWASP Top 10"],
      experience: "3 years in cybersecurity, Former intern at CyberPeace Foundation"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/priyasharma",
      instagram: "https://instagram.com/priya_sharma",
      department: "Information Technology",
      year: "Final Year",
      email: "priya.sharma@nirmauni.ac.in",
      phone: "+91 98765 43211",
      bio: "Supporting the president in all club activities and specializing in digital forensics and incident response.",
      achievements: ["Runner-up in Gujarat State CTF 2024", "Certified Digital Forensics Investigator", "Led team of 15 in major cybersecurity project"],
      skills: ["Digital Forensics", "Incident Response", "Malware Analysis", "Java", "SQL"],
      experience: "2.5 years in cybersecurity, Research assistant in Digital Forensics Lab"
    },
    {
      id: 3,
      name: "Rahul Joshi",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rahuljoshi",
      instagram: "https://instagram.com/rahul_joshi",
      department: "Computer Science Engineering",
      year: "Third Year",
      email: "rahul.joshi@nirmauni.ac.in",
      phone: "+91 98765 43212",
      bio: "Developing secure applications and tools for the club. Expert in web security and secure coding practices.",
      achievements: ["Developed NSC Official Website", "Winner of Secure Coding Competition 2024", "Open Source Contributor"],
      skills: ["React.js", "Node.js", "Web Security", "OWASP", "Python", "Database Security"],
      experience: "2 years in web development, Freelance security consultant"
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/snehapatel",
      instagram: "https://instagram.com/sneha_patel",
      department: "Information Technology",
      year: "Third Year",
      email: "sneha.patel@nirmauni.ac.in",
      phone: "+91 98765 43213",
      bio: "Full-stack developer with focus on building cybersecurity tools and educational platforms for the club.",
      achievements: ["Built CTF Platform for club events", "Microsoft Student Ambassador", "Winner of HackNirma 2024"],
      skills: ["JavaScript", "Python", "React", "MongoDB", "API Security", "Cloud Security"],
      experience: "2 years in full-stack development, Intern at cybersecurity startup"
    },
    {
      id: 5,
      name: "Kiran Modi",
      role: "General Secretary",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/kiranmodi",
      instagram: "https://instagram.com/kiran_modi",
      department: "Computer Science Engineering",
      year: "Second Year",
      email: "kiran.modi@nirmauni.ac.in",
      phone: "+91 98765 43214",
      bio: "Managing club operations, organizing events, and maintaining member records with keen attention to detail.",
      achievements: ["Organized 15+ successful workshops", "Improved club membership by 200%", "Excellence in Event Management Award"],
      skills: ["Event Management", "Documentation", "Team Coordination", "Public Speaking", "Project Management"],
      experience: "1.5 years in club management, Former head of college technical society"
    },
    {
      id: 6,
      name: "Vivek Desai",
      role: "General Secretary",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/vivekdesai",
      instagram: "https://instagram.com/vivek_desai",
      department: "Information Technology",
      year: "Second Year",
      email: "vivek.desai@nirmauni.ac.in",
      phone: "+91 98765 43215",
      bio: "Co-managing club activities and specializing in member engagement and workshop coordination.",
      achievements: ["Coordinated largest cybersecurity awareness week", "Increased workshop attendance by 150%", "Student Leadership Certificate"],
      skills: ["Leadership", "Communication", "Event Planning", "Member Relations", "Administrative Skills"],
      experience: "1 year in club operations, Former cultural committee member"
    },
    {
      id: 7,
      name: "Amit Rana",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/amitrana",
      instagram: "https://instagram.com/amit_rana",
      department: "Computer Science Engineering",
      year: "Final Year",
      email: "amit.rana@nirmauni.ac.in",
      phone: "+91 98765 43216",
      bio: "Strategic planning and business development for the club. Building industry partnerships and career opportunities.",
      achievements: ["Secured partnerships with 5 major companies", "Established internship program", "Business Strategy Excellence Award"],
      skills: ["Strategic Planning", "Business Development", "Industry Relations", "Networking", "Leadership"],
      experience: "2 years in business development, Former startup co-founder"
    },
    {
      id: 8,
      name: "Riya Shah",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/riyashah",
      instagram: "https://instagram.com/riya_shah",
      department: "Information Technology",
      year: "Final Year",
      email: "riya.shah@nirmauni.ac.in",
      phone: "+91 98765 43217",
      bio: "Co-managing strategic initiatives and focusing on external relations and funding opportunities.",
      achievements: ["Raised ₹2L funding for club activities", "Established alumni network", "Excellence in External Relations"],
      skills: ["Fund Raising", "Alumni Relations", "External Partnerships", "Strategic Management", "Communication"],
      experience: "2 years in management, Former student council member"
    },
    {
      id: 9,
      name: "Dev Panchal",
      role: "Tech Head",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/devpanchal",
      instagram: "https://instagram.com/dev_panchal",
      department: "Computer Science Engineering",
      year: "Third Year",
      email: "dev.panchal@nirmauni.ac.in",
      phone: "+91 98765 43218",
      bio: "Leading technical initiatives, managing lab infrastructure, and developing cybersecurity tools for the club.",
      achievements: ["Set up advanced cybersecurity lab", "Developed 5+ security tools", "Technical Excellence Award 2024"],
      skills: ["Network Security", "System Administration", "Tool Development", "Linux", "Scripting", "Infrastructure"],
      experience: "2 years in system administration, Certified Network Security Professional"
    },
    {
      id: 10,
      name: "Harsh Mehta",
      role: "Tech Head",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/harshmehta",
      instagram: "https://instagram.com/harsh_mehta",
      department: "Information Technology",
      year: "Third Year",
      email: "harsh.mehta@nirmauni.ac.in",
      phone: "+91 98765 43219",
      bio: "Co-leading technical operations and specializing in cloud security and automation.",
      achievements: ["Automated club's entire infrastructure", "AWS Certified Solutions Architect", "Innovation Award 2024"],
      skills: ["Cloud Security", "DevSecOps", "Automation", "AWS", "Docker", "CI/CD"],
      experience: "2 years in cloud computing, Former tech intern at leading IT company"
    },
    {
      id: 11,
      name: "Nisha Gupta",
      role: "Public Relations Officer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/nishagupta",
      instagram: "https://instagram.com/nisha_gupta",
      department: "Computer Science Engineering",
      year: "Second Year",
      email: "nisha.gupta@nirmauni.ac.in",
      phone: "+91 98765 43220",
      bio: "Building public image of the club, managing media relations, and coordinating with external organizations.",
      achievements: ["Featured club in 10+ media outlets", "Built strong industry connections", "PR Excellence Award"],
      skills: ["Public Relations", "Media Management", "Content Writing", "Communication", "Brand Building"],
      experience: "1.5 years in PR, Former college magazine editor"
    },
    {
      id: 12,
      name: "Rohan Kumar",
      role: "Public Relations Officer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rohankumar",
      instagram: "https://instagram.com/rohan_kumar",
      department: "Information Technology",
      year: "Second Year",
      email: "rohan.kumar@nirmauni.ac.in",
      phone: "+91 98765 43221",
      bio: "Co-managing public relations and specializing in corporate communications and partnership building.",
      achievements: ["Established media partnerships", "Increased club visibility by 300%", "Communication Excellence Award"],
      skills: ["Corporate Communication", "Partnership Development", "Public Speaking", "Writing", "Networking"],
      experience: "1 year in communications, Former debate society president"
    },
    {
      id: 13,
      name: "Pooja Agarwal",
      role: "Social Media Head",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/poojaagarwal",
      instagram: "https://instagram.com/pooja_agarwal",
      department: "Computer Science Engineering",
      year: "Second Year",
      email: "pooja.agarwal@nirmauni.ac.in",
      phone: "+91 98765 43222",
      bio: "Managing all social media platforms, creating engaging content, and building online community for the club.",
      achievements: ["Grew Instagram followers to 5K+", "Viral cybersecurity awareness campaign", "Digital Marketing Certification"],
      skills: ["Social Media Marketing", "Content Creation", "Graphic Design", "Analytics", "Community Management"],
      experience: "2 years in digital marketing, Freelance social media consultant"
    },
    {
      id: 14,
      name: "Mayur Jain",
      role: "Publicity Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/mayurjain",
      instagram: "https://instagram.com/mayur_jain",
      department: "Information Technology",
      year: "Second Year",
      email: "mayur.jain@nirmauni.ac.in",
      phone: "+91 98765 43223",
      bio: "Creating promotional materials, managing publicity campaigns, and ensuring maximum reach for club events.",
      achievements: ["Designed all club promotional materials", "Increased event attendance by 400%", "Creative Excellence Award"],
      skills: ["Graphic Design", "Campaign Management", "Adobe Creative Suite", "Marketing", "Event Promotion"],
      experience: "1.5 years in design and marketing, Former creative head of college fest"
    },
    {
      id: 15,
      name: "Dhruv Trivedi",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/dhruvtrivedi",
      instagram: "https://instagram.com/dhruv_trivedi",
      department: "Computer Science Engineering",
      year: "Third Year",
      email: "dhruv.trivedi@nirmauni.ac.in",
      phone: "+91 98765 43224",
      bio: "Managing club finances, budget planning, and ensuring transparent financial operations for all activities.",
      achievements: ["Maintained 100% financial transparency", "Reduced expenses by 30%", "Financial Management Excellence"],
      skills: ["Financial Management", "Budget Planning", "Accounting", "Excel", "Financial Analysis"],
      experience: "2 years in finance, Former treasurer of multiple college committees"
    }
  ];

  const getRoleColor = (role) => {
    switch(role) {
      case 'President': return 'from-yellow-500 to-orange-500';
      case 'Vice President': return 'from-orange-500 to-red-500';
      case 'Software Developer': return 'from-blue-500 to-cyan-500';
      case 'General Secretary': return 'from-green-500 to-teal-500';
      case 'Managing Director': return 'from-purple-500 to-indigo-500';
      case 'Tech Head': return 'from-cyan-500 to-blue-500';
      case 'Public Relations Officer': return 'from-pink-500 to-rose-500';
      case 'Social Media Head': return 'from-violet-500 to-purple-500';
      case 'Publicity Head': return 'from-amber-500 to-yellow-500';
      case 'Treasurer': return 'from-emerald-500 to-green-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'President': return '👑';
      case 'Vice President': return '🥈';
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

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
    // Go back in history if modal was opened
    if (window.history.state && window.history.state.modalOpen) {
      window.history.back();
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated individuals who lead and shape the Nirma Security Club, 
            bringing expertise, passion, and innovation to cybersecurity education.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden group">
              
              {/* Member Photo */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-2xl">{getRoleIcon(member.role)}</span>
                </div>
              </div>
              
              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                
                {/* Role Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getRoleColor(member.role)} mb-3`}>
                  {member.role}
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{member.department}</p>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 mb-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
                
                {/* See More Button */}
                <button 
                  onClick={() => openModal(member)}
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                >
                  See More Info
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={(e) => {
              // Close modal when clicking on backdrop
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="p-8">
                
                {/* Close Button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Member Header */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-32 h-32 object-cover rounded-xl mx-auto md:mx-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h3>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getRoleColor(selectedMember.role)} mb-3`}>
                      {getRoleIcon(selectedMember.role)} {selectedMember.role}
                    </div>
                    <p className="text-gray-300 mb-2">{selectedMember.department}</p>
                    <p className="text-gray-400">{selectedMember.year}</p>
                  </div>
                </div>
                
                {/* Bio */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">About</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                </div>
                
                {/* Contact Info */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Contact</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      {selectedMember.email}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      {selectedMember.phone}
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Experience */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Experience</h4>
                  <p className="text-gray-300">{selectedMember.experience}</p>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 justify-center">
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href={selectedMember.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;