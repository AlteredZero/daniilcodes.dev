import { FaGithub, FaLinkedin, FaYoutube, FaDiscord, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TypewriterOnScroll from "./TypewriterOnScroll";

export default function About() {
  return(
    <div className="Contact" id="contact">
      <h1 className="ContactHeader">Contact</h1>
      <div className="ContactTextWrapper">
        <TypewriterOnScroll className="ContactText" text="Want to reach out? Shoot me an email or a message."speed={10}/>
      </div>

      <div className="LinksContainer">
        <div className="LinkBox" onClick={() => window.open("mailto:daniilovechkin.codes@gmail.com", "_blank")}>
          
          <div className="LinkTop">
            <MdEmail className="LinkIcon" />
            <h1 className="LinkHeader">Email</h1>
          </div>

          <p className="LinkDescription">daniilovechkin.codes@gmail.com</p>

        </div>

        <div className="LinkBox" onClick={() => window.open("https://www.linkedin.com/in/daniil-ovechkin-7087053b8/", "_blank")}>

          <div className="LinkTop">
            <FaLinkedin className="LinkIcon" />
            <h1 className="LinkHeader">LinkedIn</h1>
          </div>
          <p className="LinkDescription">Contact me on LinkedIn</p>
        </div>

        <div className="LinkBox" onClick={() => window.open("https://discord.com/users/832013166174273548", "_blank")}>

          <div className="LinkTop">
            <FaDiscord className="LinkIcon" />
            <h1 className="LinkHeader">Discord</h1>
          </div>
          <p className="LinkDescription">Contact me on Discord</p>
        </div>

        <h1 className="ExtraLinksHeader">Extra Links</h1>

        <div className="LinkBox" onClick={() => window.open("https://github.com/AlteredZero", "_blank")}>

          <div className="LinkTop">
            <FaGithub className="LinkIcon" />
            <h1 className="LinkHeader">GitHub</h1>
          </div>
          <p className="LinkDescription">My GitHub profile</p>
        </div>

        <div className="LinkBox" onClick={() => window.open("https://x.com/Altered_Games_", "_blank")}>

          <div className="LinkTop">
            <FaXTwitter className="LinkIcon" />
            <h1 className="LinkHeader">X</h1>
          </div>
          <p className="LinkDescription">My X profile</p>
        </div>

        <div className="LinkBox" onClick={() => window.open("https://www.youtube.com/@AlteredDeveloper", "_blank")}>

          <div className="LinkTop">
            <FaYoutube className="LinkIcon" />
            <h1 className="LinkHeader">YouTube</h1>
          </div>
          <p className="LinkDescription">My YouTube channel</p>
        </div>

        <div className="LinkBox" onClick={() => window.open("https://discord.gg/CaNjDqpP4F", "_blank")}>

          <div className="LinkTop">
            <FaDiscord className="LinkIcon" />
            <h1 className="LinkHeader">Discord</h1>
          </div>
          <p className="LinkDescription">My Discord server</p>
        </div>

      </div>
    </div>
  )
}