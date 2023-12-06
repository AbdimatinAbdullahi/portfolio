import React from 'react'
import { getImageUrl } from '../../utils'
import style from '../Hero/Hero.module.css'
const Hero = () => {
  return (
    <section className={style.container} >
        <div className={style.content}>
            <h1 className={style.title} >Hi, I am Abdimatin</h1>
            <p className={style.description}>I am Fullstack Engineer With One year of experience using Reactjs And Nodejs. Reach out if you like to learn more!.</p>
            <a className={style.contact_btn} href="mailto:abdimatabdullahi@gmail.com">Contact Me</a>
        </div>
        <img  className={style.profile_pic} src={getImageUrl("heroImage.png")} alt="Abdmatin"/>
        <div className={style.topBlur}/>
        <div className={style.bottomBlur}/>
    </section>
  )
}

export default Hero