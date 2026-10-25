
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import projectsData from '../../data/projectsData';

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-10 bg-white">
      <div className="section-container">
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-md bg-primary text-white"
        >
          <FaArrowLeft />
          Back
        </button>

        <h2 className="section-title">All Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-primary"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="text-primary"
                    >
                      <FaExternalLinkAlt size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
