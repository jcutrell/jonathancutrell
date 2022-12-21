import fs from 'fs'

export const BlogRSS = ({ items }) => {
  items.sort((a, b) => new Date(b.date) - new Date(a.date))

  return `<?xml version="1.0" ?>
		<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
			<channel>
				<title>Jonathan Cutrell :: Blog</title>
				<description>A collection of articles from my blog</description>
				<link>https://jonathancutrell.com/rss.xml</link>
				${items
          .map(
            (item) => `
					<item>
						<title>${item.title}</title>
						<description>${item.excerpt || 'No description provided.'}</description>
						<link>https://myblog.com/blog/${item.slug}</link>
						<pubDate>${new Date(item.date).toUTCString()}</pubDate>
            <content:encoded><![CDATA[${item.content}]]></content:encoded>
					</item>
				`
          )
          .join('')}
			</channel>
		</rss>
	`
}

export const createAndSaveRSS = ({ items }) => {
  const rss = BlogRSS({ items })
  fs.writeFileSync('./public/rss.xml', rss)
}
