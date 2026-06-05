const { db } = require('../config/firebase')
const { extractResumeText } = require('../services/parserService')
const { analyzeResume } = require('../services/geminiService')

exports.uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No resume file uploaded.' })
    }

    const extractedText = await extractResumeText(req.file.path)

    res.status(201).json({
      file: {
        originalName: req.file.originalname,
        storedName: req.file.filename,
        mimeType: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
      },
      text: extractedText,
    })
  } catch (error) {
    next(error)
  }
}

exports.analyzeResume = async (req, res, next) => {

   
  try {
    const { resumeText, jobDescription } = req.body

    if (!resumeText || typeof resumeText !== 'string') {
      return res.status(400).json({ message: 'resumeText is required and must be a string.' })
    }
    if (!jobDescription || typeof jobDescription !== 'string') {
      return res.status(400).json({ message: 'jobDescription is required and must be a string.' })
    }

    const analysis = await analyzeResume(resumeText, jobDescription)
    const analysisRecord = {
      resumeText,
      jobDescription,
      analysis,
      createdAt: new Date(),
    }

    await db.collection('analyses').add(analysisRecord)

    res.status(200).json(analysis)
  } catch (error) {
    next(error)
  }
}

exports.getHistory = async (req, res, next) => {
  try {
    const snapshot = await db
      .collection('analyses')
      .orderBy('createdAt', 'desc')
      .get()

    const history = snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : null,
      }
    })

    res.status(200).json({ history })
  } catch (error) {
    next(error)
  }
}
