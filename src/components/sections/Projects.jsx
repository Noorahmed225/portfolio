
import './Projects.css';
import React, { useState } from 'react';
import allProjectsData from '../../data/projectsData';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
 const [filter] = useState('all');

  const projectsData = allProjectsData;

  // Filter projects based on selected category
  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-4 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        {/* Filter buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-md">
            {/* Add filter buttons here when needed */}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              variants={itemVariants}
            >
              {/* Project image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Image overlay icons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-dark p-2 rounded-full hover:bg-primary transition duration-300"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-dark p-2 rounded-full hover:bg-primary transition duration-300"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-2">
                  {project.description}
                </p>

                {/* Blue clickable live project link */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mb-4 text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                  >
                    View Live Project
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies
                    .filter((tech) => tech && tech.trim() !== '')
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
