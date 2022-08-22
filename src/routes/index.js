const { Router } = require("express");
const getTareas = require('./getTareas');

const router = Router();

router.use('/', getTareas);

module.exports = router;