import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'
const ProjectCard = ({project:{ name, skills, imgSrc, description, source, demo}}) => {
  return (
    <div className={styles.container} >
        <img src={getImageUrl(imgSrc)} alt={name} className={styles.img} />
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.descrpt}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id)=>(
                <li key={id} className={styles.skill}>{skill}</li>
            ))}
        </ul>
        <div className={styles.demos}>
            <a href={demo} className={styles.demo}>Demo</a>
            <a href={source} className={styles.demo}>Source</a>
        </div>
    </div>
  )
}

export default ProjectCard