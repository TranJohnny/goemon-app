const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const db = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Please provide a password with 6 characters or more.'),
  handleValidationErrors,
];

// Signup /api/users
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    if (!user) {
      const err = new Error('Signup failed');
      err.status = 401;
      err.title = 'Signup failed';
      err.errors = ['Could not create user with provided information.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// /api/users/:id
router.get(
  '/:id',
  asyncHandler(async function (req, res) {
    const user = await db.User.findByPk(req.params.id, {
      include: [
        {
          model: db.Watchlist,
          include: db.Stock,
        },
      ],
    });

    return res.json(user);
  })
);

router.post(
  '/watchlists',
  asyncHandler(async function (req, res) {
    const { watchlistId, stockId } = req.body;
    const recordCreated = await db.Watchlist_Stock.create({
      watchlistId,
      stockId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    if (recordCreated) {
      const stock = await db.Stock.findByPk(stockId);
      res.json({ stock });
    }
  })
);

router.delete(
  '/watchlists',
  asyncHandler(async function (req, res) {
    const { watchlistId, stockId } = req.body;
    const recordDestroyed = await db.Watchlist_Stock.destroy({
      where: { watchlistId, stockId },
    });
    if (recordDestroyed) {
      res.json({ recordDestroyed });
    }
  })
);

module.exports = router;
