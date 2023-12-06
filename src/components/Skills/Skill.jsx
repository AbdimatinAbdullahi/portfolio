import React from 'react'
import Skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import styles from '../Skills/skills.module.css';
const Skill = () => {
  return (
    <section className={styles.container} id='skills'>
      <h2 className={styles.header}>Skills</h2>
      <div>
        <div  className={styles.skills}>
          {Skills.map((skill, id)=>{
            return <div key={id}  className={styles.skill}>
                <div className={styles.skillContainer}>
                  <img src={getImageUrl(skill.ImgSrc)} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Skill