const express = require('express');
const asyncHandler = require('express-async-handler');
const Stock = require('../../db/models/stock');
const router = express.Router();

router.get(
  '/:id',
  asyncHandler(async function (req, res) {
    const stock = await Stock.findByPk(req.params.id);
    return res.json(stock);
  })
);

module.exports = router;
