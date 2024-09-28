const User = require('../models/User');
const admin = require('../config/firebase');

exports.loginOrRegister = async (req, res) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ msg: 'No token provided' });

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { uid, email, name } = decodedToken;

        let user = await User.findOne({ firebaseId: uid });
        if (!user) {
            // If no user exists in MongoDB, create one
            user = new User({ firebaseId: uid, name, email });
            await user.save();
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
