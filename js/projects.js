/**
 * Projects Data File
 *
 * To add a new project, simply add a new object to the projects array below.
 *
 * Each project should have:
 * - title: The project title
 * - description: A brief description of the project
 * - category: One of "Creative", "Writing", "Presentation", or "Assignment"
 * - date: Date in format "YYYY-MM" or "YYYY-MM-DD"
 * - link: URL to the project content (can be a PDF, external site, etc.)
 */

const projects = [
    {
        title: "The Beatles' Influence on Modern Music",
        description: "A comprehensive analysis exploring how The Beatles' innovative recording techniques and songwriting approaches continue to influence contemporary artists across multiple genres.",
        category: "Writing",
        date: "2024-03",
        link: "#"
    },
    {
        title: "Abbey Road: A Visual Timeline",
        description: "An interactive creative project documenting the making of Abbey Road, featuring rare photographs, recording session notes, and artist interviews from the historic 1969 sessions.",
        category: "Creative",
        date: "2024-01",
        link: "#"
    },
    {
        title: "The Beatles and the British Invasion",
        description: "A detailed presentation examining The Beatles' role in the British Invasion of the 1960s and their impact on American popular culture and the music industry.",
        category: "Presentation",
        date: "2023-11",
        link: "#"
    },
    {
        title: "Analyzing Sgt. Pepper's Lonely Hearts Club Band",
        description: "Academic course assignment providing musicological analysis of the groundbreaking 1967 album, including production techniques, lyrical themes, and cultural significance.",
        category: "Assignment",
        date: "2023-09",
        link: "#"
    },
    {
        title: "Beatles in Florida: Photo Collection",
        description: "A curated collection of photographs and stories documenting The Beatles' visits to Florida, including their famous Ed Sullivan Show appearances and concert performances.",
        category: "Creative",
        date: "2024-05",
        link: "https://www.facebook.com/beatlesinflorida"
    }
];

// Make projects available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
