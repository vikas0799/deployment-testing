const requireVen = async (req, res, next) => {
    if (req.user && req.user.userType == 'vendor') {
      next()
    }
    return res.status(403).json({ error: "Forbidden" })
  };
  
  module.exports = requireVen;