import TypewriterOnScroll from "./TypewriterOnScroll";

export default function Profile() {
  return(
    <div className="Profile">
      <div>
        <h1 className="IntroductionHeaderText">Hi, I'm <br /> Daniil Ovechkin</h1>

        <div className="IntroductionText">
          <TypewriterOnScroll className="IntroductionText" text="I'm a full-stack developer and Unreal Engine 5 creator, building and shipping immersive games, web applications, and interactive systems, with a focus on performance, design, and cybersecurity fundamentals." speed={10}/>
        </div>
      </div>

      <img src="/assets/PersonalPicture2cropped.jpg" alt="A Picture Of Me" className="PersonalPicture"/>
    </div>
  )
}