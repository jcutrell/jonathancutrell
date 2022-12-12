import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import {sync} from 'glob';
import path from 'path';

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), 'content/blog'))

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), 'content/blog', articleSlug),
      'utf-8'
    )
    let { data } = matter(source)
    data = JSON.parse(JSON.stringify(data));

    return [
      {
        ...data,
        slug: articleSlug.replace('.md', ''),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ]
  }, [])
}

export async function getArticle(articleSlug) {
  // get parsed data from mdx files in the "articles" dir
  const source = fs.readFileSync(
    path.join(process.cwd(), 'content/blog', articleSlug + '.md'),
    'utf-8'
  )

  let { content, data } = matter(source)
  data = JSON.parse(JSON.stringify(data));

  return {
    ...data,
    content,
    slug: articleSlug.replace('.md', ''),
    readingTime: readingTime(source).text,
  }
}
