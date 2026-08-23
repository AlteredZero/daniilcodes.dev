import Header from "./Header"
import Profile from "./Profile"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

export default function App() {
  return(
    <div className="Main">
      <Header></Header>
      <Profile></Profile>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <div className="Footer">
        <p className="FooterText">© 2026 Daniil Ovechkin. Built using HTML, CSS, and React + Vite.</p>
        <p className="FooterText">This portfolio website was not made with the use of AI. I actually enjoy programming.</p>
      </div>
    </div>
  )
}