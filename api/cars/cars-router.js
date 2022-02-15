const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.json('getting all cars');
});

router.get('/:id', async (req, res, next) => {
    res.json(`getting car with ID of ${req.params.id}`);
});

router.post('/', async (req, res, next) => {
    res.json('posting a car');
});

module.exports = router;