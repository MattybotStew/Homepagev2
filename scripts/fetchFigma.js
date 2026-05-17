import fs from 'fs/promises'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.FIGMA_TOKEN
const fileKey = process.env.FIGMA_FILE_KEY

if (!token || !fileKey) {
  console.error('Missing FIGMA_TOKEN or FIGMA_FILE_KEY in environment.')
  process.exit(1)
}

async function fetchFile() {
  try {
    const response = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
      headers: {
        'X-Figma-Token': token
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const file = await response.json()
    await fs.writeFile('figma-output.json', JSON.stringify(file, null, 2))
    console.log('Figma file fetched to figma-output.json')
  } catch (err) {
    console.error('Error fetching Figma file:', err.message || err)
    process.exit(1)
  }
}

fetchFile()
