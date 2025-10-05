import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from '../components/Skills'

describe('Skills', () => {
  it('renders the Skills section heading', () => {
    render(<Skills />)
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    expect(screen.getByText('DevOps & Cloud')).toBeInTheDocument()
    expect(screen.getByText('Programming Languages')).toBeInTheDocument()
    expect(screen.getByText('Tools & Technologies')).toBeInTheDocument()
    expect(screen.getByText('Web & Frontend')).toBeInTheDocument()
  })

  it('renders DevOps & Cloud skills', () => {
    render(<Skills />)
    expect(screen.getByText('Terraform')).toBeInTheDocument()
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes')).toBeInTheDocument()
  })

  it('renders Programming Languages', () => {
    render(<Skills />)
    expect(screen.getByText('C#')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('renders Web & Frontend skills', () => {
    render(<Skills />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('HTML/CSS')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
  })
})
