
function Header() {
  return (
    <header className="header">
      <h2 className="logo">Creative<span>Space</span></h2>

      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>

      <a href="#projects" className="header-button">
        Explore Projects
      </a>
    </header>
  )
}

export default Header
