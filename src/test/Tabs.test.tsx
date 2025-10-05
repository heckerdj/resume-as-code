import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Tabs from '../components/Tabs'

describe('Tabs', () => {
  const mockTabs = [
    {
      id: 'tab1',
      label: 'First Tab',
      content: <div>Content for first tab</div>
    },
    {
      id: 'tab2',
      label: 'Second Tab',
      content: <div>Content for second tab</div>
    }
  ];

  it('renders all tab buttons', () => {
    render(<Tabs tabs={mockTabs} />)
    expect(screen.getByRole('tab', { name: 'First Tab' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Second Tab' })).toBeInTheDocument()
  })

  it('shows first tab as active by default', () => {
    render(<Tabs tabs={mockTabs} />)
    const firstTab = screen.getByRole('tab', { name: 'First Tab' })
    expect(firstTab).toHaveClass('active')
    expect(screen.getByText('Content for first tab')).toBeVisible()
  })

  it('shows specified default tab as active', () => {
    render(<Tabs tabs={mockTabs} defaultTab="tab2" />)
    const secondTab = screen.getByRole('tab', { name: 'Second Tab' })
    expect(secondTab).toHaveClass('active')
    expect(screen.getByText('Content for second tab')).toBeVisible()
  })

  it('switches tabs when clicked', () => {
    render(<Tabs tabs={mockTabs} />)
    const secondTab = screen.getByRole('tab', { name: 'Second Tab' })
    
    fireEvent.click(secondTab)
    
    expect(secondTab).toHaveClass('active')
    expect(screen.getByText('Content for second tab')).toBeVisible()
  })

  it('hides inactive tab content', () => {
    render(<Tabs tabs={mockTabs} />)
    const secondTabContent = screen.getByText('Content for second tab')
    expect(secondTabContent).not.toBeVisible()
  })
})
