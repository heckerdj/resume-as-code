import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Education from '../components/Education';

describe('Education', () => {
  it('renders the Education & Certifications heading', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /education & certifications/i, level: 2 })).toBeInTheDocument();
  });

  it('renders degree information', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /Bachelor of Science.*Software Engineering/i })).toBeInTheDocument();
    expect(screen.getByText(/Clarkson University/i)).toBeInTheDocument();
    expect(screen.getByText(/Potsdam, New York/i)).toBeInTheDocument();
  });

  it('displays education skills', () => {
    render(<Education />);
    expect(screen.getByText('MATLAB')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Software Engineering')).toBeInTheDocument();
  });

  it('renders certifications section', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /professional certifications/i })).toBeInTheDocument();
  });

  it('displays GitHub Actions certification', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /^GitHub Actions$/i })).toBeInTheDocument();
    expect(screen.getByText(/May 2025 - May 2028/i)).toBeInTheDocument();
    expect(screen.getByText(/502ed1cd-6f59-4645-9731-df843d2eb6ee/i)).toBeInTheDocument();
  });

  it('displays Cryptocurrency certification', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /^Cryptocurrency$/i })).toBeInTheDocument();
    expect(screen.getByText(/MIT MediaLab/i)).toBeInTheDocument();
    expect(screen.getByText(/August 2022/i)).toBeInTheDocument();
  });

  it('renders publications section', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /^publications$/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Mobile Behaviometric Framework/i })).toBeInTheDocument();
  });

  it('displays publication details', () => {
    render(<Education />);
    expect(screen.getByText(/2016 IEEE Symposium/i)).toBeInTheDocument();
    expect(screen.getByText(/April 1, 2016/i)).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<Education />);
    const section = container.querySelector('.education-section');
    expect(section).toBeInTheDocument();
    expect(section?.querySelector('.certifications')).toBeInTheDocument();
    expect(section?.querySelector('.publications')).toBeInTheDocument();
  });
});
