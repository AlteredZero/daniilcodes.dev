import TypewriterOnScroll from "./TypewriterOnScroll";

export default function About() {
  return(
    <div className="About" id="about">
      <h1 className="AboutHeader">About</h1>
      <div className="AboutTextWrapper">
        <TypewriterOnScroll
          className="AboutText"
          speed={5}
          text={`I'm a developer focused on building and shipping real projects, specializing in full-pipeline Unreal Engine 5 development, web applications, and software systems. I've released a commercial Unreal Engine project on Steam along with multiple production-quality experiences.

        My work covers the entire development process; from gameplay systems and UI to level design, audio, and optimization. I aim to create experiences that are polished, performant, and ready for release.

        Alongside game development, I build modern web and software applications using React, Node.js, Vite, and Python, with strong foundations in HTML and CSS. I also work with 3D modeling, texturing, and performance optimization for real-time environments.

        I have experience working in Linux environments and using the terminal, building a foundation in cybersecurity and system-level thinking. I've also worked with indie developers as a contractor, delivering focused, production-ready results.`}
        />
      </div>
      <div className="SkillsToolsContainer">
        <div className="Skills">
          <h1 className="SkillsHeader">Skills</h1>

          <ul className="SkillsText">
            <li>Full-Stack Web Development</li>
            <li>Software Development (Applications & Systems)</li>
            <li>Unreal Engine 5 Full-Pipeline Development</li>
            <li>Gameplay Systems & Mechanics</li>
            <li>UI/UX Design & Implementation</li>
            <li>Level Design & World Building</li>
            <li>3D Modeling & Texturing</li>
            <li>Performance Optimization & Profiling</li>
            <li>Linux & Terminal Usage</li>
            <li>Problem Solving & System Design</li>
            <li>Data Management & Storage</li>
          </ul>
        </div>

        <div className="Tools">
          <h1 className="ToolsHeader">Tools</h1>

          <ul className="ToolsText">
            <li>Python (Pandas, Pygame, Tkinter)</li>
            <li>JavaScript (React, Node.js, Vite)</li>
            <li>HTML & CSS</li>
            <li>Unreal Engine 5</li>
            <li>Blender (Modeling & Texturing)</li>
            <li>Adobe Substance Painter 3D (UV & Texturing)</li>
            <li>Git & GitHub</li>
            <li>Linux (CLI / Terminal)</li>
            <li>Visual Studio Code</li>
            <li>SQLite (Database Management)</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  )
}