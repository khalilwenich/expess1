const Batiment = require('../model/batiment');

// Ajouter un bâtiment avec nbr_niveau initialisé à 0
const addBatiment = async (req, res) => {
  try {
    const { nom, description, adresse } = req.body;

    // Vérification des données requises
    if (!nom || !description || !adresse) {
      return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    // Création du bâtiment
    const batiment = new Batiment({
      nom,
      nbr_niveau: 0, // Initialisé à 0
      description,
      adresse,
    });

    // Sauvegarde dans la base de données
    await batiment.save();
    res.status(201).json({
      message: 'Bâtiment ajouté avec succès.',
      data: batiment,
    });
  } catch (err) {
    res.status(500).json({ message: `Erreur : ${err.message}` });
  }
};

module.exports = {
  addBatiment,
};
