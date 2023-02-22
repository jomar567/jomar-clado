import Home from "../main/home/Home"
import Navbar from "../main/Navbar"
import { useState } from 'react'

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
      </main>
      
    </div>
  )
}

export default Layout