# CSS Architecture Guide

## Overview

This project follows a **component-based CSS architecture** with shared design tokens. This approach combines the best of both worlds: the maintainability of component-scoped styles with the consistency of shared variables.

## Architecture Decision: Component-Based CSS

### Why Keep Separate CSS Files Per Component?

We maintain one CSS file per React component for several important reasons:

#### 1. **Colocation & Maintainability**
- Styles live next to the components they style
- Easy to find and modify component-specific styles
- Clear ownership: each component owns its styles

#### 2. **Code Splitting & Performance**
- Vite can optimize bundle loading per component
- Unused components and their styles can be tree-shaken
- Better lazy-loading opportunities

#### 3. **Scalability**
- As the project grows, styles remain organized
- New developers can quickly find relevant styles
- Reduces merge conflicts in version control

#### 4. **Better Developer Experience**
- Easier to understand which styles apply to which components
- Simpler debugging with browser DevTools
- Follows modern React best practices

## Design Token System

We use CSS variables (custom properties) defined in `App.css` as our design token system:

### Color Palette
```css
--color-primary: #3498db
--color-secondary: #667eea
--color-accent: #e74c3c
--color-text-primary: #2c3e50
--color-bg-body: #f8f9fa
```

### Spacing Scale
```css
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
```

### Shadows & Effects
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1)
--shadow-md: 0 5px 15px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15)
```

### Border Radius
```css
--radius-sm: 8px
--radius-md: 10px
--radius-lg: 15px
--radius-pill: 30px
```

### Transitions
```css
--transition-fast: 0.2s ease
--transition-normal: 0.3s ease
--transition-slow: 0.5s ease
```

## File Structure

```
src/
├── App.css                    # Global styles, CSS variables, base styles
├── index.css                  # Root-level styles (minimal)
└── components/
    ├── Header.css             # Header-specific styles
    ├── About.css              # About section styles
    ├── Experience.css         # Experience section styles
    ├── Skills.css             # Skills section styles
    ├── Education.css          # Education section styles
    └── Projects.css           # Projects section styles
```

## Usage Guidelines

### 1. Use CSS Variables for Design Tokens

✅ **Good:**
```css
.my-component {
  color: var(--color-text-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

❌ **Avoid:**
```css
.my-component {
  color: #2c3e50;
  padding: 2rem;
  border-radius: 10px;
}
```

### 2. Keep Component Styles Together

✅ **Good:**
```
Header.tsx
Header.css
```

❌ **Avoid:**
```
Header.tsx
components.css (all components in one file)
```

### 3. Common Section Pattern

Most content sections follow this pattern:
```css
.section-name {
  background: var(--color-bg-section);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) auto;
  box-shadow: var(--shadow-md);
}
```

### 4. Responsive Design

Use consistent breakpoints:
```css
@media (max-width: 768px) {
  /* Mobile styles using CSS variables */
  .my-component {
    padding: var(--spacing-sm);
  }
}
```

## Benefits of This Approach

### ✅ Consistency
- Design tokens ensure consistent colors, spacing, and effects
- Easy to update site-wide styles by changing variables

### ✅ Maintainability
- Component styles are easy to find and modify
- Clear separation of concerns

### ✅ Performance
- Vite optimizes CSS loading
- Only required styles are loaded

### ✅ Flexibility
- Easy to add new components without affecting existing ones
- Can override variables per component if needed

### ✅ Scalability
- Architecture supports growth without becoming unwieldy
- New team members can quickly understand the system

## When to Consolidate

Consider consolidating CSS files ONLY if:
1. You're using CSS Modules (`.module.css`) for true component isolation
2. You have many utility classes that are truly global
3. Your build tool doesn't support code splitting for CSS

In our case, with Vite and React, the component-based approach is optimal.

## Migration Path

If you need to consolidate in the future:

1. **Option A: CSS Modules**
   - Rename files to `Component.module.css`
   - Import as: `import styles from './Component.module.css'`
   - Use as: `className={styles.myClass}`

2. **Option B: CSS-in-JS**
   - Consider styled-components or Emotion
   - Provides true component scope
   - Better for dynamic styling

3. **Option C: Tailwind CSS**
   - Utility-first approach
   - Removes need for custom CSS files
   - Different paradigm entirely

## Conclusion

**Keep the component-based CSS architecture** with shared design tokens. This follows modern React best practices and provides the right balance between consistency and modularity.

The key improvements made:
1. ✅ Added CSS variables for design tokens
2. ✅ Kept component-based file structure
3. ✅ Ensured consistency through shared variables
4. ✅ Maintained excellent developer experience

This architecture is ideal for a project of this size and complexity.
