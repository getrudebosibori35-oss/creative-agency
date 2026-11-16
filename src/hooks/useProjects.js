
import { useState } from 'react'

const initialProjects = [
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'A personal website showcasing creative work and skills.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800'
  },
  {
    id: 2,
    name: 'E-commerce Website',
    description: 'An online store designed for a smooth shopping experience.',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'
  },
  {
    id: 3,
    name: 'Brand Identity',
    description: 'A creative branding project with a modern visual identity.',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1634942536790-253f3f8b3f16?w=800'
  }
]

function useProjects() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')

  const addProject = (newProject) => {
    setProjects((previousProjects) => [
      ...previousProjects,
      { ...newProject, id: Date.now() }
    ])
  }

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase()

    return (
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search)
    )
  })

  return {
    projects: filteredProjects,
    searchTerm,
    setSearchTerm,
    addProject
  }
}

export default useProjects
