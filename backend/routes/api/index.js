const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const stocksRouter = require('./stocks.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/stocks', stocksRouter);

module.exports = router;

// DEV Test Utility
// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });
