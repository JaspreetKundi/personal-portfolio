import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  fullDescription?: string;
  features?: string[];
  techStack?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative card-glow rounded-xl overflow-hidden bg-card cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Click indicator */}
      <div className="absolute bottom-4 right-4 text-muted-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Click to view details →
      </div>
    </motion.div>
  );
};

export default ProjectCard;
