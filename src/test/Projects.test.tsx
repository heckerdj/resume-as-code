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

    expect(detailsLink).toHaveAttribute('href', '/family-recipes/')
    expect(liveLink).toHaveAttribute('href', 'https://recipes.4craftybrothers.com/')
  })

  it('renders Cornered as the featured project with App Store and Google Play links', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Cornered' })).toBeInTheDocument()
    expect(screen.getByText('A daily puzzle game for iPhone and Android')).toBeInTheDocument()
    expect(screen.getByText(/One new board a day/)).toBeInTheDocument()
    expect(screen.getByAltText('Cornered Monday board with three found rectangles circled, one of them tilted')).toBeInTheDocument()
    expect(screen.getByText('Live on iOS and Android')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /App Store/ })).toHaveAttribute('href', 'https://apps.apple.com/app/id6804104582')
    expect(screen.getByRole('link', { name: /Google Play/ })).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=com.corneredgame.cornered'
    )
  })

  it('renders Cornered first, in its own featured card, with its logo', () => {
    const { container } = render(<Projects />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings[0]).toHaveTextContent('Cornered')
    expect(screen.getByAltText('Cornered logo')).toBeInTheDocument()
    expect(container.querySelectorAll('.featured-project')).toHaveLength(1)
    expect(container.querySelector('.projects-grid')).not.toHaveTextContent('Cornered')
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
    const appStoreLink = screen.getByRole('link', { name: /App Store/ })
    const googlePlayLink = screen.getByRole('link', { name: /Google Play/ })

    // Check that "View Project" appears for projects without secondaryLink
    expect(viewLinks).toHaveLength(2)

    // Check all links have correct attributes
    const allLinks = [...viewLinks, makerWorldLink, printablesLink, detailsLink, liveLink, appStoreLink, googlePlayLink]
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
