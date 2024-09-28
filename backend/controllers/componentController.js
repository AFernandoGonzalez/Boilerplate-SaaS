const Component = require('../models/ComponentSchema');

exports.getAllComponents = async (req, res) => {
    try {
        // const components = await Component.find();
        // res.json(components);
        res.send('getAllComponents')
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addComponent = async (req, res) => {
    const { name, description, code } = req.body;

    try {
        const newComponent = new Component({ name, description, code });
        await newComponent.save();
        res.status(201).json(newComponent);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
