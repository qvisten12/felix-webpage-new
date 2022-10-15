import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { createContext, useState } from 'react'

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
      <MyContext.Provider value={{ mode, toggleTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
    </div>
  )
}

export default MyApp
