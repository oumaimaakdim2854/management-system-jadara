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

const getPendingStudents = async (req, res) => {
    try {
        const students = await User.find({ role: 'student', isValidated: false }).select('-password');
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// Récupérer tous les utilisateurs (réservé à l'admin)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getUserDetails, validateStudent, getPendingStudents, getAllUsers, deleteUser, updateUser };