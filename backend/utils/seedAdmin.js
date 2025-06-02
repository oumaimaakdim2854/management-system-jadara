// // utils/defaultAdmin.js
// const bcrypt = require("bcrypt");
// const User = require("../models/userModel"); // Ajuste le chemin si nécessaire

// const createDefaultAdmin = async () => {
//     try {
//         const existingAdmin = await User.findOne({ email: "admin@admin.com" });
//         if (!existingAdmin) {
//             const hashedPassword = await bcrypt.hash("admin123", 10);
//             await User.create({
//                 name: "Admin",
//                 email: "admin@gmail.com",
//                 password: hashedPassword,
//                 role: "admin",
//             });
//             console.log("✅ Admin par défaut créé !");
//         } else {
//             console.log("ℹ️ Admin déjà existant.");
//         }
//     } catch (error) {
//         console.error("❌ Erreur lors de la création de l'admin par défaut :", error);
//     }
// };

// module.exports = createDefaultAdmin;



// Ce code est à exécuter une seule fois pour créer l'admin
const bcrypt = require('bcryptjs');
const User = require('./models/Users'); // chemin selon ton projet

(async () => {
    const hashedPassword = await bcrypt.hash("admin12345", 10);
    const admin = new User({
        name: "Admin",
        email: "admin@jadara.com",
        password: hashedPassword,
        role: "admin"
    });
    await admin.save();
    console.log("Admin créé !");
})();
