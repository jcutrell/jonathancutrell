import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { DateTime } from 'luxon'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export async function getAllContentIn({ folder = 'blog', extension = 'md' }) {
  const items = fs.readdirSync(path.join(process.cwd(), `content/${folder}`))

  return items
    .filter((itemSlug) => itemSlug.endsWith(`.${extension}`))
    .reduce((allItems, itemSlug) => {
      const source = fs.readFileSync(
        path.join(process.cwd(), `content/${folder}`, itemSlug),
        'utf-8'
      )
      let { content, data } = matter(source)

      data = JSON.parse(JSON.stringify({ ...data, content }))

      let urlSlug = itemSlug.replace(`.${extension}`, '')

      return [
        {
          ...data,
          permalink: `${folder}/${urlSlug}`,
          slug: urlSlug,
          readingTime: readingTime(source).text,
        },
        ...allItems,
      ]
    }, [])
}

export function getSlugsIn({ folder = 'blog', extension = 'md' }) {
  const paths = fs
    .readdirSync(path.join(process.cwd(), `content/${folder}`))
    .filter((path) => path.endsWith(extension))
  return paths.map((path) => path.replace(`.${extension}`, ''))
}

export async function getAllArticles() {
  return getAllContentIn({})
}

export async function getAllContent() {
  const articles = await getAllContentIn({})
  const notes = await getAllContentIn({ folder: 'notes' })
  return [...articles, ...notes].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
}

export async function getContentBySlug({
  folder = 'blog',
  extension = 'md',
  slug,
}) {
  // get parsed data from mdx files in the "articles" dir
  const source = fs.readFileSync(
    path.join(process.cwd(), `content/${folder}/${slug}.${extension}`),
    'utf-8'
  )

  let { content, data } = matter(source)
  data = JSON.parse(JSON.stringify(data))

  return {
    ...data,
    content,
    slug: slug.replace(`.${extension}`, ''),
    readingTime: readingTime(source).text,
  }
}

export async function getContentItem(slug, type = 'blog') {
  // get parsed data from mdx files in the "articles" dir
  const source = fs.readFileSync(
    path.join(process.cwd(), `content/${type}`, slug + '.md'),
    'utf-8'
  )

  let { content, data } = matter(source)
  data = JSON.parse(JSON.stringify(data))

  return {
    ...data,
    content,
    slug: slug.replace('.md', ''),
    readingTime: readingTime(source).text,
  }
}

export async function getArticle(articleSlug) {
  return getContentItem(articleSlug)
}

export async function getEpisodes({ page = 1, pageSize = 20 }) {
  const res = await fetch(
    `https://api.simplecast.com/podcasts/${
      process.env.PODCAST_ID
    }/episodes?limit=${pageSize}&offset=${(page - 1) * pageSize}`,
    {
      headers: {
        authorization: `Bearer ${process.env.SIMPLECAST_API_KEY}`,
      },
    }
  )
  const episodes = await res.json()

  return episodes
}

export async function getAllEpisodes() {
  return await getEpisodes({ page: 1, pageSize: 2000 })
}

export const pubDate = (date) => `${DateTime.fromISO(date).toLocaleString()}`

export const duration = (durationInSeconds) =>
  `~${Math.round(durationInSeconds / 60)}m`
