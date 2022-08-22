import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ( { children } ) => {
  return (
    <div className='layout'>

        <Head>
            <title>Hegyi Kecskék</title>
            <meta name="description" content="Hegyi kecskék hivatalos oldala" />
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"></meta>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <header>
            <NavBar/>
        </header>

        <main className='main-container'>

          {children}

        </main>

        <footer>

          <Footer/>

        </footer>


    </div>
  )
}

export default Layout