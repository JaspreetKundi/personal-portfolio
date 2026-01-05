import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Play } from 'lucide-react';
import { Project } from './ProjectCard';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-card rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-primary text-primary-foreground cursor-pointer hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
                <p className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                  Video demo coming soon
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  About This Project
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    Key Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-muted text-foreground rounded-lg transition-colors font-medium"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
