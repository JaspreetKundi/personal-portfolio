import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Download } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University of Guelph',
    period: '2024 - 2028',
    description: 'Relevant coursework: Data Structures and Algorithms, Operating Systems, Java OOP, Calculas, Linear Algebra, Statistics,  Software System Dvlmt & Intgrn, Structure/Applicat - Microcomp',
  },
  {
    degree: 'High School Diploma',
    school: 'Mississuaga Secondary School',
    period: '2020 - 2024',
    description: 'Relevant coursework: Computer Science, Advanced Functions, Calculas, Physics',
  },
];
const experience = [
  {
    title: 'Software Developer',
    company: 'Corner Coach',
    period: 'Spur Hacks - Hackathon June 2025',
    description: 'Built a full stack pipeline from pose detection to AI feedback. Got Gemini to act like a real coach, giving clear, motivational advice. Created a system that works without any special hardware or sensors. Packaged everything into a responsive and easy-to-use interface. Developed something athletes could actually use and benefit from.',
  },
  {
    title: 'Coding Club Member',
    company: 'Mississuaga Secondary School',
    period: '2023 - 2024',
    description: 'Studied Waterloo leveled coding problems in preparation for the Waterloo Coding Contest',
  },
];

const achievements = [
  "Dean's List - 4.0 GPA for second year first semester",
  '94% Average and Honors list for High School',
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            My education, experience, and achievements
          </p>
          <motion.a
            href="/jaspreet-resume-test.pdf"
            download="Jaspreet-Kundi-Resume.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download size={20} />
            Download Resume PDF
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary text-sm mb-2">{edu.school}</p>
                  <p className="text-muted-foreground text-xs mb-3">
                    {edu.period}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Experience
              </h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-primary text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mb-3">
                    {exp.period}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Achievements
              </h3>
            </div>
            
            <div className="p-5 bg-card rounded-xl border border-border">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
