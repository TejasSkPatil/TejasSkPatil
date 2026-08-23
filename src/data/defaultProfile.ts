import { ProfileData } from '../types';

export const TEJAS_PROFILE: ProfileData = {
  githubUsername: 'TejasSkPatil',
  fullName: 'Tejas S. Patil',
  tagline: 'Building software. Creating beautiful experiences. Always learning. Never stopping.',
  subtitle1: 'Building software.',
  subtitle2: 'Creating beautiful experiences.',
  subtitle3: 'Always learning. Never stopping.',
  greetingTitle: "Hi there! I'm Tejas",
  greetingSubtitle: 'Passionate Full-Stack & AI/ML Developer from India building AgriGenius & AgriTech solutions.',
  aboutMeTitle: 'About Me',
  infoBlocks: [
    {
      id: 'building',
      icon: '🚀',
      title: 'Currently Building',
      description: 'Innovative AgriTech platforms and AI-powered web tools. Merging creativity with machine learning, smart crop advice, and event management platforms.'
    },
    {
      id: 'learning',
      icon: '📚',
      title: 'Learning',
      description: 'Deepening expertise in Gemini AI, Full-Stack MERN Architecture, Cloud Deployment, and System Design. Every day is a chance to grow.'
    },
    {
      id: 'opensource',
      icon: '🌐',
      title: 'Open Source',
      description: 'Passionate about contributing to open source ecosystems. Believing in collaborative development, AgriTech tools, and sharing knowledge freely.'
    },
    {
      id: 'location',
      icon: '📍',
      title: 'Location',
      description: 'Building from Maharashtra, India, contributing to the global developer community with high-impact software.'
    },
    {
      id: 'interests',
      icon: '💡',
      title: 'Interests',
      description: 'AI/ML, Smart Agriculture (AgriGenius), Full-Stack MERN Development, Event Systems with Greenery Themes, and building meaningful software.'
    },
    {
      id: 'goals',
      icon: '🎯',
      title: 'Goals',
      description: 'To innovate with AgriGenius, empower farmers & event managers, inspire fellow developers, and make a lasting impact through tech.'
    }
  ],
  techCategories: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', bgHex: 'E34F26', textHex: 'white', logo: 'html5' },
        { name: 'CSS3', bgHex: '1572B6', textHex: 'white', logo: 'css3' },
        { name: 'JAVASCRIPT', bgHex: 'F7DF1E', textHex: 'black', logo: 'javascript' },
        { name: 'REACT', bgHex: '61DAFB', textHex: 'black', logo: 'react' },
        { name: 'TAILWIND', bgHex: '06B6D4', textHex: 'white', logo: 'tailwindcss' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'NODE.JS', bgHex: '339933', textHex: 'white', logo: 'node.js' },
        { name: 'EXPRESS.JS', bgHex: '000000', textHex: 'white', logo: 'express' },
        { name: 'PYTHON', bgHex: '3776AB', textHex: 'white', logo: 'python' },
        { name: 'MONGODB', bgHex: '47A248', textHex: 'white', logo: 'mongodb' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'GIT', bgHex: 'F05032', textHex: 'white', logo: 'git' },
        { name: 'GITHUB', bgHex: '181717', textHex: 'white', logo: 'github' },
        { name: 'VS CODE', bgHex: '007ACC', textHex: 'white', logo: 'visualstudiocode' },
        { name: 'DOCKER', bgHex: '2496ED', textHex: 'white', logo: 'docker' }
      ]
    },
    {
      category: 'AI & ML',
      items: [
        { name: 'OPENAI', bgHex: '412991', textHex: 'white', logo: 'openai' },
        { name: 'GEMINI AI', bgHex: '8E75B2', textHex: 'white', logo: 'google' },
        { name: 'TENSORFLOW', bgHex: 'FF6F00', textHex: 'white', logo: 'tensorflow' },
        { name: 'MACHINE LEARNING', bgHex: '20232A', textHex: '61DAFB', logo: 'scikit-learn' }
      ]
    }
  ],
  featuredProjects: [
    {
      id: 'agri-genius',
      title: 'AgriGenius',
      repoName: 'TejasSkPatil/AgriGenius',
      repoUrl: 'https://github.com/TejasSkPatil/AgriGenius',
      description: 'AI-driven smart agriculture solution providing crop disease detection, yield optimization, and AI crop advisory.',
      tags: ['React', 'Gemini AI', 'Node.js', 'AgriTech'],
      icon: '🧠'
    },
    {
      id: 'agri-tech',
      title: 'AgriTech',
      repoName: 'TejasSkPatil/AgriTech',
      repoUrl: 'https://github.com/TejasSkPatil/AgriTech',
      description: 'Comprehensive digital farming platform with equipment rental, direct marketplace, and live weather integration.',
      tags: ['Full Stack', 'Express', 'MongoDB', 'Smart Farming'],
      icon: '🚜'
    },
    {
      id: 'plant-store',
      title: 'plant-store',
      repoName: 'TejasSkPatil/plant-store',
      repoUrl: 'https://github.com/TejasSkPatil/plant-store',
      description: 'AI suggestion engine for Event Management companies & corporate fests with greenery themes, plant rentals & decor ideas.',
      tags: ['AI Suggestions', 'Event Management', 'Greenery Theme', 'React'],
      icon: '🌿'
    },
    {
      id: 'todo-list-mern',
      title: 'todo-list-mern',
      repoName: 'TejasSkPatil/todo-list-mern',
      repoUrl: 'https://github.com/TejasSkPatil/todo-list-mern',
      description: 'Full-stack MERN task manager featuring category workflows, priority filters, and real-time state synchronization.',
      tags: ['MERN Stack', 'Node.js', 'Express', 'React'],
      icon: '📋'
    }
  ],
  achievementStats: [
    {
      icon: '💻',
      number: '12+',
      title: 'Repositories',
      subtitle: 'Open source & personal projects'
    },
    {
      icon: '⚒️',
      number: '250+',
      title: 'Contributions',
      subtitle: 'Commits, issues & pull requests'
    },
    {
      icon: '⭐',
      number: '15+',
      title: 'Stars Earned',
      subtitle: 'Recognition from developer community'
    },
    {
      icon: '🤖',
      number: 'AI & Automation',
      title: 'Smart Agri Systems',
      subtitle: 'Exploring LLM & Computer Vision in Agriculture'
    },
    {
      icon: '📚',
      number: 'Continuous Learning',
      title: 'Ongoing Growth',
      subtitle: '1+ yr deepening full-stack & AI expertise'
    },
    {
      icon: '🌐',
      number: 'Community',
      title: 'Connected',
      subtitle: 'Active developer & open-source network'
    }
  ],
  milestones: [
    {
      id: 'm1',
      status: 'completed',
      title: 'Started Programming',
      description: 'Began the journey into computer science and software development.'
    },
    {
      id: 'm2',
      status: 'completed',
      title: 'First GitHub Repository',
      description: 'Created the first repo and mastered version control workflows.'
    },
    {
      id: 'm3',
      status: 'completed',
      title: 'Built AI Agri Projects',
      description: 'Engineered AgriGenius & AgriTech using React, Gemini AI, and Node.js.'
    },
    {
      id: 'm4',
      status: 'completed',
      title: 'Greenery Event Engine',
      description: 'Created plant-store with AI event suggestions for companies and festivals.'
    },
    {
      id: 'm5',
      status: 'in_progress',
      title: 'Building Advanced Systems',
      description: 'Developing automated AgriTech intelligence tools & MERN solutions.'
    },
    {
      id: 'm6',
      status: 'future',
      title: 'Large Scale Open Source Impact',
      description: 'Aiming to contribute to major global open source agricultural & AI initiatives.'
    }
  ],
  activeMission: {
    status: 'Active Mission Status: Building AgriGenius',
    progressPercent: 88,
    systemsBuilt: 4,
    nextGoal: 'AgriTech OSS Launch'
  },
  dailyQuote: {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  socials: {
    github: 'https://github.com/TejasSkPatil',
    linkedin: 'https://linkedin.com/in/tejasspatil',
    email: 'tejasspatil2601@gmail.com'
  }
};

