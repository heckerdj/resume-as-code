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
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Engineering Enablement Lead (Software Engineer II)')).toBeInTheDocument()
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

  it('renders UTC Aerospace Systems employer card', () => {
    render(<Experience />)
    expect(screen.getByText('Software Engineering Co-Op')).toBeInTheDocument()
    // Check for UTC logo with alt text
    const utcLogo = screen.getByAltText('UTC Aerospace Systems')
    expect(utcLogo).toBeInTheDocument()
    expect(screen.getByText('Vergennes, Vermont')).toBeInTheDocument()
  })

  it('renders Orgadata AG employer card', () => {
    render(<Experience />)
    expect(screen.getByText('Software Engineering Apprentice')).toBeInTheDocument()
    // Check for Orgadata logo with alt text
    const orgadataLogo = screen.getByAltText('Orgadata AG')
    expect(orgadataLogo).toBeInTheDocument()
    expect(screen.getByText('Leer, Germany')).toBeInTheDocument()
  })

  it('renders Clarkson University employer card', () => {
    render(<Experience />)
    expect(screen.getByText('Teaching Assistant (ES 100)')).toBeInTheDocument()
    // Check for Clarkson logo with alt text
    const clarksonLogo = screen.getByAltText('Clarkson University')
    expect(clarksonLogo).toBeInTheDocument()
    expect(screen.getByText('Potsdam, New York')).toBeInTheDocument()
  })

  it('renders Clarkson TA position with correct start date', () => {
    render(<Experience />)
    // Check that the TA position shows August 2015 as start date
    const clarksonDates = screen.getAllByText('August 2015 - May 2017')
    // Should appear twice: once for employer-duration and once for role-duration
    expect(clarksonDates).toHaveLength(2)
  })

  it('renders role descriptions', () => {
    render(<Experience />)
    // Current role (Senior Software Engineer)
    expect(screen.getByText(/Create internal platforms that remove friction/)).toBeInTheDocument()
    // Previous role (Engineering Enablement Lead) - past tense
    expect(screen.getByText(/Led a globally distributed team of 10\+ engineers/)).toBeInTheDocument()
    // DevOps Engineer role
    expect(screen.getByText(/Designed and implemented CI\/CD pipelines/)).toBeInTheDocument()
  })
})
