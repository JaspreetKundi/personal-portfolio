import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import ProjectModal from './ProjectModal';

const projects: Project[] = [
  {
    id: 1,
    title: 'Med SOAP AI',
    description: 'Full-stack AI clinical scribe built with Python (FastAPI), Vanilla JS, and SQLite. Uses OpenAI and the Web Speech API to automate SOAP note generation and analyze patient vitals in real-time.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'FastAPI', 'Uvicorn', 'SQLAlchemy', 'OpenAI API', 'Web Speech API', 'Bootstrap 5'],
    image: '/med-soap-ai-logo.jpg',
    githubUrl: 'https://github.com/JaspreetKundi/medical-soap-ai',
    //liveUrl: 'https://demo.com',
    fullDescription: 'Full-stack AI clinical scribe built with Python (FastAPI), Vanilla JS, and SQLite. Uses OpenAI and the Web Speech API to automate SOAP note generation and analyze patient vitals in real-time.',
    features: [
      'Real-time Speech-to-Text captures the conversation naturally',
      'Uses OpenAI to filter "chitchat" and extract medically relevant facts',
      'Automatically flags abnormal vitals (e.g., High BP, Fever) and ensures the "Plan" section addresses them',
      'A fully responsive UI with a high-contrast dark theme for night-shift clinicians',
      'One-click generation of official medical records for hospital filing',
      'A persistent SQLite database to track patient visits over time',
    ],
    techStack: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQLite', 'FastAPI', 'Uvicorn', 'SQLAlchemy', 'OpenAI API', 'Web Speech API', 'Bootstrap 5'],
  },
  {
    id: 2,
    title: 'Corner Coach',
    description: 'AI-powered boxing analysis tool that processes uploaded videos using OpenCV, MediaPipe, and Gemini AI to deliver performance breakdowns, strengths, weaknesses, and improvement tips.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask','MongoDB', 'Marked.js','DotEnv','OpenCV', 'MediaPipe', 'Gemini AI'],
    image: '/boxing-coach.png',
    githubUrl: 'https://github.com/JaspreetKundi/CornerCoach',
    liveUrl: 'https://devpost.com/software/cornercoach',
    fullDescription: 'AI-powered boxing analysis tool that processes uploaded videos using OpenCV, MediaPipe, and Gemini AI to deliver performance breakdowns, strengths, weaknesses, and improvement tips.',
    features: [
      'AI-Powered Pose Estimation: Utilizes MediaPipe and OpenCV to track 33 distinct body landmarks in real-time, calculating frame-by-frame Euclidean distances for key joints (shoulders, elbows, hips, knees).',
      'Generative Coaching Engine: Integrates Google Gemini 2.5 Flash to interpret raw biomechanical data and convert it into human-readable coaching advice, identifying jab vs. hook mechanics and stance errors.',
      'Automated Stance Analysis: Specifically algorithms to monitor lower-body stability by tracking "knee-to-knee" and "toe-to-toe" variance throughout the video to detect poor balance.',
      'Scalable Data Pipeline: Implemented a MongoDB database to efficiently store and retrieve high-frequency coordinate data for every frame of uploaded footage.',
      'Interactive Dashboard: Features a Flask-based web interface with Dark Mode, video history management, and Markdown-rendered performance reports.',
    ],
    techStack: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask','MongoDB', 'Marked.js','DotEnv','OpenCV', 'MediaPipe', 'Gemini AI'],
  },
  {
    id: 3,
    title: 'Blades of Eternity',
    description: 'A high-performance 2D game engine engineered from scratch using Core Java, Swing, and AWT. Features a custom multithreaded render loop, predictive AABB collision detection, and OOP-based entity management.',
    tags: ['Java', 'JFrame', 'JPanel', 'Threading', 'OOP','AABB Collision Detection'],
    image: '/game_pic.png',
    githubUrl: 'https://github.com/JaspreetKundi/Java-RPG-Engine',
    //liveUrl: 'https://demo.com',
    fullDescription: 'A high-performance 2D game engine engineered from scratch using Core Java, Swing, and AWT. Features a custom multithreaded render loop, predictive AABB collision detection, and OOP-based entity management.',
    features: [
      'Combat System: Real-time combat with hit detection and health management.',
      'NPC Interaction: Dialog system for friendly NPCs (e.g., the "Old Man" quest giver).',
      'Dynamic AI: Bosses utilize random number generation and state updates to patrol areas and change direction.',
      'World Building: A tile-based map system that supports collision layers and scrolling camera logic.',
    ],
    techStack: ['Java', 'JFrame', 'JPanel', 'Threading', 'AABB Collision Detection', 'OOP'],
  },
  {
    id: 4,
    title: 'Dijkstras Visualizer',
    description: 'Navigator X is an interactive, modern visualizer for Dijkstras Algorithm PathFinder Pro. Built to demonstrate advanced Data Structures & Algorithms concepts with a premium, modern user interface.',
    tags: ['React', 'Vite', 'Typescript', 'Tailwind CSS', 'shadcn','Radix'],
    image: '/project-preview.png',
    githubUrl: 'https://github.com/JaspreetKundi/dijkstra-s-navigator-x?tab=readme-ov-file',
    liveUrl: 'https://dijkstra-s-navigator-x.vercel.app',
    fullDescription: 'A high-performance 2D game engine engineered from scratch using Core Java, Swing, and AWT. Features a custom multithreaded render loop, predictive AABB collision detection, and OOP-based entity management.',
    features: [
      'Interactive Graph: Visual representation of nodes and edges with customizable routes.',
      'Real-time Visualization: Watch Dijkstras algorithm explore nodes, update distances, and find the shortest path step-by-step.',
      'Data Structures in Action: Visualizes the Min-Heap (Priority Queue) operations and adjacency list traversals.',
      'Modern UI: Built with a sleek, dark-themed glassmorphism aesthetic using Tailwind CSS and Framer Motion.',
      'Responsive Design: precise control over animation speed and graph customization.',
    ],
    techStack: ['React', 'Vite', 'Typescript', 'Tailwind CSS', 'shadcn','Radix'],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent works. Click on any project to learn more about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
