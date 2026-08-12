const notFound = (req, res, next) => {

    if (req.path === '/.well-known/appspecific/com.chrome.devtools.json') {
        return res.status(404).end();
    }

    if (req.originalUrl.startsWith('/api/')) {
        const error = new Error(`Route not found: ${req.originalUrl}`);
        error.statusCode = 404;
        return next(error);
    }

    const error = new Error(`Route not found: ${req.originalUrl}`);
    error.statusCode = 404;

    next(error);
};

module.exports = notFound;