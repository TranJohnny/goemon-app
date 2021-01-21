const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

router.post(
  '',
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

module.exports = router;
