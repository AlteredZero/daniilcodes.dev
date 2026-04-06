import { useState } from "react";
import TypewriterOnScroll from "./TypewriterOnScroll";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (src) => {setSelectedImage(src);};
  return(
    <>
      <div className="Projects">
        <h1 className="ProjectsHeader">Projects</h1>
        <div className="ProjectsHeaderInfo">
          <TypewriterOnScroll className="ProjectsHeaderInfo" text="These projects reflect real production experience, including commercial releases on Steam, multiple published Roblox experiences, and ongoing Unreal Engine 5 development; from early prototypes to polished, release-ready builds."speed={10}/>
        </div>
        <div className="ProjectsContainer">
          <div className="ProjectCard">
            <h1 className="ProjectTitle">Lucid Dreams</h1>
            <a href="https://store.steampowered.com/app/3924880/Lucid_Dreams/" target="_blank" className="Link">Steam Link</a>

            <p className="ProjectDescription">A commercially released Unreal Engine 5 horror game on Steam. I handled full-pipeline development, including gameplay systems, level design, UI, asset creation, and performance optimization, delivering a polished and release-ready experience.</p>

            <p className="ProjectDescription"><strong>Role:</strong> Full-pipeline developer</p>
            <p className="ProjectDescription"><strong>Tech:</strong> Unreal Engine 5, Blueprints, UMG, Blender</p>

            <ul className="ProjectDescription">
              <li>Implemented gameplay systems and mechanics</li>
              <li>Designed and built immersive levels</li>
              <li>Created UI systems and menus</li>
              <li>Optimized performance for release</li>
            </ul>

            <p className="ProjectDescription"><strong>Outcome:</strong> Released on Steam as a commercial product</p>

            <div className="ProjectImageSet">
              <img src="../assets/LDSS2NEW.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS2NEW.png")}></img>
              <img src="../assets/LDSS1NEW.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS1NEW.png")}></img>
              <img src="../assets/LDSS4NEW.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS4NEW.png")}></img>
              <img src="../assets/LDSS5NEW.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS5NEW.png")}></img>
              <img src="../assets/LDSS8NEW.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS8NEW.png")}></img>

              <img src="../assets/LDSS3.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS3.png")}></img>
              <img src="../assets/LDSS1.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS1.png")}></img>
              <img src="../assets/LDSS2.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS2.png")}></img>
              <img src="../assets/LDSS4.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/LDSS4.png")}></img>
            </div>
          </div>

          <div className="ProjectCard">
            <h1 className="ProjectTitle">Click-A-Duck</h1>
            <a href="https://store.steampowered.com/app/4485920/ClickADuck/" target="_blank" className="Link">Steam Link</a>

            <p className="ProjectDescription">A commercially released Python-based game built with custom gameplay systems and UI. Focused on responsive interaction, clean structure, balanced economy, and delivering a complete, monetized product from development to release.</p>

            <p className="ProjectDescription"><strong>Role:</strong> Full developer</p>
            <p className="ProjectDescription"><strong>Tech:</strong> Python, Pygame</p>

            <ul className="ProjectDescription">
              <li>Developed core gameplay systems and mechanics</li>
              <li>Built UI systems for menus and interaction</li>
              <li>Structured and organized code for maintainability</li>
              <li>Balanced gameplay systems for player engagement</li>
            </ul>

            <p className="ProjectDescription"><strong>Outcome:</strong> Released on Steam as a commercial product</p>

            <div className="ProjectImageSet">
              <img src="../assets/SS2.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/SS2.png")}></img>
              <img src="../assets/SS3.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/SS3.png")}></img>
              <img src="../assets/SS4.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/SS4.png")}></img>
              <img src="../assets/SS5.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/SS5.png")}></img>
              <img src="../assets/SS6.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/SS6.png")}></img>
              <img src="../assets/clickaduckSS1.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/clickaduckSS1.png")}></img>
              <img src="../assets/clickaduckSS2.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/clickaduckSS2.png")}></img>
            </div>
          </div>

          <div className="ProjectCard">
            <h1 className="ProjectTitle">My Portfolio</h1>
            <a href="" target="_blank" className="Link">My Portfolio Website</a>

            <p className="ProjectDescription">A modern portfolio website built using React, Vite, and custom HTML + CSS, designed to showcase projects, skills, and development experience. Focused on clean UI, performance, and responsive design. You are on it now!</p>

            <p className="ProjectDescription"><strong>Role:</strong> Full-stack developer & designer</p>
            <p className="ProjectDescription"><strong>Tech:</strong> React, Vite, HTML, CSS, JavaScript</p>

            <ul className="ProjectDescription">
              <li>Designed and implemented responsive UI layouts</li>
              <li>Built reusable components using React</li>
              <li>Structured content for clarity and usability</li>
              <li>Optimized performance and loading behavior</li>
            </ul>

            <p className="ProjectDescription"><strong>Outcome:</strong> Live portfolio used to showcase development work</p>

            <div className="ProjectImageSet">
              <img src="../assets/MyPortfolioImage.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/MyPortfolioImage.png")}></img>
              <img src="../assets/MyPortfolioSS1.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/MyPortfolioSS1.png")}></img>
            </div>
          </div>

          <div className="ProjectCard">
            <h1 className="ProjectTitle">Noesis</h1>

            <p className="ProjectDescription">An in-progress Unreal Engine 5 project focused on immersive gameplay, atmosphere, and advanced systems design. Currently developing core mechanics, world building, and performance-focused systems.</p>

            <p className="ProjectDescription"><strong>Role:</strong> Full-pipeline developer</p>
            <p className="ProjectDescription"><strong>Tech:</strong> Unreal Engine 5, Blueprints, UMG, Blender</p>

            <ul className="ProjectDescription">
              <li>Developing core gameplay systems and mechanics</li>
              <li>Designing atmospheric environments and levels</li>
              <li>Implementing UI and interaction systems</li>
              <li>Focusing on performance and scalable systems</li>
            </ul>

            <p className="ProjectDescription"><strong>Status:</strong> In active development</p>

            <div className="ProjectImageSet">
              <img src="../assets/Noesis1.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/Noesis1.png")}></img>
              <img src="../assets/Noesis2.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/Noesis2.png")}></img>
              <img src="../assets/Noesis3.png" alt="Project Image" className="ProjectImage" onClick={() => openImage("../assets/Noesis3.png")}></img>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="ImageModal" onClick={() => setSelectedImage(null)}>
          <span className="CloseButton">&times;</span>
          <img src={selectedImage} className="ModalImage" />
        </div>
      )}
    </>
  )
}