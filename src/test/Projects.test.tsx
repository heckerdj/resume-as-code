import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects', () => {
  it('renders the Projects section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders Resume as Code project', () => {
    render(<Projects />)
    expect(screen.getByText('DanHecker.com - Resume as Code')).toBeInTheDocument()
    expect(screen.getByText(/Personal resume site built with React/)).toBeInTheDocument()
  })

  it('renders Dawn-of-Discord project', () => {
    render(<Projects />)
    expect(screen.getByText('Dawn-of-Discord - Text-based RPG')).toBeInTheDocument()
    expect(screen.getByText(/Deployed discord bots in a personally managed server/)).toBeInTheDocument()
  })

  it('renders project links with correct attributes', () => {
    render(<Projects />)
    const links = screen.getAllByText('View Project')
    expect(links).toHaveLength(2)
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('displays project statuses', () => {
    render(<Projects />)
    expect(screen.getByText('Archived')).toBeInTheDocument()
  })

  it('renders technology tags for Resume as Code project', () => {
    render(<Projects />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
  })
})
