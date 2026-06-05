exports.login = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' })
  }

  return res.status(200).json({
    email,
    token: 'demo-token',
    message: 'Login successful.',
  })
}

exports.register = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' })
  }

  return res.status(201).json({
    email,
    token: 'demo-token',
    message: 'Registration successful.',
  })
}

exports.logout = (req, res) => {
  return res.status(200).json({ message: 'Logged out successfully.' })
}
