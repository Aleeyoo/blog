interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://011205.xyz/', // Write here your website url
	author: 'Aleeyoo', // Site author
	title: 'Iterativity', // Site title.
	description: 'A blog about Aleeyoo.', // Description to display in the meta tags
	lang: 'zh_CN',
	ogLocale: 'zh_CN',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
