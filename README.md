# Margot Winick - Beatles Portfolio

A professional portfolio website showcasing Beatles-related projects, writings, presentations, and creative works. Built with vanilla HTML, CSS, and JavaScript for easy maintenance and GitHub Pages deployment.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Search Functionality**: Real-time search across project titles, descriptions, and categories
- **Sorting Options**: Sort projects by date, title, or category
- **Professional Styling**: Clean, modern design with vintage Beatles black-and-white aesthetic
- **Easy to Update**: Simple data file structure for adding new projects
- **Fast Loading**: No frameworks or dependencies - pure static HTML/CSS/JS

## Project Structure

```
BeatlesProjects/
├── index.html          # Main portfolio page
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── projects.js     # Project data (edit here to add projects)
│   └── main.js         # Search, sort, and rendering logic
├── images/             # Directory for images and assets
├── .nojekyll           # GitHub Pages configuration
├── README.md           # This file
└── CLAUDE.md           # AI assistant guidance
```

## Adding New Projects

To add a new project, simply edit `js/projects.js` and add a new object to the `projects` array:

```javascript
{
    title: "Your Project Title",
    description: "A brief description of your project...",
    category: "Creative", // Options: Creative, Writing, Presentation, Assignment
    date: "2024-12",      // Format: YYYY-MM or YYYY-MM-DD
    link: "https://..."   // URL to project content
}
```

Save the file, and the project will automatically appear on your website!

## Updating Your Information

### About Me Section

Edit `index.html` to update your bio and contact information:

1. Find the `<section id="about">` section
2. Update the paragraph text with your bio
3. Update the Facebook link (currently pointing to "Beatles in Florida")
4. Update the email address in the contact info

### Header

To change the portfolio title, edit the `<header>` section in `index.html`.

## Local Development

To view the website locally:

1. **Simple Method**: Open `index.html` directly in your web browser

2. **Using a Local Server** (recommended for best testing):
   ```bash
   # If you have Python installed:
   python -m http.server 8000

   # Or using Node.js:
   npx http-server
   ```
   Then visit `http://localhost:8000` in your browser

## Deploying to GitHub Pages

### Initial Setup

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select the branch you want to deploy (typically `main` or `master`)
   - Select **/ (root)** as the folder
   - Click **Save**

3. **Access your site**:
   - GitHub will provide a URL like: `https://yourusername.github.io/BeatlesProjects/`
   - The site may take a few minutes to deploy initially

### Updating the Site

After making changes to your portfolio:

```bash
git add .
git commit -m "Update projects"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## Customization

### Colors and Styling

Edit `css/styles.css` to customize:
- Color scheme (see CSS variables at the top of the file)
- Typography and fonts
- Layout and spacing
- Hover effects and animations

### Layout

The projects grid automatically adjusts based on screen size:
- Desktop: Multiple columns
- Tablet: 2 columns
- Mobile: Single column

You can adjust breakpoints in the `@media` queries in `styles.css`.

## Browser Support

This site works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2024 Margot Winick. All rights reserved.

## Contact

- Facebook: [Beatles in Florida](https://www.facebook.com/beatlesinflorida)
- Email: your.email@example.com

---

Built with ❤️ for The Beatles
