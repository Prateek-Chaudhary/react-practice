import React from 'react'
import Header from '../layouts/header/Header'
import Banner from '../layouts/aside/Banner';

function Home() {
  return (
    <div>
      <div className="headerInfo">
        <Header />
      </div>
      <div className="bannerInfo">
        <Banner />
      </div>
    </div>
  )
}

export default Home;
