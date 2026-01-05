import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu } from 'lucide-react';
const skills = [{
  icon: Code,
  title: 'Languages',
  items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'R', 'HTML', 'CSS']
}, {
  icon: Globe,
  title: 'Web Development',
  items: ['React', 'Node.js', 'Next.js', 'TailwindCSS', 'REST APIs', 'FastAPI', 'Flask', 'Bootstrap']
}, {
  icon: Database,
  title: 'Databases',
  items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite']
}, {
  icon: Cpu,
  title: 'Tools & Others',
  items: ['Git', 'Docker', 'AWS', 'Linux', 'Agile']
}];
const AboutSection = () => {
  return <section id="about" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me and my technical background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="space-y-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
          <img 
            src="/pfp-main.png" 
            alt="Jaspreet Kundi" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="font-display text-2xl font-semibold text-foreground">Hello! I'm Jaspreet Kundi</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Computer Science student with a love for building 
                efficient, scalable, and user-friendly applications. My journey in 
                programming started with curiosity and has evolved into a deep 
                commitment to mastering my craft.
              </p>
              <p>
                I enjoy tackling complex problems and turning ideas into reality 
                through code. Whether it's developing web applications, designing 
                algorithms, or exploring machine learning, I'm always eager to learn 
                and grow.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
              <p>
              I have also developed a strong interest in the potential of AI and Machine Learning
              to solve real-world problems. To deepen my understanding, I am currently
              immersing myself in the mathematical foundations of ML and taking advanced
              coursework. My goal is to move beyond just using existing tools to understanding
              the core algorithms that drive intelligent decision-making.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
            const Icon = skill.icon;
            return <motion.div key={skill.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-3">
                    {skill.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {skill.items.map(item => <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>)}
                  </ul>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;