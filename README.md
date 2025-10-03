# resume-as-code

![GitHub Pages](https://img.shields.io/github/deployments/HeckerDJ/resume-as-code/github-pages?label=GitHub%20Pages&logo=github)
![Tests](https://github.com/heckerdj/resume-as-code/actions/workflows/pr-preview.yml/badge.svg)
![CodeQL](https://github.com/heckerdj/resume-as-code/actions/workflows/codeql.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=heckerdj_resume-as-code&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=heckerdj_resume-as-code)

A personal resume website built with React, TypeScript, and deployed via GitHub Pages with automated CI/CD pipeline. This project showcases modern web development practices and DevOps integration.

🌐 **Live site:** [https://DanHecker.com](https://DanHecker.com)

## 🛠️ Technology Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Component-based CSS3 with design token system
- **Testing:** Vitest with React Testing Library
- **Code Quality:** ESLint, TypeScript strict mode, SonarQube Cloud
- **Security:** GitHub CodeQL for SAST
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 🚀 Features

- ✅ Professional resume layout with modern UI
- ✅ Responsive design for all device sizes
- ✅ Custom domain with HTTPS (DanHecker.com)
- ✅ Automated deployment pipeline
- ✅ Component-based architecture with CSS design tokens
- ✅ Consistent styling through CSS variables
- ✅ Comprehensive unit test coverage (24+ tests)
- ✅ GitHub CodeQL security scanning
- ✅ SonarQube Cloud code quality analysis
- ✅ Ephemeral PR preview deployments
- 🔄 Under construction: Dark mode toggle
- 🔄 Under construction: PDF download functionality
- 🔄 Under construction: Architecture diagram visualization

## 🏗️ Development

### Prerequisites
- Node.js 20+
- npm

### Local Development
```bash
# Clone the repository
git clone https://github.com/heckerdj/resume-as-code.git
cd resume-as-code

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Project Structure
```
src/
├── components/           # React components (each with own CSS)
│   ├── Header.tsx       # Site header with contact info
│   ├── Header.css       # Header styles
│   ├── About.tsx        # About section with construction notice
│   ├── About.css        # About section styles
│   ├── Experience.tsx   # Work experience
│   ├── Experience.css   # Experience styles
│   ├── Skills.tsx       # Technical skills grid
│   ├── Skills.css       # Skills styles
│   └── Projects.tsx     # Project showcase
│   └── Projects.css     # Project styles
├── test/                # Unit tests
│   ├── setup.ts         # Test configuration
│   ├── Header.test.tsx  # Header component tests
│   ├── About.test.tsx   # About component tests
│   ├── Skills.test.tsx  # Skills component tests
│   ├── Projects.test.tsx # Projects component tests
│   └── App.test.tsx     # App component tests
├── App.tsx              # Main application component
├── App.css              # Global styles & CSS design tokens
└── main.tsx            # Application entry point

docs/
├── CSS_ARCHITECTURE.md      # CSS architecture guidelines
├── CSS_DECISION_SUMMARY.md  # Why component-based CSS
└── SONARCLOUD_SETUP.md      # SonarQube Cloud setup guide
```

### CSS Architecture

This project follows **component-based CSS** with shared design tokens:
- Each component has its own CSS file (colocation)
- CSS variables in `App.css` ensure consistency
- Design tokens for colors, spacing, shadows, etc.
- Best practice for React + Vite projects

📖 See [docs/CSS_ARCHITECTURE.md](docs/CSS_ARCHITECTURE.md) for detailed guidelines.

## 🔄 DevOps Pipeline

The site implements a complete DevOps pipeline with comprehensive testing and security:

1. **Code:** React + TypeScript with ESLint
2. **Build:** Vite build process
3. **Test:** Vitest with React Testing Library (24+ unit tests)
4. **Security:** GitHub CodeQL SAST scanning
5. **Quality:** SonarQube Cloud analysis with coverage reports
6. **Deploy:** Automated GitHub Actions workflow
7. **Monitor:** GitHub Pages deployment status

### CI/CD Workflows

#### Main Deployment (`deploy.yml`)
- Triggers on push to `main` branch
- Runs tests and builds React app
- Deploys to GitHub Pages automatically
- Custom domain configuration maintained

#### PR Preview (`pr-preview.yml`)
- Triggers on pull request events
- Runs full test suite
- Builds and deploys to unique preview URL
- Comments on PR with preview link
- Format: `https://danhecker.com/pr-{number}/`

#### Preview Cleanup (`pr-preview-cleanup.yml`)
- Triggers when PR is closed or merged
- Removes preview deployment
- Cleans up GitHub Pages branch

#### Code Quality (`sonarcloud.yml`)
- Runs on push to `main` and all PRs
- Executes tests with coverage
- Uploads results to SonarQube Cloud
- Provides code quality metrics

#### Security Scanning (`codeql.yml`)
- Runs on push to `main`, PRs, and weekly schedule
- Performs SAST analysis with CodeQL
- Identifies security vulnerabilities
- Reports findings in Security tab

### Testing

The project includes comprehensive unit tests using Vitest:
- 24+ test cases covering all components
- React Testing Library for component testing
- Coverage reporting integrated with SonarQube
- Run with `npm test` or `npm run test:coverage`

### Code Quality & Security

#### SonarQube Cloud
- Automated code quality analysis
- Test coverage tracking
- Code smell detection
- Duplicate code identification

📖 See [docs/SONARCLOUD_SETUP.md](docs/SONARCLOUD_SETUP.md) for setup instructions.

#### GitHub CodeQL
- Weekly security scans
- PR-based vulnerability detection
- Security findings in GitHub Security tab
- Extended security queries enabled

## 📋 Planned Enhancements

- [x] Unit testing with Vitest
- [x] SonarCloud integration for code quality
- [x] GitHub CodeQL for security analysis
- [x] Ephemeral PR preview deployments
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] Contact form functionality

---

Built with ❤️ by Dan Hecker | Showcasing Resume-as-Code principles

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
