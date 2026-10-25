
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      id: 1,
      degree: 'BE in Computer Science & Engineering',
      institution: 'Jain College of Engineering Belagavi',
      year: '2023 - 2026',
    },
    {
      id: 2,
      degree: 'Diploma in Meachtronics',
      institution: 'K.H.Kabbur Institution of Engineering College Dharwad.',
      year: '2021 - 2023',
    },
    {
      id: 3,
      degree: 'High School',
      institution: 'Rotary English Medium High School Dharwad.',
      year: '2008 - 2020',
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'React.jsx',
    'JavaScript',
    'SQL',
    'Python',
    'Django',
    'Rest API',
    'React.js',
    'Node.js',
    'Tailwind CSS',
  ];

  const tools = [
    'Postman',
    'Git & GitHub',
    'VS Code',
    'Claude',
    'Figma',
    'Collab',
    'Mongodb',
    'Vercel',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Inline styles for Skills and Tools
  const chipContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '10px',
  };

  const chipStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px 13px',
    borderRadius: '999px',
    backgroundColor: '#0EA5E9',
    color: '#FFFFFF',
    border: '1px solid #0EA5E9',
    fontSize: '0.9rem',
    fontWeight: 500,
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
    cursor: 'default',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  };

  return (
    <section id="about" className="py-2 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio and Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 text-dark"
              variants={itemVariants}
            >
              Who I Am
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              <p className="text-justify">I am a passionate software developer and logical thinker who enjoys turning
              ideas into impactful practical solutions. with a strong foundation in full-stack development,
              database integration, REST API development, and application deployment, I focus on 
              building scalable, efficient, and user-friendly applications that solve real-world problems. 
              I am always eager to learn new technologies and continuously improving my problem-solving skills.</p>
            </motion.p>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaGraduationCap
                  className="mr-2 text-primary"
                  size={20}
                />
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-primary pl-4 py-1"
                  >
                    <h4 className="text-lg font-semibold">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills, Tools and Internship */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Skills */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-dark">
                Skills
              </h3>

              <div style={chipContainerStyle}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={chipStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0284C7';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0EA5E9';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-dark">
                Tools
              </h3>

              <div style={chipContainerStyle}>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    style={chipStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0284C7';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0EA5E9';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Internship Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-dark flex items-center">
                <FaBriefcase
                  className="mr-2 text-primary"
                  size={22}
                />
                Internship Experience
              </h3>

              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-semibold text-dark">
                  Internship Experience
                </h4>

                 <p className="text-gray-700 mt-2">
                 <p className="text-justify"> I completed an internship as a Frontend Developer at JIEF Technologies, 
                 where I gained practical experience in a professional work environment. 
                 This opportunity allowed me to apply my technical knowledge to real-world 
                 tasks while strengthening my problem-solving, teamwork, and collaboration skills. </p>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

{/* #0EA5E9 RGB: 14, 165, 233 Cyan Blue */}