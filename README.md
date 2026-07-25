# X-AI — Intelligence Workspace

X-AI is an interactive product experience that shows how raw business data becomes structured intelligence, actionable insight, and AI-powered automation.

The single-page experience moves through four ideas:

1. Raw signals enter the workspace.
2. AI organizes and analyzes those signals.
3. Insights appear in a working product dashboard.
4. A live knowledge graph shows relationships forming between data, models, and decisions.

## Public repository

The project does not currently have a Git remote configured.

Add the public repository URL here after publishing:

`https://github.com/<username>/X-AI-intelligence-workspace`

## Technical approach

The application uses the Next.js App Router and a feature-first folder structure. Each major section owns its components, data, animation logic, and styles. Reusable layout, UI controls, icons, hooks, and utilities live in the shared layer.

Motion is used to explain the product rather than as decoration:

- The hero uses React Three Fiber and custom GLSL shaders to render a cursor-responsive raw-data particle field. The particles fade as the user leaves the hero.
- The insight flow uses GSAP ScrollTrigger to reveal and activate the ingest, analysis, and insight stages according to scroll position.
- Framer Motion handles interface choreography, section entrances, tab transitions, hover feedback, and automation state changes.
- The signature interaction uses Three.js through React Three Fiber to render a force-directed knowledge graph. Users can rotate the graph and highlight connected nodes.

The dashboard is a functional front-end preview with interactive navigation, tabs, automation toggles, charts, tables, and mock data. No backend is required.

## Technology stack

| Technology | Use in this project |
| --- | --- |
| Next.js 16 | App Router, page composition, optimized production build, and client/server component boundaries |
| React 19 | Component architecture and interactive UI state |
| TypeScript | Typed component properties, dashboard models, and graph data |
| Tailwind CSS 4 | Layout, spacing, typography, colors, and responsive styling |
| Framer Motion | UI entrances, tab transitions, hover states, and micro-interactions |
| GSAP + ScrollTrigger | Scroll-driven insight pipeline and stage activation |
| Three.js | 3D geometry, shaders, graph nodes, edges, and physics data |
| React Three Fiber | React-based Three.js scenes for the hero and knowledge graph |
| React Three Drei | Orbit controls and HTML labels inside the 3D graph |

## Project structure

```text
src/
├── app/                    # Next.js routes, layout, and global styles
├── config/                 # Site-wide configuration
├── features/
│   ├── access/             # Final access call to action
│   ├── dashboard/          # Product dashboard, panels, charts, and mock data
│   ├── hero/               # Particle canvas, shaders, and scroll behavior
│   ├── insight-flow/       # GSAP timeline and stage visuals
│   └── knowledge-graph/    # 3D graph, physics, nodes, and graph data
└── shared/
    ├── hooks/              # Reusable React hooks
    ├── layout/             # Site header and footer
    ├── lib/                # Small framework-independent utilities
    └── ui/                 # Reusable controls and icons
```

## Run locally

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

Clone the repository and enter the project:

```bash
git clone https://github.com/<username>/X-AI-intelligence-workspace.git
cd X-AI-intelligence-workspace
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev     # Start the local development server
npm run lint    # Run ESLint
npm run build   # Create and validate a production build
npm run start   # Run the completed production build
```

## Production check

Before publishing or deploying:

```bash
npm run lint
npm run build
```
