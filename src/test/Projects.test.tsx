import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects', () => {
  it('renders the Projects heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i, level: 2 })).toBeInTheDocument();
  });

  it('renders Resume as Code project', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /danhecker\.com - resume as code/i })).toBeInTheDocument();
    expect(screen.getByText(/personal resume site built with react/i)).toBeInTheDocument();
  });

  it('renders Mobile Behaviometric Framework project', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /mobile behaviometric framework research/i })).toBeInTheDocument();
    expect(screen.getByText(/ieee published research/i)).toBeInTheDocument();
  });

  it('displays project technologies', () => {
    render(<Projects />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
    expect(screen.getByText('Android Development')).toBeInTheDocument();
  });

  it('renders project links with correct attributes', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link', { name: /view project/i });
    expect(links.length).toBeGreaterThan(0);
    
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('displays project status', () => {
    render(<Projects />);
    expect(screen.getByText('Live')).toBeInTheDocument();
    expect(screen.getByText('Published 2016')).toBeInTheDocument();
  });
});
