
import './App.css'

function App() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing skills and projects.'
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'An online store for browsing and purchasing products.'
    }
  ]

  return (
    <div className="app">
      <header>
        <h1>CreativeSpace</h1>
        <p>Welcome to my creative world</p>
      </header>

      <main>
        <section>
          <h2>Explore Our Projects</h2> 

          <div className="projects">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

