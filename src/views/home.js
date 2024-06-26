import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Assurance Architect</title>
        <meta property="og:title" content="Direct Assurance Architect" />
      </Helmet>
    </div>
  )
}

export default Home
