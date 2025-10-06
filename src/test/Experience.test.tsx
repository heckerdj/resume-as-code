import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Experience from '../components/Experience'

describe('Experience', () => {
  it('renders the Experience section heading', () => {
    render(<Experience />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders Travelers employer card', () => {
    render(<Experience />)
    // Check for logo with alt text or fallback text
    const travelersLogo = screen.getByAltText('Travelers')
    expect(travelersLogo).toBeInTheDocument()
    expect(screen.getByText('February 2022 - Present')).toBeInTheDocument()
    // Both Travelers and Aetna are in Hartford, so we check for both
    const hartfordLocations = screen.getAllByText('Hartford, Connecticut')
    expect(hartfordLocations).toHaveLength(2)
  })

  it('renders all Travelers roles', () => {
    render(<Experience />)
    expect(screen.getByText('Senior DevOps Engineer & Engineering Enablement Lead')).toBeInTheDocument()
    expect(screen.getByText('DevOps Engineer (Software Engineer II)')).toBeInTheDocument()
    expect(screen.getByText('DevOps Engineer (Software Engineer I)')).toBeInTheDocument()
  })

  it('renders Aetna employer card', () => {
    render(<Experience />)
    // Check for logo with alt text
    const aetnaLogo = screen.getByAltText('Aetna, a CVS Health Company')
    expect(aetnaLogo).toBeInTheDocument()
    expect(screen.getByText('June 2018 - February 2022')).toBeInTheDocument()
  })

  it('renders Aetna roles', () => {
    render(<Experience />)
    expect(screen.getByText('System Engineer')).toBeInTheDocument()
    expect(screen.getByText('Associate System Engineer - IT Technical Training Program')).toBeInTheDocument()
  })

  it('renders other professional experience', () => {
    render(<Experience />)
    expect(screen.getByText('Other Professional Experience')).toBeInTheDocument()
    expect(screen.getByText('Software Engineering Co-Op')).toBeInTheDocument()
    // Check for logos with alt text
    const utcLogo = screen.getByAltText('UTC Aerospace Systems')
    expect(utcLogo).toBeInTheDocument()
    expect(screen.getByText('Teaching Assistant (ES 100)')).toBeInTheDocument()
    const clarksonLogo = screen.getByAltText('Clarkson University')
    expect(clarksonLogo).toBeInTheDocument()
  })

  it('renders role descriptions', () => {
    render(<Experience />)
    expect(screen.getByText(/Lead a globally distributed team of 10\+ engineers/)).toBeInTheDocument()
    expect(screen.getByText(/Designed and implemented CI\/CD pipelines/)).toBeInTheDocument()
  })
})
