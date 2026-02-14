# Joud Aljabri - Personal Portfolio

A simple, responsive personal portfolio website built as part of a web development assignment. The site showcases my projects, provides an introduction about me, and includes a contact form for reaching out.

## Features

- **About Me** section with a time-based greeting, tagline, and personal introduction
- **Projects** section displaying two projects (Bond Mobile App and Horse Riding Database System) in a responsive grid layout
- **Contact** section with a form (Name, Email, Message) and client-side submission feedback
- **Dark/Light theme toggle** with preference saved in local storage
- **Smooth scrolling** navigation between sections
- **Responsive design** that adapts to desktop, tablet, and mobile screen sizes
- **Scroll animations** on project cards using the Intersection Observer API

## Tech Stack

- HTML5
- CSS3 (CSS Grid, Flexbox, CSS Variables, Media Queries)
- Vanilla JavaScript (DOM manipulation, LocalStorage, IntersectionObserver)

## Project Structure

```
202277140-JoudAljabri-assignment1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/<JoudAlJabri>/202277140-JoudAljabri-assignment1.git
   ```
2. Open the project folder in your code editor (e.g., VS Code).
3. Open `index.html` directly in your browser, or use a live server extension:
   - In VS Code, install the **Live Server** extension and right-click `index.html` > "Open with Live Server".
4. To test responsiveness, resize the browser window or open DevTools (F12) and toggle the device toolbar.

## AI Usage Summary

AI tools were used during development to assist with specific parts of the project:

- **Claude Code**: Used to generate portions of the CSS styling (layout, responsive design, animations) and for guidance on implementing JavaScript functions (theme toggle, form handling, scroll animations).
- **Google Gemini**: Used for documentation preferences and organization, helping structure the README and technical documentation.

All AI-generated code was reviewed, understood, and modified to fit the project's needs. For full details, see [docs/ai-usage-report.md](docs/ai-usage-report.md).
