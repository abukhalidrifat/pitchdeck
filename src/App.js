import React from 'react'
import AboutMe from './components/AboutMe/AboutMe';
import Brands from './components/Brands/Brands';
import Header from './components/Header/Header'
import ImageSlider from './components/Slider/ImageSlider'
import Quotes from './components/Quotes/Quotes';
import SocialIcons from './components/Social/SocialIcons'
import WhatIdoCollections from './components/WhatIdo/WhatIdoCollections';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <>
      <SocialIcons justifyContent="end" marginBottom="0" marginRight="15px"/>
      <Header/>
      <ImageSlider/>
      <WhatIdoCollections/>
      <AboutMe/>
      <Brands/>
      <Quotes/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default App