// Importação dos packages necessários
const express = require("express");
const router = express.Router();

// Lógica do GET
router.get("/", async (req, res) => {
  res.end("PLACEHOLDER");
});

module.exports = router;