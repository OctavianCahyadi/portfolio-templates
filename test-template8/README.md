# test-template8

> test template 8

[![Template Category](https://img.shields.io/badge/category-professional-blue.svg)](#)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](#)

## 📋 Table of Contents

- [Preview](#-preview)
- [Features](#-features)
- [Installation](#-installation)
- [Customization](#-customization)
- [Components](#-components)
- [Styling](#-styling)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## 🖼️ Preview

![Desktop Preview](assets/screenshots/preview.png)

*Preview image will be automatically generated when you build the template*

## ✨ Features

- ✅ Responsive Design
- ✅ Dark Mode Toggle

## 🎨 Design System

### Colors

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![Primary](https://via.placeholder.com/20/3b82f6/000000?text=+) | `#3b82f6` |
| Secondary | ![Secondary](https://via.placeholder.com/20/64748b/000000?text=+) | `#64748b` |
| Accent | ![Accent](https://via.placeholder.com/20/f59e0b/000000?text=+) | `#f59e0b` |

### Typography

- **Primary Font**: Inter
- **Category**: Professional

## 🚀 Installation

### Method 1: Template System Integration

This template is designed to work with the Portfolio Template System:

1. **Import via Admin Dashboard**
   - Navigate to your portfolio admin dashboard
   - Go to Templates → Import Template
   - Upload this template or provide the repository URL
   - Activate the template in your settings

2. **Manual Installation**
   ```bash
   # Clone to your templates directory
   cd /path/to/portfolio/templates
   git clone [repository-url] test-template8
   
   # Or copy template files
   cp -r test-template8/ /path/to/portfolio/templates/
   ```

### Method 2: Standalone Usage

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Customization

### Quick Color Updates

Update colors in `template.json`:

```json
{
  "config": {
    "colors": {
      "primary": "#3b82f6",
      "secondary": "#64748b",
      "accent": "#f59e0b",
      "background": "#ffffff",
      "text": "#1e293b"
    }
  }
}
```

### Font Customization

```json
{
  "config": {
    "typography": {
      "fontFamily": "Inter, system-ui, sans-serif"
    }
  }
}
```

### Advanced Styling

1. **Template-specific styles**: Edit `styles/test-template8.css`
2. **Global styles**: Modify `styles/globals.css`
3. **Component styles**: Update individual component files

## 🧩 Components

### Page Components

| Component | Path | Description |
|-----------|------|-------------|
| Home | `pages/HomePage.tsx` | Landing page with hero and skills |
| About | `pages/AboutPage.tsx` | Detailed profile and experience |
| Projects | `pages/ProjectsPage.tsx` | Portfolio showcase with filtering |
| Blog | `pages/BlogPage.tsx` | Blog posts listing and categories |
| Contact | `pages/ContactPage.tsx` | Contact information and social links |
| Loading | `pages/loading.tsx` | Template-specific loading screen |

### Layout & Utility Components

| Component | Path | Description |
|-----------|------|-------------|
| Layout | `components/Layout.tsx` | Main layout wrapper |
| LoadingSpinner | `components/Loader.tsx` | Loading indicators with multiple variants |
| SkeletonLoader | `components/SkeletonLoader.tsx` | Content placeholders for different layouts |

### Data Interfaces

```typescript
interface HomePageProps {
  landingPageData: {
    profile: Profile;
    socialLinks: SocialLink[];
    skillCategories: SkillCategory[];
    navigation: NavigationItem[];
  };
}

interface Profile {
  name: string;
  role: string;
  description: string;
  profileImage?: string;
  email?: string;
  website?: string;
}

// Loading Components Usage
import { LoadingSpinner, SkeletonLoader, TemplateLoader } from '../components/Loader';

// Basic spinner
<LoadingSpinner text="Loading..." />

// Terminal variant (for developer themes)
<LoadingSpinner variant="terminal" text="Initializing..." />

// Skeleton placeholders
<SkeletonLoader variant="profile" />
<SkeletonLoader variant="project" />
<SkeletonLoader variant="blog" />

// Full page loader
<TemplateLoader title="portfolio.sh" command="Loading data...">
  <div>Custom loading content here</div>
</TemplateLoader>

// Template-specific loading page (pages/loading.tsx)
// This file is automatically used by Next.js during page transitions
// and provides a loading screen that matches your template's design
```

### Loading System Features

This template includes a comprehensive loading system:

- **Template-Specific Loading**: Each template has its own `loading.tsx` that matches the design theme
- **Multiple Variants**: Different loading styles for different template categories
- **Responsive Design**: Loading screens adapt to mobile and desktop
- **Theme Integration**: Colors, fonts, and animations match the template configuration

#### Loading Page Behavior

The `pages/loading.tsx` file is automatically triggered by Next.js when:
- Navigating between pages
- Loading data from APIs
- Initial app startup


**Modern Theme Loading Features:**
- Clean, professional design
- Smooth bounce animations
- Card-based layout
- Light theme with blue accents


## 💅 Styling

This template uses a combination of:

- **CSS Custom Properties** for theming
- **Tailwind CSS** for utility classes
- **Template-specific CSS** for custom components

### CSS Architecture

```
styles/
├── globals.css          # Global reset and base styles
└── test-template8.css          # Template-specific styles
```

### Color Scheme Variables

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
  --font-primary: Inter;
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn
- TypeScript knowledge for customization

### Development Workflow

1. **Setup Development Environment**
   ```bash
   npm install
   npm run dev
   ```

2. **Make Changes**
   - Update page components in `pages/`
   - Modify styles in `styles/`
   - Test across different screen sizes

3. **Validation**
   ```bash
   # Validate template structure
   npm run validate test-template8
   
   # Build for production
   npm run build test-template8
   ```

4. **Testing Checklist**
   - [ ] Responsive design (mobile, tablet, desktop)
   - [ ] Color contrast accessibility
   - [ ] TypeScript compilation
   - [ ] Performance optimization
   - [ ] Cross-browser compatibility

### File Structure

```
test-template8/
├── assets/
│   └── screenshots/
│       └── preview.png
├── components/
│   ├── Layout.tsx
│   ├── Loader.tsx
│   └── SkeletonLoader.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── ProjectsPage.tsx
│   ├── BlogPage.tsx
│   └── loading.tsx
├── styles/
│   ├── globals.css
│   └── test-template8.css
├── template.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Guidelines

- Follow TypeScript best practices
- Ensure responsive design
- Test accessibility features
- Update documentation as needed

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

Feel free to use this template for personal and commercial projects.

## 👤 Author

**oadcah**

- GitHub: [@oadcah](https://github.com/oadcah)


## 🙏 Acknowledgments

- Built for the Portfolio Template System
- Icons provided by [Lucide React](https://lucide.dev)
- Animations powered by [Framer Motion](https://framer.com/motion)

---

<div align="center">
  <strong>🎨 Built with the Portfolio Template Generator</strong>
  <br>
  <sub>Creating beautiful, customizable portfolio templates</sub>
</div>