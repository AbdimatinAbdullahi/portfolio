import style from './App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Nvabar/Navbar'
import Skill from './components/Skills/Skill'
import Project from './components/projects/Project'


function App() {
  return (
    <div className={style.App} >
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  )
}

export default App
