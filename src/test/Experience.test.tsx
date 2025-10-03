import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

describe('Experience', () => {
  it('renders the Experience heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /^experience$/i, level: 2 })).toBeInTheDocument();
  });

  it('renders current position at Travelers', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Senior DevOps Engineer & Engineering Enablement Lead/i })).toBeInTheDocument();
    expect(screen.getByText(/December 2024 - Present/i)).toBeInTheDocument();
  });

  it('renders Aetna positions', () => {
    render(<Experience />);
    const systemEngineer = screen.getAllByRole('heading', { name: /System Engineer/i });
    expect(systemEngineer.length).toBeGreaterThan(0);
    const associateSystemEngineer = screen.getByRole('heading', { name: /Associate System Engineer/i });
    expect(associateSystemEngineer).toBeInTheDocument();
  });

  it('renders UTC Aerospace Co-Op position', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Software Engineering Co-Op/i })).toBeInTheDocument();
    expect(screen.getByText(/UTC Aerospace Systems/i)).toBeInTheDocument();
  });

  it('displays location information', () => {
    render(<Experience />);
    const hybridLocations = screen.getAllByText(/Hartford, Connecticut • Hybrid/i);
    expect(hybridLocations.length).toBeGreaterThan(0);
    expect(screen.getByText(/Vergennes, Vermont/i)).toBeInTheDocument();
  });

  it('shows career progression at Travelers', () => {
    render(<Experience />);
    expect(screen.getByText(/February 2022 - February 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/February 2024 - December 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/December 2024 - Present/i)).toBeInTheDocument();
  });

  it('renders IT Technical Training Program note', () => {
    render(<Experience />);
    expect(screen.getByText(/IT Technical Training Program - Class of 2020/i)).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<Experience />);
    const section = container.querySelector('.experience-section');
    expect(section).toBeInTheDocument();
    expect(section?.querySelectorAll('.job').length).toBeGreaterThan(0);
  });
});
