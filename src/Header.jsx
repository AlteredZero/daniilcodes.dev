export default function Header() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Header">
      
      <img
        src="/assets/DaniilLogo.png"
        alt="Logo"
        className="HeaderLogo"
        onClick={() => (window.location.href = "https://daniilcodes.dev/")}
      />

      <button className="HeaderButtonName" onClick={() => (window.location.href = "https://daniilcodes.dev/")}>
        {"{Daniil Ovechkin}"}
      </button>

      <button className="HeaderButton" onClick={() => scrollToSection("about")}>
        About
      </button>

      <button className="HeaderButton" onClick={() => scrollToSection("projects")}>
        Projects
      </button>

      <button className="HeaderButton" onClick={() => scrollToSection("contact")}>
        Contact
      </button>

    </div>
  );
}