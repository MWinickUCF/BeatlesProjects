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
 * - thumbnail: (Optional) Path to thumbnail image in images/ directory
 */

const projects = [
    {
        title: "Unseen George Harrison Photos from Deerfield Beach",
        description: "Promoting an exhibit of the recent finding of unseen George Harrison photos from his time in Deerfield Beach, FL in November 1970.",
        category: "Creative",
        date: "2024-11",
        link: "https://www.yahoo.com/entertainment/music/articles/magical-mystery-solved-never-seen-184400999.html",
        thumbnail: "images/george-harrison-deerfield.jpeg"
    },
    {
        title: "Fest Fans Get Together in Chicago",
        description: "Beatles fest fans gathering in Chicago to celebrate and share their love for The Beatles, featuring interviews and highlights from the event.",
        category: "Creative",
        date: "2024-10",
        link: "https://brunchradio.com/fest-fans-get-together-in-chicago-2/"
    },
    {
        title: "The Beatles' Influence on Modern Music",
        description: "A comprehensive analysis exploring how The Beatles' innovative recording techniques and songwriting approaches continue to influence contemporary artists across multiple genres.",
        category: "Writing",
        date: "2024-03",
        link: "https://mdpl.org/news/2021/01/guest-post-from-liverpool-to-miami-beach-a-beatles-legacy-shared/"
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
