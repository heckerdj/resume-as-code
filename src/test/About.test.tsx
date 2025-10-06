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

  it('renders the complete about section content', () => {
    render(<About />)
    expect(screen.getByText(/automation which has led me to my career/)).toBeInTheDocument()
    expect(screen.getByText(/improving the process in both security and speed/)).toBeInTheDocument()
  })
})
