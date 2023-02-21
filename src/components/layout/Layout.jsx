import Home from "../main/home/Home"
import Navbar from "../main/Navbar"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  )
}

export default Layout