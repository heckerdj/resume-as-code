import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the header component', () => {
    render(<App />)
    expect(screen.getByText('Dan Hecker')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Education & Certifications')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders the footer with copyright', () => {
    render(<App />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear} Dan Hecker`))).toBeInTheDocument()
  })

  it('renders deployment status badge', () => {
    render(<App />)
    const badge = screen.getByAltText('GitHub Pages Deploy Status')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveAttribute('src', 'https://github.com/heckerdj/resume-as-code/actions/workflows/build-and-deploy.yml/badge.svg')
  })
})
