import React from 'react'
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import styles from './Project.module.css'

const Project = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.header}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project, id)=> (
                <ProjectCard key={id} project={project} />
            ))}
        </div>
    </section>
  )
}

export default Project