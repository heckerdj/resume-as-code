# resume-as-code

![GitHub Pages](https://img.shields.io/github/deployments/HeckerDJ/resume-as-code/github-pages?label=GitHub%20Pages&logo=github)

A personal resume website built with React, TypeScript, and deployed via GitHub Pages with automated CI/CD pipeline. This project showcases modern web development practices and DevOps integration.

🌐 **Live site:** [https://DanHecker.com](https://DanHecker.com)

## 🛠️ Technology Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Component-based CSS3 with design token system
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Code Quality:** ESLint, TypeScript strict mode

## 🚀 Features

- ✅ Professional resume layout with modern UI
- ✅ Responsive design for all device sizes
- ✅ Custom domain with HTTPS (DanHecker.com)
- ✅ Automated deployment pipeline
- ✅ Component-based architecture with CSS design tokens
- ✅ Consistent styling through CSS variables
- 🔄 Under construction: Dark mode toggle
- 🔄 Under construction: PDF download functionality
- 🔄 Under construction: Architecture diagram visualization

## 🏗️ Development

### Prerequisites
- Node.js 20+
- pnpm

### Local Development
```bash
# Clone the repository
git clone https://github.com/heckerdj/resume-as-code.git
cd resume-as-code

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
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
├── App.tsx              # Main application component
├── App.css              # Global styles & CSS design tokens
└── main.tsx            # Application entry point

docs/
├── CSS_ARCHITECTURE.md   # CSS architecture guidelines
└── CSS_DECISION_SUMMARY.md # Why component-based CSS
```

### CSS Architecture

This project follows **component-based CSS** with shared design tokens:
- Each component has its own CSS file (colocation)
- CSS variables in `App.css` ensure consistency
- Design tokens for colors, spacing, shadows, etc.
- Best practice for React + Vite projects

📖 See [docs/CSS_ARCHITECTURE.md](docs/CSS_ARCHITECTURE.md) for detailed guidelines.

## 🔄 DevOps Pipeline

The site implements a complete DevOps pipeline:

1. **Code:** React + TypeScript with ESLint
2. **Build:** Vite build process
3. **Test:** Type checking with TypeScript
4. **Deploy:** Automated GitHub Actions workflow
5. **Monitor:** GitHub Pages deployment status

### Deployment Workflow
- Triggers on push to `main` branch
- Installs dependencies and builds React app
- Deploys to GitHub Pages automatically
- Custom domain configuration maintained

## 📋 Planned Enhancements

- [ ] Unit testing with Jest/Vitest
- [ ] SonarCloud integration for code quality
- [ ] GitHub CodeQL for security analysis
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
