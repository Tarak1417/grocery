import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottamBanner from '../components/BottamBanner'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottamBanner />
      <NewsLetter />
     
    </div>
  )
}

export default Home
