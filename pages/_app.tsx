import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { createContext, useState } from 'react'
import Head from 'next/head'

export interface IContext {
  mode: boolean
  toggleTheme: Function
}

export const MyContext = createContext<IContext>({ mode: false, toggleTheme: () => {} })

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(false)

  const toggleTheme = () => {
    setMode(!mode)
  }

  return (
    <div className={`${mode ? 'dark' : ''}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Felix personal portfolio, with a showcase of a range of projects." />
      </Head>
      <MyContext.Provider value={{ mode, toggleTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
    </div>
  )
}

export default MyApp
