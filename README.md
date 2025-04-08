# Shopping Website

A responsive e-commerce website built with React and the Fake Store API. This project demonstrates front-end development skills including authentication, product listing, filtering, cart management, and responsive design.

## Features

- **Authentication**: Login with username and password using JWT tokens
- **Product Listing**: View all products with filtering by category
- **Search Functionality**: Search products by title
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add products to cart, update quantities, remove items
- **Responsive Design**: Mobile-first approach for all screen sizes

## Tech Stack

- React.js (Vite)
- React Router v6
- React Hooks
- Context API for state management
- Axios for API requests
- CSS for styling (mobile-first approach)

## Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React Context for state management
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
└── package.json          # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

### Login Credentials

Use the following credentials to log in:

- Username: `mor_2314`
- Password: `83r5^_`

## API Reference

This project uses the [Fake Store API](https://fakestoreapi.com/docs) for product data and authentication.

## Deployment

To build the project for production:

```
npm run build
```

The build files will be generated in the `dist` directory, which can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.