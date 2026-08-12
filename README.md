# Pizza-Roma — Backend API

Express + MongoDB (Mongoose) backend for the Pizza-Roma website.
It exposes a REST API for pizzas, weekly deals, and orders, and can also serve
the static frontend (`index.html` / `style.css` / `script.js`) from the `public` folder.

## Project structure

```
├── app.js                    # Express app: middleware, routes, static files, error handling
├── server.js                 # Entry point: loads environment variables, connects DB, starts server
├── config/
│   └── db.js                 # MongoDB connection
├── models/
│   ├── Pizza.js              # Pizza schema
│   ├── Deal.js               # Weekly deal schema
│   ├── Order.js              # Order schema
│   └── User.js               # User schema
├── controllers/
│   ├── pizzaController.js
│   ├── dealController.js
│   ├── orderController.js
│   └── authController.js
├── routes/
│   ├── pizzaRoutes.js         # /api/pizzas
│   ├── dealRoutes.js          # /api/deals
│   ├── orderRoutes.js         # /api/orders
│   └── authRoutes.js          # /api/auth
├── middleware/
│   ├── authMiddleware.js      # Authentication / JWT protection
│   ├── notFound.js            # 404 handler
│   └── errorHandler.js        # Global error handler
├── seed/
│   └── seed.js                # Populates MongoDB with menu & deals
├── services/
│   ├── auth.service.js
│   ├── user.service.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env.example
└── package.json
```

## Setup

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Copy the environment file and fill in your MongoDB connection string:
   ```bash
   cp .env.example .env
   ```

3. Seed the database with the current pizzas and deals (optional but recommended):
   ```bash
   npm run seed
   ```

4. Start the server:
   ```bash
   npm run dev     # with nodemon, auto-restarts on changes
   # or
   npm start
   ```

The API will be available at `http://localhost:5000` (or the `PORT` you set),
and the website itself will be served at `http://localhost:5000/` if the
files are present in `public/`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/auth/register` | Register a new customer |
| POST | `/api/auth/login` | Authenticate an existing customer |
| GET | `/api/pizzas` | Get all pizzas with optional `?category=` filter |
| GET | `/api/pizzas/:slug` | Get a single pizza by slug |
| POST | `/api/pizzas` | Create a new pizza |
| PUT | `/api/pizzas/:slug` | Update an existing pizza |
| DELETE | `/api/pizzas/:slug` | Delete a pizza |
| GET | `/api/deals` | Get all active deals |
| POST | `/api/deals` | Create a new deal |
| PUT | `/api/deals/:slug` | Update an existing deal |
| DELETE | `/api/deals/:slug` | Delete a deal |
| POST | `/api/orders` | Create a new customer order |
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:orderNumber` | Get a specific order |
| PATCH | `/api/orders/:orderNumber/status` | Update an order status |

## Connecting the existing frontend

`script.js` already calls `POST /api/orders` on checkout, which this backend
implements directly. If you'd rather load the menu and deals from the database
instead of the hardcoded arrays in `script.js`, replace `pizzaDatabase` and
`dealsDatabase` with `fetch('/api/pizzas')` and `fetch('/api/deals')` calls.
