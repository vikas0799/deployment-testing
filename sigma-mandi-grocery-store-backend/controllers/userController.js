/*const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password)
    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {firstName, lastName, email, password, userType} = req.body

  try {
    const user = await User.signup(firstName, lastName, email, password, userType)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = { signupUser, loginUser }*/

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// const jwt_decode = require('jwt-decode');

const createToken = (_id, userType) => {
  return jwt.sign({ _id, userType }, process.env.SECRET, { expiresIn: '3d' });
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // create a token with userType
    const user = await User.login(email, password);
    const token = createToken(user._id, user.userType);
    // const decoded = jwt_decode(token);
    // console.log(decoded.userType);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { firstName, lastName, email, password, userType } = req.body;

  try {
    const user = await User.signup(firstName, lastName, email, password, userType);

    // create a token with userType
    const token = createToken(user._id, user.userType);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { signupUser, loginUser };