export const RAJ_PROFILE: ProfileData = {
  githubUsername: 'Kadhare-Raj-Chandrakant',
  fullName: 'Kadhare Raj Chandrakant',
  tagline: 'Building software. Creating beautiful experiences. Always learning. Never stopping.',
  subtitle1: 'Building software.',
  subtitle2: 'Creating beautiful experiences.',
  subtitle3: 'Always learning. Never stopping.',
  greetingTitle: "Hi there! I'm Raj",
  greetingSubtitle: 'Software Engineer & Open Source Enthusiast',
  aboutMeTitle: 'About Me',
  infoBlocks: [
    {
      id: 'building',
      icon: '🚀',
      title: 'Currently Building',
      description: 'Innovative projects that merge creativity with technology. Exploring AI, full-stack, and open source solutions.'
    },
    {
      id: 'learning',
      icon: '📚',
      title: 'Learning',
      description: 'Deepening expertise in AI/ML, cloud architecture, and system design. Every day is a chance to grow.'
    },
    {
      id: 'opensource',
      icon: '🌐',
      title: 'Open Source',
      description: 'Passionate about contributing to open source. Believing in collaborative development and knowledge sharing.'
    },
    {
      id: 'location',
      icon: '📍',
      title: 'Location',
      description: 'Building from somewhere in the world, contributing to the global developer community.'
    },
    {
      id: 'interests',
      icon: '💡',
      title: 'Interests',
      description: 'AI, Web Development, Cloud Computing, Open Source, System Design, and building meaningful software.'
    },
    {
      id: 'goals',
      icon: '🎯',
      title: 'Goals',
      description: 'To innovate, inspire, and make a lasting impact through technology. Continually pushing boundaries.'
    }
  ],
  techCategories: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', bgHex: 'E34F26', textHex: 'white', logo: 'html5' },
        { name: 'CSS3', bgHex: '1572B6', textHex: 'white', logo: 'css3' },
        { name: 'JAVASCRIPT', bgHex: 'F7DF1E', textHex: 'black', logo: 'javascript' },
        { name: 'REACT', bgHex: '61DAFB', textHex: 'black', logo: 'react' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'NODE.JS', bgHex: '339933', textHex: 'white', logo: 'node.js' },
        { name: 'PYTHON', bgHex: '3776AB', textHex: 'white', logo: 'python' },
        { name: 'JAVA', bgHex: 'ED8B00', textHex: 'white', logo: 'openjdk' },
        { name: 'EXPRESS.JS', bgHex: '000000', textHex: 'white', logo: 'express' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'GIT', bgHex: 'F05032', textHex: 'white', logo: 'git' },
        { name: 'GITHUB', bgHex: '181717', textHex: 'white', logo: 'github' },
        { name: 'VS CODE', bgHex: '007ACC', textHex: 'white', logo: 'visualstudiocode' },
        { name: 'DOCKER', bgHex: '2496ED', textHex: 'white', logo: 'docker' }
      ]
    },
    {
      category: 'AI & ML',
      items: [
        { name: 'OPENAI', bgHex: '412991', textHex: 'white', logo: 'openai' },
        { name: 'TENSORFLOW', bgHex: 'FF6F00', textHex: 'white', logo: 'tensorflow' },
        { name: 'LLM', bgHex: '551A8B', textHex: 'white', logo: 'meta' },
        { name: 'ML', bgHex: '000000', textHex: 'white', logo: 'python' }
      ]
    }
  ],
  featuredProjects: [
    {
      id: 'neural',
      title: 'neural-experimental',
      repoName: 'Kadhare-Raj-Chandrakant/neural-experimental',
      repoUrl: 'https://github.com/Kadhare-Raj-Chandrakant/neural-experimental',
      description: 'Experimental neural network projects exploring AI architectures and deep learning concepts.',
      tags: ['Python', 'AI/ML', 'Research'],
      icon: '🧠'
    },
    {
      id: 'voice',
      title: 'voice',
      repoName: 'Kadhare-Raj-Chandrakant/voice',
      repoUrl: 'https://github.com/Kadhare-Raj-Chandrakant/voice',
      description: 'Voice-based application exploring speech recognition and audio processing capabilities.',
      tags: ['Python', 'Audio', 'NLP'],
      icon: '🎙️'
    },
    {
      id: 'physics',
      title: 'physicsproject',
      repoName: 'Kadhare-Raj-Chandrakant/physicsproject',
      repoUrl: 'https://github.com/Kadhare-Raj-Chandrakant/physicsproject',
      description: 'Physics simulation and computation project exploring scientific computing concepts.',
      tags: ['HTML', 'Physics Simulation'],
      icon: '🔬'
    },
    {
      id: 'raphael',
      title: 'Raphael',
      repoName: 'Kadhare-Raj-Chandrakant/Raphael',
      repoUrl: 'https://github.com/Kadhare-Raj-Chandrakant/Raphael',
      description: 'Creative project exploring artistic expression through code and computation.',
      tags: ['Python', 'Creative Art'],
      icon: '🎨'
    }
  ],
  achievementStats: [
    {
      icon: '💻',
      number: '8',
      title: 'Repositories',
      subtitle: 'Open source & personal projects'
    },
    {
      icon: '⚒️',
      number: '0',
      title: 'Contributions',
      subtitle: 'Commits, issues & pull requests'
    },
    {
      icon: '⭐',
      number: '0',
      title: 'Stars Earned',
      subtitle: 'Recognition from the community'
    },
    {
      icon: '🤖',
      number: 'AI & Automation',
      title: 'Exploring',
      subtitle: 'Intelligent systems & workflows'
    },
    {
      icon: '📚',
      number: 'Continuous Learning',
      title: 'Ongoing',
      subtitle: '1 yr deepening expertise'
    },
    {
      icon: '🌐',
      number: 'Community',
      title: 'Connected',
      subtitle: '1 follower & growing'
    }
  ],
  milestones: [
    {
      id: 'rm1',
      status: 'completed',
      title: 'Started Programming',
      description: 'Began the journey into software development.'
    },
    {
      id: 'rm2',
      status: 'completed',
      title: 'First GitHub Repository',
      description: 'Created the first repo, learning version control.'
    },
    {
      id: 'rm3',
      status: 'completed',
      title: 'First Open Source Contribution',
      description: 'Contributed to community projects.'
    },
    {
      id: 'rm4',
      status: 'completed',
      title: 'Built AI Projects',
      description: 'Explored AI/ML architectures and built apps.'
    },
    {
      id: 'rm5',
      status: 'in_progress',
      title: 'Building Advanced Systems',
      description: 'Developing automation tools & full-stack solutions.'
    },
    {
      id: 'rm6',
      status: 'future',
      title: 'Large Scale Open Source Impact',
      description: 'Aiming to contribute to major OSS projects.'
    }
  ],
  activeMission: {
    status: 'Active Mission Status',
    progressPercent: 82,
    systemsBuilt: 3,
    nextGoal: 'OSS Next Goal'
  },
  dailyQuote: {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  socials: {
    github: 'https://github.com/Kadhare-Raj-Chandrakant',
    linkedin: 'https://linkedin.com',
    email: 'raj@example.com'
  }
};
