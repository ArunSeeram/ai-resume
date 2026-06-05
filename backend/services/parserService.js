const fs = require('fs/promises')
const path = require('path')
const pdfParse = require('pdf-parse')
const mammoth = require('mammoth')

async function extractResumeText(filePath) {
  if (!filePath || typeof filePath !== 'string') {
    throw new Error('A valid resume file path is required.')
  }

  const extension = path.extname(filePath).toLowerCase()

  try {
    if (extension === '.pdf') {
      const fileBuffer = await fs.readFile(filePath)
      const data = await pdfParse(fileBuffer)
      return (data.text || '').trim()
    }

    if (extension === '.docx') {
      const result = await mammoth.extractRawText({ path: filePath })
      return (result.value || '').trim()
    }

    throw new Error(
      `Unsupported resume file type '${extension}'. Supported formats are PDF and DOCX.`
    )
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Resume file not found at path: ${filePath}`)
    }
    throw new Error(`Resume extraction failed for '${filePath}': ${error.message}`)
  }
}

module.exports = {
  extractResumeText,
}

