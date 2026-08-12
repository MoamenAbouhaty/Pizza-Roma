const Deal = require('../models/Deal');

// GET /api/deals
async function getDeals(req, res) {
    try {
        const deals = await Deal.find({
            isActive: true,
            isAvailable: true
        }).sort({ createdAt: 1 });

        res.json({
            success: true,
            count: deals.length,
            data: deals
        });
    } catch (err) {
        console.error('Get deals error:', err);

        res.status(500).json({
            success: false,
            error: 'Failed to fetch deals.'
        });
    }
}

// POST /api/deals
async function createDeal(req, res) {
    try {
        const deal = await Deal.create(req.body);

        res.status(201).json({
            success: true,
            data: deal
        });
    } catch (err) {
        console.error('Create deal error:', err);

        res.status(400).json({
            success: false,
            error: err.message
        });
    }
}

// PUT /api/deals/:slug
async function updateDeal(req, res) {
    try {
        const deal = await Deal.findOneAndUpdate(
            { slug: req.params.slug },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!deal) {
            return res.status(404).json({
                success: false,
                error: 'Deal not found.'
            });
        }

        res.json({
            success: true,
            data: deal
        });
    } catch (err) {
        console.error('Update deal error:', err);

        res.status(400).json({
            success: false,
            error: err.message
        });
    }
}

// DELETE /api/deals/:slug
async function deleteDeal(req, res) {
    try {
        const deal = await Deal.findOneAndDelete({
            slug: req.params.slug
        });

        if (!deal) {
            return res.status(404).json({
                success: false,
                error: 'Deal not found.'
            });
        }

        res.json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.error('Delete deal error:', err);

        res.status(500).json({
            success: false,
            error: 'Failed to delete deal.'
        });
    }
}

module.exports = {
    getDeals,
    createDeal,
    updateDeal,
    deleteDeal
};