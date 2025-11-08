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
    expect(screen.getByText('DevOps')).toBeInTheDocument()
    expect(screen.getByText('Programming Languages')).toBeInTheDocument()
    expect(screen.getByText('Tools & Technologies')).toBeInTheDocument()
  })

  it('renders DevOps skills', () => {
    render(<Skills />)
    expect(screen.getByText('Terraform')).toBeInTheDocument()
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument()
    expect(screen.getByText('Helm')).toBeInTheDocument()
    expect(screen.getByText('UrbanCode Deploy')).toBeInTheDocument()
  })

  it('renders Programming Languages', () => {
    render(<Skills />)
    expect(screen.getByText('C#')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('renders Tools & Technologies skills', () => {
    render(<Skills />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('GitHub Pages')).toBeInTheDocument()
    expect(screen.getByText('Dynatrace')).toBeInTheDocument()
    expect(screen.getByText('SonarQube')).toBeInTheDocument()
  })
})
