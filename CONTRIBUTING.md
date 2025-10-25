# Contributing to Piktoza

Thank you for your interest in contributing to Piktoza! This document provides guidelines and instructions for contributing to the icon library.

## Table of Contents

- [Getting Started](#getting-started)
- [Adding New Icons](#adding-new-icons)
- [Icon Design Guidelines](#icon-design-guidelines)
- [File Naming Conventions](#file-naming-conventions)
- [Submitting Changes](#submitting-changes)
- [Code of Conduct](#code-of-conduct)

## Getting Started

1. **Fork the Repository**
   \`\`\`bash
   git clone https://github.com/piktoza/piktoza.git
   cd piktoza
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   pnpm install
   \`\`\`

3. **Run the Development Server**
   \`\`\`bash
   pnpm run dev
   \`\`\`

## Adding New Icons

### Step 1: Create SVG Files

Create your icon in all 5 variants following the design guidelines below. Each variant should be saved as a separate SVG file.

### Step 2: Organize Files

Place your SVG files in the appropriate directory structure:

\`\`\`
src/icons/
├── outline/
│   └── [category]/
│       └── iconName.svg
├── bold/
│   └── [category]/
│       └── iconName.svg
├── bulk/
│   └── [category]/
│       └── iconName.svg
├── broken/
│   └── [category]/
│       └── iconName.svg
└── twotone/
    └── [category]/
        └── iconName.svg
\`\`\`

### Step 3: Generate Components

Run the component generator to create React components from your SVG files:

\`\`\`bash
pnpm run generate
\`\`\`

### Step 4: Test Your Icons

Test your new icons in the website:

\`\`\`bash
pnpm run dev
\`\`\`

Navigate to the icons page and search for your new icons to verify they appear correctly.

## Icon Design Guidelines

### General Requirements

- **Size**: Design icons on a 24x24px grid
- **Stroke Width**: 
  - Outline: 1.5px
  - Bold: 2px
  - Broken: 1.5px with gaps
- **Padding**: Maintain 2px padding from the edges
- **Format**: Save as optimized SVG
- **Colors**: Use `currentColor` for strokes and fills

### Variant Specifications

#### Outline
- Clean, single-stroke line icons
- Consistent 1.5px stroke width
- No fills, only strokes
- Rounded line caps and joins

#### Bold
- Thicker 2px stroke width
- Same design as Outline but bolder
- Maintains the same proportions

#### Bulk
- Filled shapes with solid colors
- Primary elements filled
- Secondary elements may use transparency (opacity: 0.4)

#### Broken
- Similar to Outline but with intentional gaps
- Breaks should be consistent and purposeful
- Maintains recognizability

#### TwoTone
- Combination of filled and outlined elements
- Primary elements filled (opacity: 0.4)
- Secondary elements outlined (1.5px stroke)

### SVG Optimization

Before submitting, optimize your SVG files:

1. Remove unnecessary metadata
2. Simplify paths
3. Use `currentColor` for dynamic coloring
4. Remove fixed width/height attributes
5. Add `viewBox="0 0 24 24"`

Example optimized SVG:

\`\`\`xml
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
\`\`\`

## File Naming Conventions

### Icon Names

- Use **camelCase** for file names
- Be descriptive but concise
- Use common terminology
- Avoid abbreviations unless widely recognized

**Good Examples:**
- `arrowLeft.svg`
- `home2.svg`
- `userCircle.svg`
- `shoppingCart.svg`

**Bad Examples:**
- `arrow-left.svg` (use camelCase, not kebab-case)
- `arr_l.svg` (too abbreviated)
- `icon1.svg` (not descriptive)

### Category Names

Icons should be organized into logical categories:

- `arrow` - Directional and navigation icons
- `home` - Home, building, and location icons
- `media` - Media controls and entertainment
- `communication` - Chat, email, and messaging
- `business` - Office and business-related icons
- `design` - Creative and design tools
- `development` - Code and developer tools
- `security` - Security and privacy icons
- `social` - Social media and sharing
- `weather` - Weather conditions
- `shopping` - E-commerce and shopping
- `user` - User profiles and accounts
- `file` - Documents and file types
- `device` - Devices and hardware
- `transport` - Vehicles and transportation

If your icon doesn't fit existing categories, propose a new category in your pull request.

## Submitting Changes

### Pull Request Process

1. **Create a Branch**
   \`\`\`bash
   git checkout -b add-new-icons
   \`\`\`

2. **Add Your Changes**
   \`\`\`bash
   git add .
   git commit -m "Add [icon names] to [category] category"
   \`\`\`

3. **Push to Your Fork**
   \`\`\`bash
   git push origin add-new-icons
   \`\`\`

4. **Open a Pull Request**
   - Provide a clear title and description
   - List all icons added or modified
   - Include screenshots if possible
   - Reference any related issues

### Pull Request Checklist

- [ ] Icons follow design guidelines
- [ ] All 5 variants are included
- [ ] Files are properly named (camelCase)
- [ ] Files are in correct category folders
- [ ] SVGs are optimized
- [ ] Components generated successfully
- [ ] Icons tested in the website
- [ ] No console errors or warnings

### Commit Message Format

Use clear, descriptive commit messages:

\`\`\`
Add [icon names] to [category] category

- Added arrowLeft, arrowRight, arrowUp, arrowDown icons
- All 5 variants included
- Optimized SVG files
\`\`\`

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Publishing others' private information
- Other unprofessional conduct

## Questions?

If you have questions or need help:

- Open an issue on GitHub
- Check existing issues and discussions
- Review the documentation at [piktoza.com/docs](https://piktoza.com/docs)

## License

By contributing to Piktoza, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Piktoza! Your efforts help make this library better for everyone.
