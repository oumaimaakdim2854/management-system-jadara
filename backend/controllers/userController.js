const User = require('../models/Users');

// Récupérer les infos de l'utilisateur connecté
const getUserDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// Valider un étudiant (par un admin)
const validateStudent = async (req, res) => {
    try {
        const student = await User.findByIdAndUpdate(
            req.params.id,
            { isValidated: true },
            { new: true }
        ).select('-password');

        if (!student) {
            return res.status(404).json({ message: 'Étudiant non trouvé.' });
        }

        res.json({ message: 'Étudiant validé.', student });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

module.exports = {getUserDetails,validateStudent};