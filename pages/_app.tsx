import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout'))

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Felix personal portfolio, with a showcase of a range of projects." />
      </Head>
      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </div>
  )
}

export default MyApp
