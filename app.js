const path = require('path');
const express = require('express');
const cors = require('cors');

const pizzaRoutes = require('./routes/pizzaRoutes');
const dealRoutes = require('./routes/dealRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');

const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

/* ==================== Global Middleware ==================== */

app.use(
    cors({
        origin:
            process.env.CLIENT_ORIGIN === '*'
                ? true
                : process.env.CLIENT_ORIGIN?.split(',') || '*'
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ==================== API Routes ==================== */

app.use('/api/pizzas', pizzaRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

/* ==================== Health Check ==================== */

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Bella Napoli Pizzeria API is running.'
    });
});

/* ==================== Frontend ==================== */

const publicDir = path.join(__dirname, 'public');

/* ============================================================
   FAVICON
============================================================ */

app.get("/favicon.ico", (req, res) => {
    res.status(204).end();
});

app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

/* ==================== 404 ==================== */

app.use(notFound);

/* ==================== Global Error Handler ==================== */

app.use(errorHandler);

module.exports = app;