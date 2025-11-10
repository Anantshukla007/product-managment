# 🛍️ Product Management Web Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing products with categories and subcategories. Features include advanced search with debounce, filtering, pagination, image slider, and a responsive UI built with Tailwind CSS.
---


## ✨ Features

### Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ Complete CRUD operations for Categories, Subcategories, and Products
- ✅ Advanced product search across multiple fields (name, description, category, subcategory)
- ✅ Backend-powered pagination with metadata (totalPages, totalCount, currentPage)
- ✅ Category and subcategory filtering
- ✅ Data population (category and subcategory details in product responses)
- ✅ Input validation and error handling
- ✅ CORS enabled for frontend integration

### Frontend Features
- ✅ Modern React UI with Vite build tool
- ✅ Responsive design with Tailwind CSS (mobile, tablet, desktop)
- ✅ Debounced global search (500ms delay) - optimized API calls
- ✅ Dynamic category and subcategory filters
- ✅ Image slider for multiple product images with navigation
- ✅ Skeleton loaders for better UX during data fetching
- ✅ Product details modal with full information
- ✅ Pagination with page numbers and Previous/Next buttons
- ✅ Empty state handling ("No Products Found")
- ✅ Real-time filter updates
- ✅ Clean and intuitive user interface

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variables management

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **React Hooks** - useState, useEffect for state management

---

## 📁 Project Structure

```
product-management-app/
│
├── backend/                        # Backend server
│   ├── controllers/
│   │   ├── categoryController.js
│   │   ├── subCategoryController.js
│   │   └── productController.js
│   ├── models/
│   │   ├── Category.js
│   │   ├── SubCategory.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── categoryRoutes.js
│   │   ├── subCategoryRoutes.js
│   │   └── productRoutes.js
│   ├── server.js
│   ├── seed.js                     # Optional: Sample data seeder
│   ├── package.json
│   ├── .env                        # ⚠️ YOU NEED TO CREATE THIS
│   └── .env.example
│
└── frontend/                       # Frontend React app
    ├── src/
    │   ├── components/
    │   │   ├── Filters.jsx
    │   │   ├── ImageSlider.jsx
    │   │   ├── Pagination.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductModal.jsx
    │   │   ├── SearchBar.jsx
    │   │   └── SkeletonLoader.jsx
    │   ├── hooks/
    │   │   └── useDebounce.js
    │   ├── pages/
    │   │   └── ProductListPage.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── public/
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    ├── .env                        # ⚠️ YOU NEED TO CREATE THIS
    └── .env.example
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
  - Option 1: Install MongoDB locally
  - Option 2: Use MongoDB Atlas (cloud) - [Sign up](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd product-management-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

**Required Dependencies:**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install
```

**Required Dependencies:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "vite": "^5.0.8"
  }
}
```

---

## 🔐 Environment Variables Setup (IMPORTANT!)

### ⚠️ Backend Environment Variables

**You MUST create a `.env` file in the `backend/` directory with your own configuration.**

Create `backend/.env`:

```env
# MongoDB Connection String
# ⚠️ REPLACE WITH YOUR OWN MONGODB URI
MONGODB_URI=mongodb://localhost:27017/product-management

# OR if using MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/product-management?retryWrites=true&w=majority

# Server Port
PORT=5000

# Environment Mode
NODE_ENV=development
```

**📝 Important Notes:**
- **Local MongoDB**: If running MongoDB locally, use `mongodb://localhost:27017/product-management`
- **MongoDB Atlas**: 
  1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  2. Create a cluster
  3. Get your connection string
  4. Replace `<username>` and `<password>` with your credentials
  5. Whitelist your IP address in Atlas dashboard
- **Port**: You can change `5000` to any available port
- **Database Name**: `product-management` is the database name (you can change it)

### ⚠️ Frontend Environment Variables

**You MUST create a `.env` file in the `frontend/` directory.**

Create `frontend/.env`:

```env
# Backend API Base URL
# ⚠️ MUST MATCH YOUR BACKEND SERVER URL AND PORT
VITE_API_BASE_URL=http://localhost:5000/api
```

**📝 Important Notes:**
- If you changed backend PORT to `5001`, update this to `http://localhost:5001/api`
- For production deployment, replace with your production backend URL
- The `VITE_` prefix is required for Vite to expose the variable

---

## ▶️ Running the Application

### Step 1: Start MongoDB

**If using local MongoDB:**

```bash
# Linux
sudo systemctl start mongod

# macOS (if installed via Homebrew)
brew services start mongodb-community

# Windows
# MongoDB runs as a service automatically after installation
# Or start manually from Services panel
```

**If using MongoDB Atlas:**
- No need to start anything locally
- Just ensure your connection string in `.env` is correct

### Step 2: Start Backend Server

```bash
# From backend directory
cd backend

# Start in development mode (with auto-reload)
npm run dev

# OR start in production mode
npm start
```

**Expected Output:**
```
✅ MongoDB Connected Successfully
🚀 Server is running on port 5000
```

### Step 3: Seed Database (Optional but Recommended)

**Populate the database with sample data:**

```bash
# From backend directory
npm run seed
```

This will create:
- 4 Categories (Electronics, Clothing, Home & Kitchen, Books)
- 6 Subcategories
- 8 Sample Products with images

### Step 4: Start Frontend Development Server

**Open a new terminal:**

```bash
# From frontend directory
cd frontend

# Start Vite dev server
npm run dev
```

**Expected Output:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

---
## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- MongoDB for the database
- React team for the amazing library
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing-fast build tool

---

## 📞 Support

For support, please open an issue in the GitHub repository or contact the author.

---

**Happy Coding! 🎉**