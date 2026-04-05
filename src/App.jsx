import Header from "./Header"
import Profile from "./Profile"
import About from "./About"
import Projects from "./Projects"

export default function App() {
  return(
    <div className="Main">
      <Header></Header>
      <Profile></Profile>
      <About></About>
      <Projects></Projects>
    </div>
  )
}