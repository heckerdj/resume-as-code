import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the name correctly', () => {
    render(<Header />);
    expect(screen.getByText('Dan Hecker')).toBeInTheDocument();
  });

  it('renders the title correctly', () => {
    render(<Header />);
    expect(screen.getByText('Senior DevOps Engineer & Engineering Enablement Lead')).toBeInTheDocument();
  });

  it('renders GitHub link with correct href', () => {
    render(<Header />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/heckerdj');
  });

  it('renders LinkedIn link with correct href', () => {
    render(<Header />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/dan-hecker');
  });

  it('renders email contact link with correct href', () => {
    render(<Header />);
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toHaveAttribute('href', 'mailto:dan@danhecker.com');
  });

  it('has proper target and rel attributes for external links', () => {
    render(<Header />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
