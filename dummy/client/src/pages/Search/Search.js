import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Cardsearch from '../../component/Cardsearch'
import Footer from '../../component/Footer/Footer'

export default function Search() {
  return (
    <div>
        <Navbar/>
        <h1 className='w3-xxlarge m-5'>SEARCH RESULTS</h1>
        <h1 className='w3-xlarge mx-5'>POLITICS</h1>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Footer/>
    </div>
  )
}
