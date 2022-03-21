import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

function economy() {
  return (
    <div>
      <Head>
        <title>Market Watcher - Financial News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
          <h1>About the economy</h1>
          

      <Footer />
    </div>
  )
}

export default economy