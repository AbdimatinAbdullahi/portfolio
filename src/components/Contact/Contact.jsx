import React from 'react'
import styles from './Contact.module.css';
import {getImageUrl} from '../../utils'
const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contacts</h2>
        <p>Feel Free To Contact</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('emailIcon.png')} alt="Email Icon" />
          <a href="mailto:abdimatinabdullahi@gmail.com">abdimatabdullahi@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('linkedinIcon.png')} alt="Email Icon" />
          <a href="https://www.linkedin.com/in/abdimatin-abdullahi-53698b278/">linkedIn.com/AbdimatinAbdullahi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('githubIcon.png')} alt="LinkedIcon" />
          <a href="https://github.com/AbdimatinAbdullahi/">github.com/AbdimatinAbdullahi</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact