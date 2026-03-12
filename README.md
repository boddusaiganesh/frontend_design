# Institute of Digital Risk (IDR) Homepage

This repository contains the brand assets and a responsive, single-page landing site for the **Institute of Digital Risk (IDR)**, an industry-led training and deployment institute focused on digital and AI risk in regulated environments.

## Overview
The website is built entirely without external UI frameworks (like Bootstrap or Tailwind) to ensure a lightweight, custom, and highly performant experience using:
- **Semantic HTML5**
- **Vanilla CSS3** (Custom Properties, Grid, Flexbox, Animations)
- **Vanilla JavaScript** (Smooth scrolling, Sticky navigation, Mobile toggles)

## Features
- **Premium Design Aesthetics**: Deep contrast dark mode (`#0A0A0A`) with vibrant Cyber Orange accents (`#FF5A00`).
- **Responsive Layout**: Mobile-first media queries targeting standard tablet and desktop breakpoints.
- **Micro-Animations**: Custom scroll-based glassmorphism headers, floating 3D logo visuals, and sophisticated hover states.
- **Brand Assets**: Custom SVG logo variants emphasizing structure, risk, and resilience.

## File Structure
- `index.html` - The main entry point containing the semantic page structure.
- `css/style.css` - The global design system and styling rules.
- `js/script.js` - Client-side logic for the navigation behaviors.
- `assets/` - Contains the SVG variants (`logo-icon.svg` & `logo-full.svg`) of the IDR brand.
- `design-note.txt` - Brand guidelines and design methodology explanation.

## Getting Started
To view the site locally, you do not need any build tools. Simply clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/boddusaiganesh/frontend_design.git
cd frontend_design
# Double click index.html or run a local server
```

## Contributing
When making styling updates, please refer to the CSS variable declarations (`:root`) in `style.css` to maintain brand consistency for colors and typography (Google Fonts: Outfit and Inter).
