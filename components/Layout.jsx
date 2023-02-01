import Head from 'next/head'
import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>TiendaOnline</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.main-container}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout