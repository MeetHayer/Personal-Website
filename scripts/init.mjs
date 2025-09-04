import fs from 'fs'
import fse from 'fs-extra'
import path from 'path'
import readline from 'readline'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const ask = (q) => new Promise(res => rl.question(q, a => res(a.trim())))

const ROOT = process.cwd()
const dataPath = path.join(ROOT, 'src', 'data', 'personal.json')
const publicDir = path.join(ROOT, 'public')
const resumeTarget = path.join(publicDir, 'resume.pdf')

async function main() {
  console.log('\n=== Portfolio Init ===')
  const name = await ask('Your full name: ')
  const tagline = await ask('Short tagline: ')
  const email = await ask('Contact email: ')
  const bio = await ask('Short bio (1-3 sentences): ')

  const resume = await ask('Resume (URL or local path, or leave blank to skip): ')
  await fse.ensureDir(publicDir)
  let resumeUrl = ''

  if (resume) {
    if (/^https?:\/\//.test(resume)) {
      // download
      try {
        const res = await fetch(resume)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const buf = Buffer.from(await res.arrayBuffer())
        fs.writeFileSync(resumeTarget, buf)
        resumeUrl = '/resume.pdf'
        console.log('Downloaded resume to /public/resume.pdf')
      } catch (e) {
        console.warn('Failed to download resume:', e.message)
      }
    } else {
      // local copy
      try {
        await fse.copy(resume, resumeTarget)
        resumeUrl = '/resume.pdf'
        console.log('Copied resume to /public/resume.pdf')
      } catch (e) {
        console.warn('Failed to copy resume:', e.message)
      }
    }
  }

  const socialsRaw = await ask('Socials (e.g., LinkedIn=https://...,GitHub=https://...): ')
  const socials = {}
  if (socialsRaw) {
    socialsRaw.split(',').forEach(pair => {
      const [k, v] = pair.split('=')
      if (k && v) socials[k.trim()] = v.trim()
    })
  }

  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  data.name = name || data.name
  data.tagline = tagline || data.tagline
  data.email = email || data.email
  data.bio = bio || data.bio
  data.resumeUrl = resumeUrl || data.resumeUrl
  data.socials = Object.keys(socials).length ? socials : data.socials

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
  console.log('\nSaved src/data/personal.json')
  console.log('Done. You can edit that file anytime to tweak content.')
  rl.close()
}

main().catch(e => { console.error(e); rl.close() })
