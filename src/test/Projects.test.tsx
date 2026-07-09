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

  it('renders Family Recipe App project', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Family Recipe App' })).toBeInTheDocument()
    expect(screen.getByText(/Private multi-user recipe app/)).toBeInTheDocument()
  })

  it('renders Family Recipe App details and gated live links', () => {
    render(<Projects />)
    const detailsLink = screen.getByText('More Details')
    const liveLink = screen.getByText('Live app (access restricted)')

    expect(detailsLink).toHaveAttribute('href', '/case-studies/recipes.html')
    expect(liveLink).toHaveAttribute('href', 'https://recipes.4craftybrothers.com/')
  })

  it('renders 3D Printing project', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: '3D Printing' })).toBeInTheDocument()
    expect(screen.getByText(/Exploring additive manufacturing through 3D printing/)).toBeInTheDocument()
  })

  it('renders 3D Printing project with both MakerWorld and Printables links', () => {
    render(<Projects />)
    const makerWorldLink = screen.getByText('MakerWorld')
    const printablesLink = screen.getByText('Printables')
    
    expect(makerWorldLink).toHaveAttribute('href', 'https://makerworld.com/en/@Doalzer')
    expect(printablesLink).toHaveAttribute('href', 'https://www.printables.com/@Doalzer')
  })

  it('renders project links with correct attributes', () => {
    render(<Projects />)
    const viewLinks = screen.getAllByText('View Project')
    const makerWorldLink = screen.getByText('MakerWorld')
    const printablesLink = screen.getByText('Printables')
    const detailsLink = screen.getByText('More Details')
    const liveLink = screen.getByText('Live app (access restricted)')

    // Check that "View Project" appears for projects without secondaryLink
    expect(viewLinks).toHaveLength(2)

    // Check all links have correct attributes
    const allLinks = [...viewLinks, makerWorldLink, printablesLink, detailsLink, liveLink]
    allLinks.forEach(link => {
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
