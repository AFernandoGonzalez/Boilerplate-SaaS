const express = require('express');
const router = express.Router();
const { getAllComponents, addComponent } = require('../controllers/componentController');
// const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllComponents);
// router.post('/', authMiddleware, addComponent);

module.exports = router;
