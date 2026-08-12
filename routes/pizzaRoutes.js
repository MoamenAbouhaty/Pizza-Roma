const express = require('express');
const router = express.Router();
const {
    getPizzas,
    getPizzaBySlug,
    createPizza,
    updatePizza,
    deletePizza
} = require('../controllers/pizzaController');

// GET    /api/pizzas             -> list all pizzas (supports ?category=)
// POST   /api/pizzas             -> add a new pizza
router.route('/').get(getPizzas).post(createPizza);

// GET    /api/pizzas/:slug       -> get a single pizza
// PUT    /api/pizzas/:slug       -> update a pizza
// DELETE /api/pizzas/:slug       -> remove a pizza
router.route('/:slug').get(getPizzaBySlug).put(updatePizza).delete(deletePizza);

module.exports = router;
