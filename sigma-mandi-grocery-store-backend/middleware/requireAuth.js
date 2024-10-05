/*const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    console.log(res.status(401).json({ error: 'Authorization token required' }));
    return next();
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth*/

/*const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import your user model
const SECRET = process.env.SECRET; // Your secret key

const requireAuth = async (req, res, next) => {
  // Verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id, userType } = jwt.verify(token, SECRET);

    // Retrieve user's userType from the token
    const user = await User.findOne({ _id });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;

    // Check the user's userType here
    if (userType === 'vendor') {
      // Allow access for vendors
      req.user.userType = userType; // Attach userType to the request
      next();
    } else {
      // Deny access for other user types (including Customers)
      return res.status(403).json({ error: 'Access Forbidden' });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;*/

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const SECRET = process.env.SECRET; 

const requireAuth = async (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id, userType } = jwt.verify(token, SECRET);
    const user = await User.findOne({ _id });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next()
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;