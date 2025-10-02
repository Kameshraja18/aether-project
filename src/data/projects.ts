// Type definitions for the project structure
export interface Project {
  id: string;
  project_title: string;
  project_description: string;
  tags: string[];
  cover_image: string;
  completion_date: string;
  client_name: string;
  client_image: string;
  client_feedback: string;
  project_link: string;
  demo_video: string;
  project_images: string[];
  category: string;
  development_time: string;
  tech_stack: string[];
  featured?: boolean;
  year: string;
}

// Type for the projects data structure
export type ProjectsData = Record<string, Project[]>;

export const cseProjectsData: ProjectsData = {
  "Blockchain Development": [
    {
      id: "proj-blockchain-voting-001",
      project_title: "Blockchain based Voting System",
      project_description: "A secure and transparent voting platform leveraging Ethereum smart contracts for immutable vote recording and MySQL for efficient user authentication and data management. Features include voter registration, real-time polling, and tamper-proof results verification.",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "Voting System", "Decentralized"],
      cover_image: "https://aranca.com/assets/uploads/blogs/blockchanihelpovrban.jpg",
      completion_date: "2024-10-02",
      client_name: "ElectionTech Innovations",
      client_image: "/source/b1.png",
      client_feedback: "This system revolutionized our voting process—transparent, secure, and scalable. A game-changer for democratic integrity!",
      project_link: "http://www.youtube.com/@AHJINGAMING7",
      demo_video: "http://www.youtube.com/@AHJINGAMING7",
      project_images: ["https://aranca.com/assets/uploads/blogs/blockchanihelpovrban.jpg", "https://www.youtube.com/@AHJINGAMING7"],
      category: "Blockchain Development",
      development_time: "3 months",
      tech_stack: ["Ethereum", "Solidity", "MySQL", "Web3.js", "Node.js"],
      featured: true,
      year: "2024"
    },
  ],
 
};

// Helper functions for working with the projects data
export const getAllProjects = (): Project[] => {
  return Object.values(cseProjectsData).flat();
};

export const getProjectsByCategory = (category: string): Project[] => {
  return cseProjectsData[category] || [];
};

export const searchProjects = (query: string): Project[] => {
  const allProjects = getAllProjects();
  const lowercaseQuery = query.toLowerCase();

  return allProjects.filter(project =>
    project.project_title.toLowerCase().includes(lowercaseQuery) ||
    project.project_description.toLowerCase().includes(lowercaseQuery) ||
    project.tech_stack.some((tech: string) => tech.toLowerCase().includes(lowercaseQuery))
  );
};

export const getProjectById = (id: string): Project | undefined => {
  const allProjects = getAllProjects();
  return allProjects.find(project => project.id === id);
};