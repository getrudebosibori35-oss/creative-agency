
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.name} />

      <div className="project-info">
        <span className="category">{project.category}</span>

        <h3>{project.name}</h3>

        <p>{project.description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
