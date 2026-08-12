/**
 * Seeds the database with the same pizzas and deals used on the frontend (script.js).
 * Run with: npm run seed
 */
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Pizza = require('../models/Pizza');
const Deal = require('../models/Deal');

const pizzas = [
    { slug: 'p1', name: 'Classic Margherita', category: 'classic', price: 12.99, description: 'San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80', tag: 'Classic' },
    { slug: 'p2', name: 'Pepperoni Supreme', category: 'spicy', price: 15.99, description: 'Double crispy pepperoni, spicy marinara, mozzarella, and chili flakes.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80', tag: 'Bestseller' },
    { slug: 'p3', name: 'Quattro Formaggi', category: 'specialty', price: 16.50, description: 'Rich blend of mozzarella, gorgonzola, parmesan, and fresh ricotta.', image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80', tag: 'Specialty' },
    { slug: 'p4', name: 'Garden Veggie Delight', category: 'veggie', price: 14.25, description: 'Bell peppers, red onions, black olives, mushrooms, cherry tomatoes, pesto drizzle.', image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=600&q=80', tag: 'Vegetarian' },
    { slug: 'p5', name: 'BBQ Smoked Chicken', category: 'specialty', price: 17.00, description: 'Grilled chicken, smoky BBQ sauce, red onions, cilantro, and smoked gouda.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80', tag: 'Chef Special' },
    { slug: 'p6', name: 'Diablo Spicy Feast', category: 'spicy', price: 16.99, description: 'Hot salami, jalapeños, spicy sausage, chili oil, and melted mozzarella.', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80', tag: 'Spicy' },
    { slug: 'p7', name: 'Prosciutto e Funghi', category: 'specialty', price: 18.50, description: 'Thin-sliced prosciutto, wild mushrooms, mozzarella, and shaved parmesan.', image: 'https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=600&q=80', tag: 'Premium' },
    { slug: 'p8', name: 'Four Seasons (Quattro Stagioni)', category: 'classic', price: 17.75, description: 'Artichokes, mushrooms, ham, and olives, each in its own quarter.', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80', tag: 'Traditional' },
    { slug: 'p9', name: 'Mediterranean Veggie', category: 'veggie', price: 15.50, description: 'Sun-dried tomatoes, spinach, feta, kalamata olives, and red onion.', image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=600&q=80', tag: 'Vegetarian' },
    { slug: 'p10', name: 'Hawaiian Sunset', category: 'classic', price: 14.75, description: 'Smoked ham, sweet pineapple, mozzarella, and a touch of honey glaze.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80', tag: 'Fan Favorite' },
    { slug: 'p11', name: 'Ghost Pepper Inferno', category: 'spicy', price: 18.99, description: 'Ghost pepper sauce, spicy chorizo, red chilies, and pepper jack cheese.', image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80', tag: 'Extra Hot' },
    { slug: 'p12', name: 'Truffle Mushroom', category: 'specialty', price: 19.99, description: 'Wild mushroom medley, truffle oil, mozzarella, and fresh thyme.', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&q=80', tag: 'Gourmet' }
];

const deals = [
    { slug: 'deal-1', name: 'Family Feast Combo', price: 34.99, description: '2 Large Specialty Pizzas, 1 Garlic Bread, 2L Drink.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80', tag: 'Save 25%' },
    { slug: 'deal-2', name: 'Pizza & Beer Night', price: 28.99, description: 'Any XL Classic Pizza + 4 Craft Sodas / Beers.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', tag: 'Best Value' },
    { slug: 'deal-3', name: 'Solo Combo', price: 14.99, description: '1 Medium Margherita + Soft Drink + Garlic Dip.', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80', tag: 'Lunch Special' },
    { slug: 'deal-4', name: 'Little Chef Box', price: 9.99, description: '1 Small Margherita + Juice Box + Sticker Pack.', image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=600&q=80', tag: 'Kids Menu' }
];

async function seed() {
    await connectDB();

    await Pizza.deleteMany({});
    await Deal.deleteMany({});

    await Pizza.insertMany(pizzas);
    await Deal.insertMany(deals);

    console.log(`Seeded ${pizzas.length} pizzas and ${deals.length} deals.`);
    await mongoose.connection.close();
    process.exit(0);
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
