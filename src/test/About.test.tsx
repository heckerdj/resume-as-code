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
    expect(screen.getByText(/I am a software engineer by degree/)).toBeInTheDocument()
    expect(screen.getByText(/DevOps engineer by practice/)).toBeInTheDocument()
  })

  it('renders the construction notice heading', () => {
    render(<About />)
    expect(screen.getByText('🚧 Under Construction')).toBeInTheDocument()
  })

  it('renders construction notice description', () => {
    render(<About />)
    expect(screen.getByText(/This site is currently being built/)).toBeInTheDocument()
    expect(screen.getByText(/React and TypeScript/)).toBeInTheDocument()
  })
})
