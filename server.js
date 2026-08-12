require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

async function start() {
    await connectDB();

    const server = app.listen(PORT, () => {
        console.log(`Pizza Roma API running on http://localhost:${PORT}`);
    });

    // Graceful shutdown
    process.on('unhandledRejection', (err) => {
        console.error('Unhandled promise rejection:', err.message);
        server.close(() => process.exit(1));
    });
}

start();