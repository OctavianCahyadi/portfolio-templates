# GitHub Ready Template

A professional portfolio template designed to match the existing local template structure for seamless GitHub importing.

## Preview

![Template Preview](assets/screenshots/preview.png)

## Features

- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Clean Typography** - Professional Inter font family
- ✅ **Professional Layout** - Clean, modern design
- ✅ **Mobile Optimized** - Mobile-first responsive design
- ✅ **GitHub Import Ready** - Structured for easy importing

## Structure

This template follows the standardized structure compatible with the portfolio template system:

```
github-ready-template/
├── template.json          # Template configuration
├── components/
│   └── Layout.tsx         # Main layout component
├── pages/
│   ├── HomePage.tsx       # Home page component
│   ├── AboutPage.tsx      # About page component  
│   ├── ProjectsPage.tsx   # Projects page component
│   ├── BlogPage.tsx       # Blog page component
│   └── ContactPage.tsx    # Contact page component
├── styles/
│   ├── globals.css        # Global styles
│   └── github-ready-template.css  # Template-specific styles
└── assets/
    └── screenshots/
        └── preview.png    # Template preview image
```

## Installation

### Via GitHub Import (Recommended)

1. Go to your portfolio dashboard
2. Navigate to Templates → Import from GitHub
3. Enter this repository URL
4. Click "Import Template"

### Manual Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Copy to your portfolio templates directory:
   ```bash
   cp -r github-ready-template/ /path/to/your/portfolio/templates/
   ```

3. Activate through your portfolio dashboard

## Customization

### Colors

Edit the color scheme in `template.json`:

```json
{
  "config": {
    "colors": {
      "primary": "#3b82f6",
      "secondary": "#64748b", 
      "accent": "#f59e0b"
    }
  }
}
```

### Typography

Modify font settings in `template.json`:

```json
{
  "config": {
    "typography": {
      "fontFamily": "Inter, system-ui, sans-serif"
    }
  }
}
```

### Components

- **Layout.tsx** - Main navigation and footer
- **HomePage.tsx** - Hero section, featured projects, skills
- **AboutPage.tsx** - Detailed about information
- **ProjectsPage.tsx** - Project showcase grid
- **BlogPage.tsx** - Blog posts listing
- **ContactPage.tsx** - Contact form and information

## Data Interface

This template expects data in the following format:

```typescript
interface LandingPageData {
  profile: {
    name: string;
    role: string;
    description: string;
    email?: string;
    location?: string;
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    featured?: boolean;
  }>;
  skillCategories: Array<{
    name: string;
    displayName: string;
    skills: Array<{
      name: string;
    }>;
  }>;
}
```

## Compatibility

- ✅ Next.js 14+
- ✅ React 18+
- ✅ TypeScript 5+
- ✅ Tailwind CSS
- ✅ Portfolio Template System

## License

MIT License - Feel free to use this template for personal and commercial projects.

## Support

For template-related issues:
1. Check the template validation output
2. Ensure all required files are present
3. Verify template.json schema matches specification

---

**Template Version:** 1.0.0  
**Author:** Portfolio Template Generator  
**Category:** Professional