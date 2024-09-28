const express = require('express');
const router = express.Router();
const { getAllBoilerplates, addBoilerplate } = require('../controllers/boilerplateController');
// const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllBoilerplates);
// router.post('/', authMiddleware, addBoilerplate);

module.exports = router;
