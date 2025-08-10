# Portfolio Templates Collection

A collection of professional portfolio templates designed for the Portfolio Template System. Each template is structured for seamless GitHub importing and activation.

## 🎨 Available Templates

### GitHub Ready Template
- **Category:** Professional  
- **Description:** A clean, professional template perfect for showcasing your work
- **Features:** Responsive Design, Clean Typography, Mobile Optimized
- **Status:** ✅ Production Ready

## 📋 Template Structure

Each template follows the standardized structure for compatibility:

```
template-name/
├── template.json          # Template configuration with metadata
├── components/
│   └── Layout.tsx         # Main layout component
├── pages/
│   ├── HomePage.tsx       # Landing/home page
│   ├── AboutPage.tsx      # About page
│   ├── ProjectsPage.tsx   # Projects showcase
│   ├── BlogPage.tsx       # Blog listing
│   └── ContactPage.tsx    # Contact page
├── styles/
│   ├── globals.css        # Global styles
│   └── template-name.css  # Template-specific styles
├── assets/
│   └── screenshots/
│       └── preview.png    # Template preview image
└── README.md              # Template documentation
```

## 🚀 Using Templates

### Import via Dashboard (Recommended)
1. Go to your portfolio admin dashboard
2. Navigate to **Templates → Import from GitHub** 
3. Enter this repository URL: `https://github.com/your-username/portfolio-templates`
4. Select the template you want to import
5. Click **"Import Template"** to install

### Manual Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/portfolio-templates.git
   ```

2. Copy desired template to your portfolio:
   ```bash
   cp -r template-name/ /path/to/your/portfolio/templates/
   ```

3. Restart your portfolio application to detect the new template

4. Activate through your admin dashboard

## 📝 Template Configuration

Each template includes a `template.json` file with standardized configuration:

```json
{
  "id": "template-slug",
  "name": "Template Display Name",
  "description": "Template description",
  "author": "Author Name",
  "version": "1.0.0",
  "category": "professional|creative|minimal|dark|developer",
  "features": ["Feature 1", "Feature 2"],
  "components": {
    "Layout": "Layout.tsx",
    "HomePage": "../pages/HomePage.tsx"
  },
  "config": {
    "colors": {
      "primary": "#3b82f6",
      "secondary": "#64748b", 
      "accent": "#f59e0b"
    },
    "typography": {
      "fontFamily": "Inter, system-ui, sans-serif"
    }
  }
}
```

## 🔧 Data Interface

Templates expect data in this standardized format:

```typescript
// Landing Page Data
interface LandingPageData {
  profile: {
    name: string;
    role: string;
    description: string;
    email?: string;
    location?: string;
    avatar?: string;
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    githubUrl?: string;
    featured?: boolean;
  }>;
  skillCategories: Array<{
    name: string;
    displayName: string;
    skills: Array<{
      name: string;
      level?: number;
    }>;
  }>;
}
```

## ✅ Template Validation

All templates are validated using the Portfolio Template Generator:

- ✅ **File Structure** - Required files and directories
- ✅ **Configuration** - Valid template.json schema  
- ✅ **Components** - Proper React component exports
- ✅ **Styles** - CSS structure and formatting
- ✅ **Responsive** - Mobile-friendly design patterns

## 🛠️ Development

### Creating New Templates

1. Use the [Portfolio Template Generator](https://github.com/your-username/portfolio-template-generator):
   ```bash
   npm install -g portfolio-template-generator
   template-generator create
   ```

2. Validate your template:
   ```bash
   template-generator validate your-template-name
   ```

3. Build for distribution:
   ```bash
   template-generator build your-template-name
   ```

### Contributing Templates

1. Fork this repository
2. Create your template following the structure above
3. Validate with the template generator
4. Submit a pull request with:
   - Template files
   - Screenshots/preview images
   - Updated README

## 📊 Template Categories

- **Professional** - Clean, business-oriented designs
- **Creative** - Artistic, unique layouts for creative professionals
- **Minimal** - Simple, typography-focused designs
- **Dark** - Dark theme templates for developers/designers
- **Developer** - Code-focused, terminal-style themes

## 🔧 Compatibility

- ✅ **Next.js 14+** - Built with latest Next.js features
- ✅ **React 18+** - Modern React patterns  
- ✅ **TypeScript** - Fully typed components
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Responsive** - Mobile-first design approach

## 📄 License

All templates in this collection are released under the MIT License. Feel free to use them for personal and commercial projects.

## 🤝 Support

- **Template Issues:** Open an issue in this repository
- **System Issues:** Check the main [Portfolio Template System](https://github.com/your-username/portfolio-system) documentation
- **Community:** Join discussions in the Issues tab

---

**Collection Maintained By:** Portfolio Template Community  
**Last Updated:** $(date)  
**Total Templates:** 1