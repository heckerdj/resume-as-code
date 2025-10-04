import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders the name correctly', () => {
    render(<Header />)
    expect(screen.getByText('Dan Hecker')).toBeInTheDocument()
  })

  it('renders the title correctly', () => {
    render(<Header />)
    expect(screen.getByText('Senior DevOps Engineer & Engineering Enablement Lead')).toBeInTheDocument()
  })

  it('renders GitHub link with correct attributes', () => {
    render(<Header />)
    const githubLink = screen.getByText('GitHub')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/heckerdj')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders LinkedIn link with correct attributes', () => {
    render(<Header />)
    const linkedinLink = screen.getByText('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/danhecker/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders Contact email link', () => {
    render(<Header />)
    const contactLink = screen.getByText('Contact')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', 'mailto:danjhecker@gmail.com')
  })
})
