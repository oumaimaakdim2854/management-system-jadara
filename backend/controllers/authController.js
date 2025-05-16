const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Enregistrement d’un utilisateur
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // if (!name || !email || !password) {
        //     return res.status(400).json({ message: 'Tous les champs sont requis.' });
        // }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email déjà utilisé.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({
            message: 'Inscription réussie',
            token,
            user: { id: user._id, name: user.name, email: user.email, password: user.password }
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};

// Connexion d’un utilisateur
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // if (!email || !password) {
        //     return res.status(400).json({ message: 'Email et mot de passe requis.' });
        // }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur non trouvé.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect.' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({
            message: 'Connexion réussie',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

module.exports = { registerUser, loginUser };