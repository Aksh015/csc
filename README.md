# CSC (Cyber Security Club)

CSC is a modern, responsive website for the Cyber Security Club built with React and Vite. The site showcases our mission to protect tomorrow's digital world through education, innovation, and community collaboration.

## Features

- **Modern Design**: Clean, professional interface with cybersecurity-themed aesthetics
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Engaging animations and hover effects
- **Team Showcase**: Meet our talented cybersecurity professionals
- **Event Management**: Information about workshops, CTF competitions, and training sessions
- **Contact Integration**: Easy ways to get in touch and join our community

## Tech Stack

- **React**: Frontend framework for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/csc-cyber-security-club.git
cd csc-cyber-security-club
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── About.jsx       # About section component
│   ├── Contact.jsx     # Contact form and information
│   ├── Events.jsx      # Events and activities showcase
│   ├── Footer.jsx      # Site footer
│   ├── Navbar.jsx      # Navigation header
│   └── Team.jsx        # Team members display
├── assets/             # Images and static assets
│   └── csc-logo.png    # Club logo
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Updating Content

- **Club Information**: Edit component files in `src/components/`
- **Team Members**: Update team data in `src/components/Team.jsx`
- **Events**: Modify events information in `src/components/Events.jsx`
- **Contact Details**: Update contact information in `src/components/Contact.jsx`

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors and themes in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles within each component file

### Adding New Features

1. Create new components in the `src/components/` directory
2. Import and use them in `App.jsx`
3. Update navigation links in `Navbar.jsx` if needed

## Contributing

We welcome contributions from the cybersecurity community! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Contact

For questions about the website or to join CSC (Cyber Security Club):

- **Email**: contact@cybersecurityclub.com
- **Twitter**: [@CSC_CyberSecurity](https://twitter.com/csc_cybersecurity)
- **Website**: [Visit our site](https://cybersecurityclub.com)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**CSC (Cyber Security Club)** - Protecting Tomorrow's Digital World
