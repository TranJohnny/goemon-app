const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const router = express.Router();

router.get(
  '/:id',
  asyncHandler(async function (req, res) {
    const stock = await db.Stock.findByPk(req.params.id);
    return res.json(stock);
  })
);

module.exports = router;
