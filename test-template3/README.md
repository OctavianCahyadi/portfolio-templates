# test-template3

test-template 3

## Preview

![Desktop Preview](assets/screenshots/preview.png)

## Features

- Responsive Design
- Dark Mode Toggle

## Colors

- **Primary**: #3b82f6
- **Secondary**: #64748b
- **Accent**: #f59e0b

## Typography

- **Primary Font**: undefined
- **Category**: professional

## Installation

This template is designed to work with the Portfolio Template System. To use:

1. Import this template through the admin dashboard
2. Or clone this repository to your templates directory
3. Activate the template in your portfolio settings

## Customization

### Colors

Update the colors in `template.json`:

```json
{
  "colors": {
    "primary": "#3b82f6",
    "secondary": "#64748b",
    "accent": "#f59e0b"
  }
}
```

### Fonts

Change the font family in `template.json`:

```json
{
  "fonts": {
    "primary": "undefined",
    "secondary": "monospace"
  }
}
```

### Components

All page components are located in the `pages/` directory:

- `HomePage.tsx` - Landing page
- `AboutPage.tsx` - About section
- `ContactPage.tsx` - Contact information
- `ProjectsPage.tsx` - Projects showcase
- `BlogPage.tsx` - Blog listing
- `Layout.tsx` - Common layout wrapper

## Dependencies

This template requires:

- Next.js 14+
- React 18+
- TypeScript 5+
- Tailwind CSS

Additional dependencies:
- framer-motion
- lucide-react

## Development

1. Make your changes to the page components
2. Update preview images in `assets/screenshots/` directory
3. Test responsive design on different screen sizes
4. Validate accessibility and performance

## License

MIT License - feel free to use this template for personal and commercial projects.

## Author

Created by octaviancahyadi ([@octaviancahyadi](https://github.com/octaviancahyadi))

---

Built for the Portfolio Template System