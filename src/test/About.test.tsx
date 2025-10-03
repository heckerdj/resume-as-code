import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  it('renders the About Me heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /about me/i, level: 2 })).toBeInTheDocument();
  });

  it('renders the personal description', () => {
    render(<About />);
    expect(screen.getByText(/I am a software engineer by degree/i)).toBeInTheDocument();
    expect(screen.getByText(/DevOps engineer by practice/i)).toBeInTheDocument();
  });

  it('displays construction notice', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /under construction/i })).toBeInTheDocument();
    expect(screen.getByText(/This site is currently being built with React and TypeScript/i)).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<About />);
    const section = container.querySelector('.about-section');
    expect(section).toBeInTheDocument();
    expect(section?.querySelector('.container')).toBeInTheDocument();
  });
});
