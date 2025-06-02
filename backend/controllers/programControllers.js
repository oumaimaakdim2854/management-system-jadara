// meme code

const Program = require('../models/Programs');

exports.createProgram = async (req, res) => {
    try {
      console.log("Données reçues dans req.body :", req.body); // 👈 ajoute cette ligne

        const program = new Program(req.body);
        await program.save();
        res.status(201).json(program);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPrograms = async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateProgram = async (req, res) => {
    try {
        const updated = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteProgram = async (req, res) => {
    try {
        await Program.findByIdAndDelete(req.params.id);
        res.json({ message: 'Programme supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
