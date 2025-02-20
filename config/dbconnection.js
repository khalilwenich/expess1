const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Charger l'URL depuis le fichier JSON
const configPath = path.join(__dirname, 'dbconnection.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Connexion à MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connecté : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Erreur de connexion : ${err.message}`);
    process.exit(1); // Arrête le processus en cas d'échec
  }
};

module.exports = connectDB;
