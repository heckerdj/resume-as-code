import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../components/About'

describe('About', () => {
  it('renders the About Me section heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders the about description', () => {
    render(<About />)
    expect(screen.getByText(/I'm a software engineer with a strong foundation/)).toBeInTheDocument()
    expect(screen.getByText(/DevOps, platform engineering, and automation/)).toBeInTheDocument()
  })

  it('renders the complete about section content', () => {
    render(<About />)
    expect(screen.getByText(/removing friction from the development lifecycle/)).toBeInTheDocument()
    expect(screen.getByText(/improve speed, security, and reliability/)).toBeInTheDocument()
  })
})
