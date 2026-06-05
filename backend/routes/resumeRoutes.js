const express = require('express')
const path = require('path')
const multer = require('multer')
const { protect } = require('../middleware/authMiddleware')
const { uploadResume, analyzeResume, getHistory } = require('../controllers/resumeController')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now()
    const safeName = `${timestamp}-${file.originalname.replace(/\s+/g, '-')}`
    cb(null, safeName)
  },
})

const fileFilter = (req, file, cb) => {
  const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  const accepted = allowed.includes(file.mimetype)
  cb(null, accepted)
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
})

const router = express.Router()

router.post('/upload', protect, upload.single('resume'), uploadResume)
router.post('/analyze', protect, analyzeResume)
router.get('/history', protect, getHistory)

module.exports = router
