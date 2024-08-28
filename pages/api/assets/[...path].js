import { join } from 'path'
import { createReadStream } from 'fs'
import { stat } from 'fs/promises'

export default async function handler(req, res) {
  const { path } = req.query
  const filePath = join(process.cwd(), 'content', 'assets', ...path)

  try {
    const stats = await stat(filePath)
    if (stats.isFile()) {
      const stream = createReadStream(filePath)
      stream.pipe(res)
    } else {
      res.status(404).end('Not found')
    }
  } catch (error) {
    res.status(404).end('Not found')
  }
}
