const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const batimentRoutes = require('./routes/batiments');  // Assurez-vous que le chemin est correct

const app = express();

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Utilisation des routes batiment
app.use('/batiment', batimentRoutes);

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
