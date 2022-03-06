import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function about() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <hr />
          <div className="py-5 px-5 lg:px-0 md:px-10">
              <h1 className="text-2xl">About</h1>
              <p className="pt-10">
              Market Watcher, created in the month of February 2022, will help you get informed about the economic and financial issues that surround us. You will be immersed in a series of articles that will keep you up to date with the news every day. In addition, you will have the unique opportunity to comment on each post to give us your views and opinions on the topics covered. Debates will also be set up, once a week, on a big weekly news. Join us, we are waiting for you.
              </p>
          </div>
    </div>
  )
}

export default about
