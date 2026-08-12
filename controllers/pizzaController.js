const Pizza = require('../models/Pizza');

// GET /api/pizzas
// Optional query param: ?category=classic|specialty|veggie|spicy
async function getPizzas(req, res) {
    try {
        const { category } = req.query;
        const filter = { isAvailable: true };
        if (category && category !== 'all') {
            filter.category = category.toLowerCase();
        }

        const pizzas = await Pizza.find(filter).sort({ createdAt: 1 });
        res.json({ success: true, count: pizzas.length, data: pizzas });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to fetch pizzas.' });
    }
}

// GET /api/pizzas/:slug
async function getPizzaBySlug(req, res) {
    try {
        const pizza = await Pizza.findOne({ slug: req.params.slug });
        if (!pizza) {
            return res.status(404).json({ success: false, error: 'Pizza not found.' });
        }
        res.json({ success: true, data: pizza });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to fetch pizza.' });
    }
}

// POST /api/pizzas
async function createPizza(req, res) {
    try {
        const pizza = await Pizza.create(req.body);
        res.status(201).json({ success: true, data: pizza });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

// PUT /api/pizzas/:slug
async function updatePizza(req, res) {
    try {
        const pizza = await Pizza.findOneAndUpdate({ slug: req.params.slug }, req.body, {
            new: true,
            runValidators: true
        });
        if (!pizza) {
            return res.status(404).json({ success: false, error: 'Pizza not found.' });
        }
        res.json({ success: true, data: pizza });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

// DELETE /api/pizzas/:slug
async function deletePizza(req, res) {
    try {
        const pizza = await Pizza.findOneAndDelete({ slug: req.params.slug });
        if (!pizza) {
            return res.status(404).json({ success: false, error: 'Pizza not found.' });
        }
        res.json({ success: true, data: {} });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to delete pizza.' });
    }
}

module.exports = { getPizzas, getPizzaBySlug, createPizza, updatePizza, deletePizza };
