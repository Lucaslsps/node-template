const express = require("express");
const router = express.Router();
const rota1 = require("./rota1");
const rota2 = require("./rota2");

// Requisições e seus arquivos
router.use("/rota1", rota1);
router.use("/rota2", rota2);

module.exports = router;