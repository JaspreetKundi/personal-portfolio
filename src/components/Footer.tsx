import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/JaspreetKundi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jaspreet-kundi/', label: 'LinkedIn' },
  //{ icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'jaspreetkundi6@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jaspreet Kundi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
