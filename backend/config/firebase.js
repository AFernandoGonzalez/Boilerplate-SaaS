const admin = require('firebase-admin');

const firebaseConfig = {}
admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
});

module.exports = admin;
