import {
  AUTHOR,
  DESCRIPTION,
  HOMEPAGE,
  THUMBNAIL,
  TITLE,
} from '@/lib/constants'

export default {
  title: TITLE,
  description: DESCRIPTION,
  canonical: HOMEPAGE,
  languageAlternates: [
    {
      hrefLang: 'en',
      href: HOMEPAGE,
    },
  ],
  openGraph: {
    profile: {
      username: AUTHOR,
    },
    type: 'website',
    locale: 'en',
    url: HOMEPAGE,
    site_name: TITLE,
    images: [
      {
        url: THUMBNAIL,
        width: 200,
        height: 200,
        alt: TITLE,
      },
    ],
  },
}
