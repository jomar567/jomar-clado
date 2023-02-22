import Home from "../main/home/Home"
import Navbar from "../main/Navbar"
import { useState } from 'react'
import About from "../main/about/About";
import Skills from "../main/skills/Skills";
import Career from "../main/career/Career";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  let activeDark = darkMode ? 'dark' : '';
  return (
    <div className={activeDark}>
      <Navbar handleClick={handleClick} activeDark={activeDark}/>
      <main className=" dark:bg-white bg-blue-primary">
        <Home />
        <About />
        <Skills />
        <Career />
      </main>

    </div>
  )
}

export default Layout
