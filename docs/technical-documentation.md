# Technical Documentation

## Overview

This is a single-page personal portfolio website built with HTML, CSS, and JavaScript. It features a responsive layout, dark/light theme toggle, smooth scrolling navigation, time-based greetings, and a contact form with client-side validation.

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure with semantic sections (nav, about, projects, contact, footer) |
| `css/styles.css` | All styling including layout, theme variables, animations, and responsive breakpoints |
| `js/script.js` | Interactive features: greeting, theme toggle, smooth scroll, form handling, scroll animations |
| `assets/images/` | Project screenshots and decorative SVG/PNG elements |

## HTML Structure

The page is built using semantic HTML5 elements:

- `<nav>` - Fixed navigation bar with logo and theme toggle button
- `<section id="about">` - Hero/About Me section with greeting, tagline, intro text, and CTA buttons
- `<section id="projects">` - Project showcase with card-based grid layout
- `<section id="contact">` - Contact form with Name, Email, and Message fields
- `<footer>` - Simple footer with copyright

## CSS Architecture

### Theme System
The site uses CSS custom properties (variables) defined in `:root` for the dark theme (default) and overridden in `.light-theme` for the light theme. Key variables:
- `--bg-dark`, `--bg-card` - Background colors
- `--text-primary`, `--text-secondary` - Text colors
- `--accent-pink`, `--accent-green`, `--accent-purple` - Accent colors

### Layout
- **Flexbox**: Used for the navbar layout, CTA button row, and project tags
- **CSS Grid**: Used for the projects grid with `auto-fit` and `minmax()` for automatic responsive columns
- **Container**: A `.container` class centers content with `max-width: 1200px`

### Responsive Breakpoints
- **Desktop**: Default styles, full-width grid
- **Tablet** (`max-width: 768px`): Single-column project grid, smaller headings, stacked buttons
- **Mobile** (`max-width: 480px`): Further reduced font sizes, smaller decorative elements

### Animations
- `@keyframes float` - Floating animation for decorative elements
- CSS transitions on buttons, cards, and theme toggle for hover effects
- Scroll-triggered fade-in via JavaScript (IntersectionObserver)

## JavaScript Features

### 1. Time-Based Greeting (`displayGreeting`)
Reads the current hour via `new Date().getHours()` and displays "Good Morning", "Good Afternoon", or "Good Evening" in the hero section.

### 2. Dark/Light Theme Toggle
- Toggles `.light-theme` class on `<body>`
- Persists the user's preference using `localStorage.setItem('theme', ...)`
- On page load, checks `localStorage.getItem('theme')` and applies saved preference

### 3. Smooth Scrolling (`scrollToSection`)
Uses `Element.scrollIntoView({ behavior: 'smooth' })` to navigate to sections when CTA buttons are clicked.

### 4. Contact Form Handling
- Listens for the `submit` event on the contact form
- Prevents default form submission with `event.preventDefault()`
- Displays a personalized success message using template literals
- Resets the form and auto-hides the message after 5 seconds

### 5. Scroll Animations (IntersectionObserver)
- Project cards start with `opacity: 0` and `translateY(50px)`
- An `IntersectionObserver` watches each card and transitions them to full opacity when 10% of the card enters the viewport

## Browser Compatibility

The site uses standard web APIs supported by all modern browsers:
- CSS Grid and Flexbox
- CSS Custom Properties
- `localStorage`
- `IntersectionObserver`
- `scrollIntoView` with smooth behavior
