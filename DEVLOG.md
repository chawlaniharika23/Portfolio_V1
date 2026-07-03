# Portfolio V1 - Development Log

## Day 1

### Objective
Set up the development environment and initialize the project.

### Completed
- Installed Node.js (LTS)
- Created React project using Vite
- Installed and configured Tailwind CSS
- Organized the project structure
- Created the first React page (`Desktop.jsx`)
- Connected `App.jsx` to `Desktop.jsx`
- Chose the initial color palette
- Fixed a React plugin configuration issue

### Learned
- Node.js
- npm
- Vite
- Tailwind CSS
- React Components
- Project Architecture
- Basic debugging

### Challenges
- Understanding how React, Vite and Tailwind work together.
- Debugging the React plugin import mismatch.

### Next Goal
Build the first reusable Folder component and create the desktop layout.



## Day 2

### Objective
Learn React component reusability and begin designing the portfolio experience.

### Completed
- Created a reusable `Folder` component
- Passed data using React props
- Rendered multiple folder instances from a single component
- Imported image assets into React components
- Added hover animations using Tailwind CSS
- Customized the desktop background color
- Fixed component rendering and layout issues
- Began designing the portfolio in Figma
- Created the Earth intro storyboard
- Designed the complete intro flow from Earth to Desktop

### Learned
- React Props
- Component Reusability
- JSX Expressions
- Importing Assets
- Relative Paths
- Tailwind Flexbox
- Hover Animations
- UI Storyboarding
- Design Workflow using Figma


## Day 3

### Objective
Transform the portfolio from a static interface into an interactive application by building the complete intro sequence, desktop transition, and animated desktop layout.

### Completed
- Designed the macOS Spotlight intro screen
- Created the Portfolio title component
- Built a reusable Folder component
- Added support for multiple folder variants (pink and blue)
- Added configurable folder sizes using props
- Implemented React state with `useState`
- Learned and used `useEffect` for timed actions
- Created the Spotlight backspace animation
- Created the Spotlight typing animation for "Portfolio"
- Implemented stage-based UI rendering
- Split the project into `Intro.jsx` and `Desktop.jsx`
- Used `App.jsx` to manage screen transitions
- Added click interaction to transition from Intro to Desktop
- Built the Desktop page layout
- Created the reusable `DesktopFolders` component
- Installed and integrated Framer Motion
- Animated desktop folders spreading outward from the center folder
- Created the reusable FinderWindow component
- Built the initial About Me window structure

### Learned
- React State (`useState`)
- React Effects (`useEffect`)
- Timers (`setTimeout`, `setInterval`)
- Conditional Rendering
- Passing Functions as Props
- Component Reusability
- Rendering Lists using `map()`
- String Manipulation with `slice()`
- Event Handling
- Project Architecture (Pages vs Components)
- Basic Framer Motion Animations
- State-driven UI Design

### Challenges
- Synchronizing multiple animation stages
- Preventing component overlap during transitions
- Managing animation timing
- Refactoring the project into separate pages
- Creating reusable components instead of hardcoded UI
- Positioning animated folders relative to the center folder
- Understanding the difference between state, props, and component responsibilities

### Next Goal
- Implement macOS-style folder opening animation
- Open Finder windows from desktop folders
- Add double-click interactions
- Build the About Me window content
- Create reusable window components for Resume, Projects, Skills, Contact, and Certifications
- Add draggable Finder windows
- Polish the menu bar and dock to match macOS

### Challenges
- Understanding how props work and why reusable components are better than duplicating code.
- Learning the Figma workflow for planning the user experience before development.

### Next Goal
Design the desktop interface in Figma, including folder placement, window layouts, typography, and user interactions before implementing the design in React.
