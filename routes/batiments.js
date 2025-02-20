const express = require('express');
const router = express.Router();
const { addBatiment, getAllBatiments } = require('../controller/batimentController');

// Route pour ajouter un bâtiment
router.post('/addBatiment', addBatiment);

// (Autres routes existantes)
router.get('/', getAllBatiments);

module.exports = router;
