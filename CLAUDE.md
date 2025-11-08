# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Margot Winick - Beatles Portfolio Website**

A static portfolio website showcasing Beatles-related projects, writings, presentations, and creative works. Built with vanilla HTML, CSS, and JavaScript for simplicity and easy GitHub Pages deployment.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Hosting**: GitHub Pages
- **No Build Process**: Static files only, no compilation required
- **No Dependencies**: No npm, webpack, or other build tools

## Project Structure

```
BeatlesProjects/
├── index.html          # Main portfolio page
├── css/
│   └── styles.css      # All styling (responsive, professional + vintage Beatles theme)
├── js/
│   ├── projects.js     # Project data array (user edits this to add projects)
│   └── main.js         # Core functionality: rendering, search, sorting
├── images/             # Image assets directory
├── .nojekyll           # Tells GitHub Pages not to use Jekyll
├── README.md           # User-facing documentation
└── CLAUDE.md           # This file
```

## Key Features

1. **Dynamic Project Rendering**: Projects are defined in `js/projects.js` and automatically rendered
2. **Search**: Real-time filtering across titles, descriptions, and categories
3. **Sorting**: Multiple sort options (date, title, category)
4. **Responsive**: Mobile-first design, works on all screen sizes
5. **Professional Styling**: Black & white vintage Beatles aesthetic

## Development Workflow

### Adding New Projects

Edit `js/projects.js` and add objects to the `projects` array:

```javascript
{
    title: "Project Title",
    description: "Description...",
    category: "Creative", // or "Writing", "Presentation", "Assignment"
    date: "2024-12",
    link: "https://..."
}
```

No build step needed - just save and reload the page.

### Updating Content

- **Bio/Contact**: Edit the `<section id="about">` in `index.html`
- **Styling**: Modify `css/styles.css` (CSS variables at top for colors)
- **Functionality**: Update `js/main.js`

### Testing Locally

**Option 1**: Open `index.html` directly in a browser

**Option 2**: Use a local server for better testing:
```bash
python -m http.server 8000
# or
npx http-server
```

### Deploying to GitHub Pages

1. Push changes to the repository
2. Enable GitHub Pages in repo settings (Settings → Pages)
3. Select branch (main/master) and root folder
4. Site will be available at `https://username.github.io/BeatlesProjects/`

Changes auto-deploy on push to the selected branch.

## Code Architecture

### Data Layer (`js/projects.js`)

Simple JavaScript array containing project objects. This is the single source of truth for all portfolio content.

### Presentation Layer (`index.html`)

Semantic HTML5 structure:
- Header with title
- About section with bio and contact
- Projects section with search/sort controls
- Projects grid (populated dynamically)
- Footer

### Styling Layer (`css/styles.css`)

- CSS custom properties for easy theming
- Mobile-first responsive design
- Breakpoints: 768px (tablet), 480px (mobile)
- Professional black/white palette with vintage touches
- Smooth transitions and hover effects

### Logic Layer (`js/main.js`)

Core functions:
- `init()`: Initialize app, set up event listeners
- `renderProjects()`: Generate HTML for project cards
- `handleSearch()`: Filter projects by search term
- `handleSort()`: Sort projects by selected option
- `createProjectCard()`: Create individual project card HTML
- `formatDate()`: Format dates for display
- `escapeHtml()`: Prevent XSS attacks

## Important Conventions

1. **No External Dependencies**: Keep the project dependency-free
2. **Data-Driven**: All content changes happen in `projects.js`, not HTML
3. **Accessibility**: Maintain ARIA labels and semantic HTML
4. **Security**: Always escape user-generated content (see `escapeHtml()`)
5. **Performance**: Keep JavaScript minimal - site should load instantly

## GitHub Pages Configuration

- `.nojekyll` file prevents Jekyll processing
- All assets use relative paths for portability
- Works from root directory or subdirectory

## Future Enhancements (Potential)

When requested by the user, consider:
- Image thumbnails for projects
- Tags/keywords for more granular filtering
- Dark mode toggle
- Print stylesheet for CV/resume format
- Analytics integration
- Contact form (would require backend service)

## Common Tasks

**Add a project**: Edit `js/projects.js`, commit, push
**Change colors**: Update CSS variables in `css/styles.css`
**Update bio**: Edit About section in `index.html`
**Test changes**: Open `index.html` in browser or use local server
**Deploy**: `git push origin main`
