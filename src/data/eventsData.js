const hackverse1Gallery = [15, 19, 21, 25, 4, 6, 11, 1, 28].map(num => `https://ik.imagekit.io/cscitnu/hackverse-episode-1/${num}.jpg`);
const hackverse2Gallery = [9, 63, 32, 14, 88, 30, 45, 43, 11, 59,].map(num => `https://ik.imagekit.io/cscitnu/hackverse-episode-2/${num}.jpg`);

export const eventsData = [
    {
        id: 1,
        title: "HACKVERSE - Episode 2: ACCESS GRANTED",
        description: "An engaging live demonstration exploring Windows Malware, Android Spyware, and Digital Espionage. This workshop provided in-depth insights into the world of offensive security.",
        image: "/images/hackverse2.jpg",
        slug: "hackverse-episode-2",
        date: "October 30, 2025",
        time: "12:30 PM - 2:30 PM",
        location: "C Auditorium",
        participants: "250+",
        gallery: hackverse2Gallery,
        hidePoster: true
    },
    {
        id: 2,
        title: "HACKVERSE - Episode 1: The Journey Begins",
        description: "An engaging live demonstration exploring vulnerabilities, data breaches and dark web. Students learned about the foundational aspects of cybersecurity and how to protect against common threats.",
        image: "/images/hackverse1.jpg",
        slug: "hackverse-episode-1",
        date: "October 8, 2025",
        time: "12:30 PM - 2:30 PM",
        location: "C Auditorium",

        participants: "300+",
        gallery: hackverse1Gallery,
        hidePoster: true
    },
    {
        id: 3,
        title: "CSGC - 2.0 Briefing",
        description: "An engaging session by Mr. Hemang Prakhar introducing students to the Cybersecurity Grand Challenge 2.0. The session covered the rules, objectives, and strategies for participating in this prestigious competition.",
        image: "/images/csgc2.0.jpg",
        slug: "csgc-2.0-briefing",
        date: "March 28, 2025",
        time: "12:30 PM - 2:30 PM",
        location: "W 501",
        participants: "100+"
    },
    {
        id: 4,
        title: "Expert Lecture on Careers in Cybersecurity",
        description: "The session provided key insights which helped students to kickstart their career in Cybersecurity domain. Mr. Sandip Jadav shared his industry experience and guided students on the various career paths available.",
        image: "/images/expert_lec.jpg",
        slug: "expert-lecture-careers",
        date: "July 10, 2025",
        time: "12:30 PM - 2:30 PM",
        location: "W 501",

        participants: "150+"
    },
    {
        id: 5,
        title: "Cyber Awareness Session",
        description: "Dr. Uday Pratap Rao guided our M.Tech. in Cybersecurity students to a safe digital world. The session focused on best practices for digital hygiene and awareness against social engineering attacks.",
        image: "/images/cyber_awareness.jpg",
        slug: "cyber-awareness-session",
        date: "June 5, 2025",
        time: "12:30 PM - 2:30 PM",
        location: "E Block",
        participants: "120+"
    }
];
