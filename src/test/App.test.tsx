import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Dan Hecker')).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    
    // Check for main headings from each section
    expect(screen.getByRole('heading', { name: /dan hecker/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders footer with copyright', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Dan Hecker`, 'i'))).toBeInTheDocument();
  });

  it('renders GitHub Actions status badge', () => {
    render(<App />);
    const badge = screen.getByAltText('GitHub Pages Deploy Status');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('src', expect.stringContaining('github.com'));
  });
});
