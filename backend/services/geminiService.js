
const { GoogleGenerativeAI } = require('@google/generative-ai')

const DEFAULT_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'


  





function ensureValidResponse(value, fieldName) {
  if (typeof value === 'string' || Array.isArray(value) || typeof value === 'number') {
    return value
  }
  throw new Error(`Invalid or missing field '${fieldName}' in Gemini resume analysis response.`)
}



function normalizeAnalysis(result) {
  return {
    matchScore: ensureValidResponse(result.matchScore, 'matchScore'),
    matchingSkills: Array.isArray(result.matchingSkills) ? result.matchingSkills : [],
    missingSkills: Array.isArray(result.missingSkills) ? result.missingSkills : [],
    strengths: Array.isArray(result.strengths) ? result.strengths : [],
    weaknesses: Array.isArray(result.weaknesses) ? result.weaknesses : [],
    improvements: Array.isArray(result.improvements) ? result.improvements : [],
    interviewQuestions: Array.isArray(result.interviewQuestions) ? result.interviewQuestions : [],
  }
}

function extractJson(text) {
  const begin = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (begin === -1 || end === -1 || begin > end) {
    throw new Error('Gemini did not return a valid JSON object.')
  }
  const jsonString = text.slice(begin, end + 1)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    throw new Error(`Failed to parse Gemini JSON response: ${error.message}`)
  }
}

async function analyzeResume(resumeText, jobDescription) {
  if (!resumeText || typeof resumeText !== 'string') {
    throw new Error('resumeText must be a non-empty string.')
  }
  if (!jobDescription || typeof jobDescription !== 'string') {
    throw new Error('jobDescription must be a non-empty string.')
  }

  

  const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('Missing GEMINI_API_KEY environment variable.');
}

const genai = new GoogleGenerativeAI(apiKey);

console.log("GEMINI_MODEL ENV =", process.env.GEMINI_MODEL);
console.log("DEFAULT_MODEL =", DEFAULT_MODEL);

const model = genai.getGenerativeModel({
  model: "gemini-2.5-flash",
});



  const prompt = `Compare the resume against the job description and return ONLY valid JSON with these exact keys: ` +
    `matchScore, matchingSkills, missingSkills, strengths, weaknesses, improvements, interviewQuestions. ` +
    `matchScore should be an integer between 0 and 100. ` +
    `matchingSkills, missingSkills, strengths, weaknesses, improvements, and interviewQuestions must be arrays. ` +
    `Do not include any markdown, comments, or explanatory text. ` +
    `Provide the JSON object only.` +
    `\n\nResume:\n${resumeText}\n\nJob Description:\n${jobDescription}`



 let response

try {
  response = await model.generateContent(prompt)
} catch (error) {
  if (
    error.message.includes('429, 503') ||
    error.message.includes('quota') ||
    error.message.includes('Quota')
  ) {
    return {
      matchScore: 0,
      matchingSkills: [],
      missingSkills: [],
      strengths: [],
      weaknesses: [],
      improvements: [
        'Gemini API quota exceeded. Please try again later.'
      ],
      interviewQuestions: [],
    }
  }

  throw error
}

  const generatedText = typeof response?.response?.text === 'function'
    ? response.response.text()
    : typeof response?.response === 'string'
      ? response.response
      : ''

  if (!generatedText || typeof generatedText !== 'string') {
    throw new Error('Gemini returned no readable text in the response.')
  }

  const parsed = extractJson(generatedText)
  const normalized = normalizeAnalysis(parsed)



  
  if (typeof normalized.matchScore !== 'number') {
    throw new Error('Gemini analysis response returned an invalid matchScore.')
  }

  return normalized
}

module.exports = {
  analyzeResume,
}
