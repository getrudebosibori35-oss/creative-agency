
import { useState } from 'react'

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Web Design')
  const [image, setImage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !description.trim()) {
      return
    }

    const newProject = {
      name: name.trim(),
      description: description.trim(),
      category,
      image: image.trim() ||
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800'
    }

    onAddProject(newProject)

    setName('')
    setDescription('')
    setCategory('Web Design')
    setImage('')
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add a New Project</h3>

      <input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Web Design</option>
        <option>Development</option>
        <option>Graphic Design</option>
        <option>Marketing</option>
      </select>

      <input
        type="url"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  )
}

export default ProjectForm
