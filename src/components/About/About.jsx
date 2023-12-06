import React from 'react'
import style from '../About/About.module.css'
import {getImageUrl} from '../../utils'
const About = () => {
  return (
    <section className={style.container}  id='About'>
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
          <img className={style.aboutImage} src={getImageUrl('aboutImage.png')} alt='About Me Image' />
          
          <ul className={style.listItems}>
            <li className={style.listItem}>
              <img src={getImageUrl('cursorIcon.png')} alt="cursor" />
              <div className={style.listItemText} >
                  <h3>Frontend Engineer</h3>
                  <p>I am Frontend Engineer with Expererince in Building responsive And optimized sites</p>
              </div>
            </li>


            <li className={style.listItem}>
              <img src={getImageUrl('serverIcon.png')} alt="server" />
              <div className={style.listItemText} >
                  <h3>Backend Engineer</h3>
                  <p>I am Backend Engineer with Expererince in developing fast and optimised backend Systems and APIs</p>
              </div>
            </li>

            <li className={style.listItem}>
              <img src={getImageUrl('frontend.png')} alt="server" />
              <div className={style.listItemText} >
                  <h3>UI Desinger</h3>
                  <p>I have designed landing pages and have created design Systems as well</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default About