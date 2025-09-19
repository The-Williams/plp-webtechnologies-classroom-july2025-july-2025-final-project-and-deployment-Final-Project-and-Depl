# GreenWave Carwash — Multipage Static Website

GreenWave Carwash is a **responsive, accessible, and multipage static website** built with **HTML5, CSS3, and JavaScript**.  
It is designed as a professional template for a **carwash business**, showcasing services, pricing, booking options and contact details with a modern, user-friendly layout.

## Project Purpose
The purpose of this project is to:
- Provide a **clean, production-ready website template** for a carwash business.
- Present **services, pricing, and booking** across multiple pages.
- Demonstrate semantic **HTML5**, responsive **CSS3**, and unobtrusive **JavaScript**.
- Follow best practices for code organization and deployment.

## Project Structure

GreenWave-Carwash/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│ └── styles.css
├── js/
│ └── main.js
└── README.md


## Features
- **Responsive design** (mobile-first approach).
- **Consistent header & footer** across all pages.
- **Accessible** HTML (semantic tags, ARIA attributes where helpful).
- **Interactive elements**:
  - Mobile navigation toggle
  - Contact/booking form with client-side validation
- **SEO-friendly** metadata and Open Graph tags for social sharing.

## How to run locally
1. Clone or download this repository (or copy files into a folder).
2. Open `index.html` in your browser to preview.

To use a local dev server (recommended for relative path consistency):
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
Deployment (quick instructions)
GitHub Pages
Initialize git and push to GitHub:

bash
Copy code
git init
git add .
git commit -m "Initial GreenWave site"
git branch -M main
git remote add origin https://github.com/The-Williams/greenwave-carwash.git
git push -u origin main
In GitHub repo Settings → Pages, set Source to main branch.

Visit https://The-Williams.github.io/greenwave-carwash

👨‍💻 Author

Built with care by Awino Edger Williams
Contact: edgeriowilliams@gmail.com