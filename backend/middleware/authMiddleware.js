exports.protect = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token missing.' })
  }

  const token = authHeader.split(' ')[1]

  if (token !== 'demo-token') {
    return res.status(401).json({ message: 'Invalid authorization token.' })
  }

  req.user = { email: 'demo@resume.com' }
  next()
}
