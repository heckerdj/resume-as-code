import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

describe('Skills', () => {
  it('renders the Skills heading', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /skills/i, level: 2 })).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /devops & cloud/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /programming languages/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tools & technologies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /web & frontend/i })).toBeInTheDocument();
  });

  it('renders DevOps skills', () => {
    render(<Skills />);
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });

  it('renders programming languages', () => {
    render(<Skills />);
    expect(screen.getByText('C#')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders web technologies', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
    expect(screen.getByText('HTML/CSS')).toBeInTheDocument();
  });
});
