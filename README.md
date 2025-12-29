# Inventory System

A full-stack inventory management system built with React (Vite) frontend and Node.js/Express backend with Prisma ORM and PostgreSQL database.

## Project Structure

```
inventory-system/
├── backend/                 # Backend API server
│   ├── config/             # Configuration files
│   │   └── prisma.js       # Prisma client configuration
│   ├── controllers/        # Route controllers
│   │   └── product.controller.js
│   ├── routes/             # API routes
│   │   └── product.routes.js
│   ├── prisma/             # Prisma schema and migrations
│   │   └── schema.prisma   # Database schema definition
│   ├── generated/          # Generated Prisma client files
│   ├── server.js           # Express server entry point
│   └── package.json        # Backend dependencies
│
└── frontend/               # React frontend application
    ├── src/
    │   ├── components/     # Reusable React components
    │   │   ├── AdminDashboard.jsx
    │   │   └── Sidebar.jsx
    │   ├── pages/          # Page components
    │   │   ├── Dashboard.jsx
    │   │   └── Products.jsx
    │   ├── App.jsx         # Main App component
    │   └── main.jsx        # Application entry point
    ├── public/             # Static assets
    └── package.json        # Frontend dependencies
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** 
- **PostgreSQL** database
- **Git**

## Installation

### Backend Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db?schema=public"
   ```
   Replace `username`, `password`, and `inventory_db` with your PostgreSQL credentials.

4. Set up the database:
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3000`

### Frontend Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port)

## Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend server** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Folder Descriptions

### Backend Folders

- **`config/`**: Contains configuration files, including Prisma client setup
- **`controllers/`**: Business logic handlers for API endpoints
- **`routes/`**: Express route definitions
- **`prisma/`**: Database schema and migration files
- **`generated/`**: Auto-generated Prisma client files (do not edit manually)

### Frontend Folders

- **`src/components/`**: Reusable React components (AdminDashboard, Sidebar)
- **`src/pages/`**: Main page components (Dashboard, Products)
- **`src/assets/`**: Static assets like images
- **`public/`**: Public static files served directly

## Technologies Used

### Backend
- **Express.js**: Web framework
- **Prisma**: ORM for database management
- **PostgreSQL**: Relational database
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

### Frontend
- **React**: UI library
- **Vite**: Build tool and dev server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework

## API Endpoints

- `GET /` - Welcome message
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Development

- Backend uses **nodemon** for auto-restart during development
- Frontend uses **Vite** with Hot Module Replacement (HMR)
- Prisma Client is auto-generated from the schema file

## License

ISC

