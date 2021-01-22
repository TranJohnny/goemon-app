const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

module.exports = router;

// DEV Test Utility
// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });
