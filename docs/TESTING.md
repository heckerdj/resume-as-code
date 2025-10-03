# Testing Documentation

## Overview

This project uses **Vitest** with **React Testing Library** for comprehensive unit testing. The testing setup ensures code quality and prevents regressions.

## Test Coverage

Current test coverage: **100%** across all components

- **7 test files** covering all React components
- **42 test cases** validating functionality
- Coverage includes statements, branches, functions, and lines

## Running Tests

```bash
# Run tests in watch mode (interactive)
npm run test

# Run tests once (CI mode)
npm run test:run

# Run tests with interactive UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

All test files are located in `src/test/` and follow the naming convention `*.test.tsx`:

- `setup.ts` - Test configuration and setup
- `App.test.tsx` - Main application tests
- `Header.test.tsx` - Header component tests
- `About.test.tsx` - About section tests
- `Experience.test.tsx` - Experience section tests
- `Skills.test.tsx` - Skills section tests
- `Education.test.tsx` - Education section tests
- `Projects.test.tsx` - Projects section tests

## Writing Tests

Tests use React Testing Library best practices:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## Configuration

Testing is configured in `vite.config.ts`:

- **Environment:** jsdom (browser-like environment)
- **Globals:** Enabled for easier test writing
- **Setup Files:** `src/test/setup.ts` for global test configuration
- **Coverage Provider:** v8 (fast and accurate)
- **Coverage Exclusions:** test files, config files, and build artifacts

## Best Practices

1. **Test user-visible behavior** - Focus on what users see and interact with
2. **Use semantic queries** - Prefer `getByRole`, `getByLabelText`, etc.
3. **Avoid implementation details** - Don't test internal state or props
4. **Keep tests focused** - One test should verify one behavior
5. **Use descriptive test names** - Test names should explain what they verify

## Continuous Integration

Tests are automatically run in CI/CD pipeline:
- Type checking with TypeScript
- Unit tests with Vitest
- Build verification
- Deployment only on successful tests

## Coverage Reports

Coverage reports are generated in the `coverage/` directory:
- `coverage/index.html` - Visual coverage report
- `coverage/lcov.info` - Coverage data for CI tools

Coverage directory is git-ignored to avoid committing generated files.
