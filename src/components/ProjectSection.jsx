
import { useState } from 'react'
import SearchBar from './SearchBar'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

function ProjectSection({
  projects,
  searchTerm,
  setSearchTerm,
  addProject
}) {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="small-heading">OUR CREATIVE WORK</p>
          <h2>Explore Our Projects</h2>
        </div>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Close Form' : '+ Add Project'}
        </button>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      {showForm && (
        <ProjectForm onAddProject={addProject} />
      )}

      <ProjectList projects={projects} />
    </section>
  )
}

export default ProjectSection
