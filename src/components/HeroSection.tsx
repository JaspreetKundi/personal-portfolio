import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
interface HeroSectionProps {
  onNavigate: (section: string) => void;
}
const HeroSection = ({
  onNavigate
}: HeroSectionProps) => {
  return <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.2
    }} className="text-center max-w-4xl mx-auto">
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-primary font-medium mb-4 text-lg">
          👋 Hi there, I'm
        </motion.p>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 glow-text">Jaspreet Kundi</motion.h1>

        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="font-display text-2xl md:text-4xl font-medium text-muted-foreground mb-8">
          A <span className="text-primary">Computer Science</span> Student
          <br />
          Building Scalable Solutions
        </motion.h2>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          "The only way to do great work is to love what you do." — Steve Jobs
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 1
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => onNavigate('projects')} className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            View My Work
          </button>
          <button onClick={() => onNavigate('about')} className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors">
            About Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.6,
      delay: 1.5
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.button onClick={() => onNavigate('projects')} animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </motion.button>
      </motion.div>
    </section>;
};
export default HeroSection;