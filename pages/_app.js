import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo-config'

import Layout from '@/components/Layout'

import '@/styles/globals.css'
import theme from '@/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
