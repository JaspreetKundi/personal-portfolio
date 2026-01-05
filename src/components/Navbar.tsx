import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Navbar = ({ onNavigate, activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          onClick={() => handleNavClick('home')}
          className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          Jaspreet Kundi
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`nav-link font-medium text-sm uppercase tracking-wide ${
                  activeSection === item.id ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2 font-medium text-sm uppercase tracking-wide transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
