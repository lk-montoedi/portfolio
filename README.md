# Project Overview

This is a personal portfolio website for Lebone Montoedi, a software developer. It showcases his skills, projects, and experience. The website is built with modern web technologies, featuring a clean, responsive design with smooth animations.

**Key Technologies:**

*   **Frontend:** HTML, CSS, JavaScript
*   **CSS Framework:** Tailwind CSS
*   **Build Tool:** Vite
*   **Animations:** GSAP (GreenSock Animation Platform)
*   **Carousel:** Swiper.js

**Architecture:**

The project follows a simple and straightforward architecture:

*   `index.html`: The main entry point of the application.
*   `src/`: This directory contains the source code.
    *   `main.js`: The main JavaScript file, containing all the logic for animations, mobile menu, project modal, and header styling.
    *   `index.css`: The main stylesheet, which imports Tailwind CSS.
    *   `assets/`: This directory contains all the images and other assets used in the project.
*   `vite.config.js`: The configuration file for Vite.
*   `tailwind.config.js`: The configuration file for Tailwind CSS, which includes custom fonts and colors.
*   `package.json`: Defines the project's dependencies and scripts.

## Building and Running

### Prerequisites

*   Node.js and npm (or a compatible package manager) must be installed.

### Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

### Development

To run the development server:

```bash
npm run dev
```

This will start a local server, and you can view the website in your browser at the address provided by Vite (usually `http://localhost:5173`). The server will automatically reload when you make changes to the source files.

### Build

To build the project for production:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified files ready for deployment.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Customizations to the default theme are defined in `tailwind.config.js`.
*   **JavaScript:** The JavaScript code is located in `src/main.js`. It uses GSAP for animations and Swiper.js for the carousel.
*   **Project Data:** The project data (e.g., project details) is currently hardcoded in `src/main.js`. For future development, consider moving this data to a separate JSON file or fetching it from a CMS.
*   **Code Formatting:** While there is no explicit linter or formatter configured, it is recommended to maintain a consistent code style.
