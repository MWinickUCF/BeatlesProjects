/**
 * Main JavaScript for Beatles Portfolio
 * Handles rendering, searching, and sorting of projects
 */

// State management
let currentProjects = [...projects];
let currentSearchTerm = '';
let currentSortOption = 'date-desc';

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const noResults = document.getElementById('noResults');
const currentYearSpan = document.getElementById('currentYear');

/**
 * Initialize the application
 */
function init() {
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();

    // Set up event listeners
    searchInput.addEventListener('input', handleSearch);
    sortSelect.addEventListener('change', handleSort);

    // Initial render
    renderProjects();
}

/**
 * Handle search input
 */
function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    filterAndRenderProjects();
}

/**
 * Handle sort selection
 */
function handleSort(e) {
    currentSortOption = e.target.value;
    filterAndRenderProjects();
}

/**
 * Filter and render projects based on current search and sort
 */
function filterAndRenderProjects() {
    // Filter projects based on search term
    let filteredProjects = projects.filter(project => {
        if (!currentSearchTerm) return true;

        const searchableText = [
            project.title,
            project.description,
            project.category
        ].join(' ').toLowerCase();

        return searchableText.includes(currentSearchTerm);
    });

    // Sort projects
    filteredProjects = sortProjects(filteredProjects, currentSortOption);

    // Update current projects
    currentProjects = filteredProjects;

    // Render
    renderProjects();
}

/**
 * Sort projects based on selected option
 */
function sortProjects(projectsToSort, sortOption) {
    const sorted = [...projectsToSort];

    switch (sortOption) {
        case 'date-desc':
            return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));

        case 'date-asc':
            return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));

        case 'title-asc':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));

        case 'title-desc':
            return sorted.sort((a, b) => b.title.localeCompare(a.title));

        case 'category':
            return sorted.sort((a, b) => {
                const categoryCompare = a.category.localeCompare(b.category);
                if (categoryCompare !== 0) return categoryCompare;
                // If same category, sort by date (newest first)
                return new Date(b.date) - new Date(a.date);
            });

        default:
            return sorted;
    }
}

/**
 * Render projects to the grid
 */
function renderProjects() {
    // Clear existing content
    projectsGrid.innerHTML = '';

    // Show/hide no results message
    if (currentProjects.length === 0) {
        noResults.style.display = 'block';
        return;
    } else {
        noResults.style.display = 'none';
    }

    // Create and append project cards
    currentProjects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

/**
 * Create a project card element
 */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Format date for display
    const formattedDate = formatDate(project.date);

    card.innerHTML = `
        <div class="project-category">${escapeHtml(project.category)}</div>
        <h4 class="project-title">${escapeHtml(project.title)}</h4>
        <div class="project-date">${formattedDate}</div>
        <p class="project-description">${escapeHtml(project.description)}</p>
        <a href="${escapeHtml(project.link)}"
           class="project-link"
           ${project.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            View Project
        </a>
    `;

    return card;
}

/**
 * Format date for display
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };

    // Check if day is included
    if (dateString.split('-').length === 3) {
        options.day = 'numeric';
    }

    return date.toLocaleDateString('en-US', options);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Add smooth scroll behavior for better UX
 */
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add smooth scrolling
addSmoothScrolling();
