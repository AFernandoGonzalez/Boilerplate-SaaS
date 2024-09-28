const Boilerplate = require('../models/Boilerplate');

exports.getAllBoilerplates = async (req, res) => {
    try {
        // const boilerplates = await Boilerplate.find();
        // res.json(boilerplates);
        res.send('getAllBoilerplates')
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addBoilerplate = async (req, res) => {
    const { name, description, files } = req.body;

    try {
        const newBoilerplate = new Boilerplate({ name, description, files });
        await newBoilerplate.save();
        res.status(201).json(newBoilerplate);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
