const mongoose = require ('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connecte");
    }catch (err){
        console.log("Erreur de connexion MongoDB :", err);
    }
};
module.exports = connectDB;     