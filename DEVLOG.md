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

## Day 4

### Objective
Redesign the portfolio experience by replacing the desktop folder layout with a realistic stacked paper folder interface inspired by physical file folders while keeping the existing intro animation unchanged.

### Completed
- Finalized the new portfolio interaction concept
- Decided to retain the Spotlight intro, Portfolio title, and clickable Portfolio folder
- Removed the desktop folder layout from the design direction
- Designed the stacked folder interface in Figma
- Created four separate folder layers:
  - Skills & Certifications
  - Projects
  - Resume
  - About Me
- Exported each folder individually as transparent PNG assets
- Organized folder assets inside `src/assets/folders`
- Created the reusable `StackFolder` component
- Created the new `FolderStack` page
- Learned how to layer independent PNGs instead of using a single combined image
- Positioned folder layers using absolute positioning and z-index
- Adjusted folder scaling and overflow to closely match the Figma design
- Fine-tuned folder spacing and alignment to achieve the desired stacked appearance
- Prepared the project architecture for future hover and fullscreen animations

### Learned
- Layer-based UI design
- Managing image assets in React
- Absolute positioning with Tailwind CSS
- Using `z-index` to build overlapping interfaces
- Designing reusable visual components
- Structuring pages for future animations
- Matching Figma layouts inside React
- When to use multiple layered assets instead of one large image

### Challenges
- Deciding whether to continue with the desktop folder concept or redesign the interface
- Learning the best way to recreate a layered paper folder effect
- Correctly positioning oversized folder images without losing important details
- Understanding how image scaling affects cropping
- Matching the proportions of the Figma design inside the browser
- Organizing individual folder assets for easier future animations

### Next Goal
- Add hover animations so each folder rises slightly when hovered
- Animate folder shadows for a realistic paper effect
- Expand a selected folder to fullscreen when clicked
- Build separate pages for:
  - Skills & Certifications
  - Projects
  - Resume
  - About Me
- Add smooth transitions between folders
- Populate each folder with actual portfolio content
- Polish responsiveness across different screen sizes
```
## Day 5

### Objective
Polish the folder stack experience before building the portfolio pages by improving navigation, component architecture, typography, and user interaction.

### Completed
- Created separate pages for:
  - About
  - Projects
  - Resume
  - Skills
- Added folder-based navigation using React state
- Implemented folder click interactions
- Added navigation between the Folder Stack and individual pages
- Added a reusable Back button mechanism using `onBack`
- Refactored `FolderLayer` into a cleaner reusable component
- Added support for dynamic folder titles using props
- Learned how to position titles independently for each folder
- Experimented with different typography styles for folder labels
- Installed and tested multiple font options for the folder interface
- Improved folder positioning and spacing for better usability
- Refined hover interactions and overall folder layout

### Learned
- Passing callback functions (`onBack`) between components
- Conditional page rendering with React state
- Building reusable UI using props
- Component refactoring and code cleanup
- Managing navigation without React Router
- Typography selection for UI design
- Using custom fonts with `@fontsource`
- Structuring a scalable page architecture

### Challenges
- Deciding between page navigation and folder expansion animations
- Matching the typography to the portfolio aesthetic
- Fine-tuning folder spacing and hover interactions
- Understanding when to simplify component props
- Balancing visual polish with future scalability

### Next Goal
- Finalize folder typography and visual styling
- Add smooth transitions between the Folder Stack and pages
- Improve hover animations and shadows
- Add responsive scaling for different screen sizes
- Begin designing the About page layout after the folder stack feels polished

