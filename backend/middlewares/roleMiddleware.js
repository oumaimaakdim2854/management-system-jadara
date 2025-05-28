const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Accès réservé à l\'admin' });
    }
    next();
};

module.exports = isAdmin;
