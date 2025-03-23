# Personal Portfolio Website

A modern, responsive portfolio website built with React, Material-UI, and Framer Motion animations. This portfolio showcases professional experience, technical skills, education, and projects in an interactive and visually appealing format.

![Portfolio Website](.github/screenshot.png)

## 🚀 Features

- **Interactive UI**: Smooth animations and transitions powered by Framer Motion
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between theme preferences
- **Section Navigation**: Easy navigation between different portfolio sections
- **Experience Timeline**: Interactive timeline showcasing professional experience
- **Skill Visualizations**: Visual representations of technical and soft skills
- **Dynamic Background Effects**: Animated background elements that respond to user interaction
- **Optimized Performance**: Fast loading times and smooth scrolling experience

## 🛠️ Technologies

- **Frontend Framework**: React 19
- **UI Library**: Material-UI v6
- **Animations**: Framer Motion
- **Icons**: Material Icons, React Icons
- **Routing**: React Router
- **Typography**: Roboto Font
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📋 Project Structure

```
src/
├── components/           # UI components
│   ├── sections/         # Main content sections
│   │   ├── ProfileSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── TechnicalSkillsSection.jsx
│   │   ├── SoftSkillsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── PassionsSection.jsx
│   ├── BackgroundEffect.jsx
│   ├── CustomAppBar.jsx
│   ├── Dashboard.jsx
│   ├── Section.jsx
│   ├── SectionNav.jsx
│   ├── SectionsMenu.jsx
│   └── ThemeToggle.jsx
├── images/               # Image assets
├── docs/                 # Documentation and downloadable files
├── App.jsx               # Main application component
├── App.css               # Global styles
├── main.jsx              # Entry point
└── index.css             # Base styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/r3ub3ng/MyWebsite.git
   cd MyWebsite
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173/MyWebsite/](http://localhost:5173/MyWebsite/) in your browser

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (< 600px)
- Tablets (600px - 960px)
- Desktops (> 960px)

## 🌙 Theme Customization

The application includes a customizable theme with light and dark modes. The theme configuration can be found in `App.jsx`.

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run `npm run deploy` to build and deploy the site

## 🤖 AI-Assisted Development

This portfolio project was developed with the assistance of AI through Cursor IDE:

### AI Integration

- **Code Generation**: Used AI to generate component templates and complex animations
- **Code Refactoring**: Leveraged AI suggestions for optimizing React components and improving performance
- **Debugging**: Utilized AI to identify and fix issues in the codebase
- **Documentation**: Generated comprehensive documentation with AI assistance

### Development Approach

The development process combined traditional coding practices with AI collaboration:

1. **Initial Design**: Hand-crafted wireframes and component structure
2. **AI Collaboration**: Used Cursor IDE's AI features to accelerate implementation
3. **Human Refinement**: Fine-tuned AI-generated code for better quality and performance
4. **Iterative Improvement**: Alternated between AI suggestions and manual coding to achieve the best results

### Benefits

- **Increased Productivity**: Reduced development time for boilerplate code and common patterns
- **Learning Opportunity**: Discovered new approaches and techniques through AI suggestions
- **Enhanced Creativity**: Focused more on design decisions while AI handled implementation details
- **Better Code Quality**: Combined AI efficiency with human oversight for higher quality code

This experimental approach provided valuable insights into how AI can complement traditional web development workflows.

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

---

Built with ❤️ using React and Material-UI
