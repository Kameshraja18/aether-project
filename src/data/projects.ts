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
  features: string[];
}

// Type for the projects data structure
export type ProjectsData = Record<string, Project[]>;

export const cseProjectsData: ProjectsData = {
  "Machine Learning": [
    {
      id: "proj-ml-farming-001",
      project_title: "AI-Based Farming Recommendations",
      project_description: "An intelligent, AI-driven recommendation system designed to assist modern farmers in minimizing crop yield. By analyzing diverse datasets—including soil parameters (NPK values, pH), weather forecasts, and historical crop performance—the system uses machine learning algorithms to recommend the most suitable crops for specific conditions.",
      tags: ["Machine Learning", "Agriculture", "Yield Optimization", "Data Analysis"],
      cover_image: "/source/farming-ai.png",
      completion_date: "2025-08-10",
      client_name: "AgriTech Solutions",
      client_image: "/source/b1.png",
      client_feedback: "Transformed our advisory services. Farmers are seeing real yield improvements.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/farming-ai.png"],
      category: "Machine Learning",
      development_time: "4 months",
      tech_stack: ["Python", "Scikit-Learn", "FastAPI", "React"],
      featured: true,
      year: "2025",
      features: [
        "Soil parameter analysis (NPK, pH)",
        "Real-time weather forecast integration",
        "Crop yield prediction models",
        "Fertilizer usage recommendations",
        "Irrigation scheduling tailored to crops",
        "Historical crop performance tracking",
        "Visual dashboard for farm data",
        "Mobile-friendly interface for field use"
      ]
    },
    {
      id: "proj-ml-pneumonia-001",
      project_title: "AI-Powered Pneumonia Classification",
      project_description: "Utilizes Deep Learning, specifically Convolutional Neural Networks (CNN), to automate the detection of pneumonia. The model is trained on a dataset of labeled chest X-ray images to distinguish between 'Normal' and 'Pneumonia' lungs, serving as a reliable second opinion for medical professionals.",
      tags: ["Deep Learning", "CNN", "Medical Imaging", "Healthcare"],
      cover_image: "/source/pneumonia-ai.png",
      completion_date: "2025-07-20",
      client_name: "HealthAI Corp",
      client_image: "/source/b1.png",
      client_feedback: "High accuracy and speed. A valuable tool for our radiologists.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/pneumonia-ai.png"],
      category: "Machine Learning",
      development_time: "3 months",
      tech_stack: ["TensorFlow", "Keras", "Python", "Flask"],
      year: "2025",
      features: [
        "Automated Chest X-ray analysis",
        "CNN-based classification (Normal vs Pneumonia)",
        "High-accuracy disease detection",
        "Heatmap visualization of affected areas",
        "Fast processing for emergency triage",
        "Secure patient data handling",
        "Integration with hospital PACS systems",
        "Detailed diagnostic reports"
      ]
    },
    {
      id: "proj-ml-brain-tumor-001",
      project_title: "Brain Tumor Detection Using CNN",
      project_description: "Implements a Deep Learning approach using Convolutional Neural Networks (CNN) to detect and classify brain tumors from Magnetic Resonance Imaging (MRI) scans. The system preprocesses MRI images to remove noise and then utilizes the CNN to identify the presence of a tumor.",
      tags: ["Deep Learning", "CNN", "MRI Analysis", "Healthcare"],
      cover_image: "/source/brain-tumor.png",
      completion_date: "2025-09-15",
      client_name: "MedAI Labs",
      client_image: "/source/b1.png",
      client_feedback: "Impressive accuracy and ease of use. This tool has streamlined our diagnostic workflow.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/brain-tumor.png"],
      category: "Machine Learning",
      development_time: "5 months",
      tech_stack: ["Streamlit", "Python", "TensorFlow", "OpenCV"],
      year: "2025",
      features: [
        "MRI scan preprocessing and noise reduction",
        "Tumor region segmentation",
        "Multi-class tumor classification",
        "3D visualization of brain scans",
        "Confidence score for predictions",
        "User-friendly web interface for uploads",
        "Exportable analysis reports",
        "Cloud-based processing support"
      ]
    },
    {
      id: "proj-ml-tbi-001",
      project_title: "AI-Powered Traumatic Brain Injury Detection",
      project_description: "Proposes an AI-powered system to detect TBI and predict the likelihood of coma progression. By analyzing input data such as CT scan images and clinical parameters (like the Glasgow Coma Scale), the model identifies patterns indicative of severe brain trauma.",
      tags: ["AI", "Trauma Care", "Predictive Analytics", "Medical"],
      cover_image: "/source/tbi-detection.png",
      completion_date: "2025-10-01",
      client_name: "EmergencyResponse Tech",
      client_image: "/source/b1.png",
      client_feedback: "Critical support during the golden hour. A potential lifesaver.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/tbi-detection.png"],
      category: "Machine Learning",
      development_time: "6 months",
      tech_stack: ["PyTorch", "Python", "Pandas", "React"],
      year: "2025",
      features: [
        "CT scan anomaly detection",
        "Glasgow Coma Scale integration",
        "Coma progression prediction",
        "Real-time severity assessment",
        "Emergency alert system for severe cases",
        "Longitudinal patient data tracking",
        "Mobile support for first responders",
        "Secure health data encryption"
      ]
    },
    {
      id: "proj-ml-cattle-001",
      project_title: "AI-Based Cattle Breed Detection",
      project_description: "A computer vision-based application for the automatic classification of cattle breeds. Using a camera-equipped device, the system captures images of cattle and processes them using deep learning algorithms to identify specific features (color, horn shape, body structure).",
      tags: ["Computer Vision", "Agriculture", "Livestock Management"],
      cover_image: "/source/cattle-breed.png",
      completion_date: "2025-06-12",
      client_name: "SmartFarm Systems",
      client_image: "/source/b1.png",
      client_feedback: "Greatly simplified our inventory tracking. Very reliable identification.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/cattle-breed.png"],
      category: "Machine Learning",
      development_time: "3 months",
      tech_stack: ["YOLO", "Python", "OpenCV", "Android"],
      year: "2025",
      features: [
        "Real-time breed identification via camera",
        "Body feature analysis (horns, color)",
        "Automated livestock inventory",
        "Health and weight estimation integration",
        "Offline mode for remote areas",
        "Cloud sync for farm management",
        "Breed-specific nutrition guidelines",
        "Multi-cattle detection in one frame"
      ]
    },
    {
      id: "proj-ml-asl-001",
      project_title: "ASL Detection and Speech Conversion",
      project_description: "A real-time American Sign Language (ASL) recognition system. Leveraging Convolutional Neural Networks (CNN), the system captures video input of hand gestures and translates them into text, which is subsequently converted into audible speech using Text-to-Speech (TTS) technology.",
      tags: ["NLP", "Computer Vision", "Accessibility", "ASL"],
      cover_image: "/source/asl-sign.png",
      completion_date: "2025-11-20",
      client_name: "InclusiveTech",
      client_image: "/source/b1.png",
      client_feedback: "A powerful tool for bridging communication gaps. The real-time performance is excellent.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/asl-sign.png"],
      category: "Machine Learning",
      development_time: "4 months",
      tech_stack: ["TensorFlow", "OpenCV", "Python", "TTS API"],
      year: "2025",
      features: [
        "Real-time hand gesture tracking",
        "Instant ASL to Text translation",
        "Text-to-Speech (TTS) audio output",
        "Bidirectional communication support",
        "Custom gesture training capability",
        "Mobile app integration",
        "Offline functionality",
        "Support for multiple sign languages"
      ]
    }
  ],
  "Blockchain Development": [
    {
      id: "proj-blockchain-voting-001",
      project_title: "Blockchain-Based Voting System",
      project_description: "A decentralized electronic voting system leveraging Blockchain technology. The core voting logic is deployed as a Smart Contract on the Ethereum blockchain to ensure that votes are immutable and tamper-proof. MySQL is used for non-critical user data management.",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "Voting System"],
      cover_image: "/source/blockchain-voting.png",
      completion_date: "2024-10-02",
      client_name: "ElectionTech Innovations",
      client_image: "/source/b1.png",
      client_feedback: "Revolutionized our voting process—transparent, secure, and scalable.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/blockchain-voting.png"],
      category: "Blockchain Development",
      development_time: "3 months",
      tech_stack: ["Ethereum", "Solidity", "MySQL", "Web3.js", "Node.js"],
      featured: true,
      year: "2024",
      features: [
        "Ethereum smart contracts for immutable voting",
        "MySQL database for user authentication",
        "Real-time polling and results verification",
        "Voter registration system",
        "Tamper-proof audit trails",
        "Web3 wallet integration",
        "Cryptographic vote verification",
        "Admin dashboard for election management",
        "Multi-signature security features",
        "Comprehensive documentation and deployment guide"
      ]
    }
  ],
  "Web Development": [
    {
      id: "proj-web-college-001",
      project_title: "College Management Website",
      project_description: "A comprehensive College Management System developed using Node.js and MongoDB. The web application provides a centralized platform with distinct modules for students, faculty, and administrators, featuring digital attendance tracking, online assignment submission, and fee management.",
      tags: ["Full Stack", "Node.js", "MongoDB", "Education"],
      cover_image: "/source/college-dashboard.png",
      completion_date: "2025-05-30",
      client_name: "EduAdmin Solutions",
      client_image: "/source/b1.png",
      client_feedback: "Streamlined our administrative tasks significantly. The interface is intuitive for all users.",
      project_link: "#",
      demo_video: "#",
      project_images: ["/source/college-dashboard.png"],
      category: "Web Development",
      development_time: "4 months",
      tech_stack: ["Node.js", "Express", "MongoDB", "EJS"],
      year: "2025",
      features: [
        "Role-based access (Student, Faculty, Admin)",
        "Digital attendance tracking system",
        "Online assignment submission and grading",
        "Fee management and payment gateway",
        "Exam result publication portal",
        "Library management module",
        "Real-time campus announcements",
        "Secure student data management"
      ]
    }
  ]
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