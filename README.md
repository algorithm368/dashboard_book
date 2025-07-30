Dashboard Book
A modern dashboard web application for tracking and visualizing book reading progress, built with React, TypeScript, and Vite.

Features
📊 Interactive charts for pages read, reading by genre, and more
📚 Track currently reading books and completion stats
🧩 Modular component-based architecture
⚡ Fast development with Vite and HMR
🎨 Customizable layouts and responsive design
Tech Stack
React
TypeScript
Vite
ESLint (with recommended configs)
Project Structure
dashboard_book/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and data (e.g., bookData.json)
│   ├── components/        # Shared UI components (e.g., Navbar)
│   ├── layouts/           # Layout components
│   ├── pages/             # Page-level components (Dashboard, etc.)
│   ├── utils/             # Utility functions
│   ├── AppRoutes.tsx      # App routing
│   └── main.tsx           # App entry point
├── package.json
├── tsconfig*.json
├── vite.config.ts
└── eslint.config.js
 
 

Getting Started

Install dependencies:
```sh
npm install
```

Run the development server:
```sh
npm run dev
```

Open your browser:
Visit http://localhost:5173 (default Vite port).

Linting
 

or

Customization
Update bookData.json to change the book data.
Modify or add components in components for new dashboard features.
License
MIT