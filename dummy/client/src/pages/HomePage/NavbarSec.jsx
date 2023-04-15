import React from 'react'
import CarouselComponent from "./CarouselComponent"

const NavbarSec = () => {
  return (
    <div>
    <div className='container'>
    <h1 className='text d-flex justify-center align-items-center'>Latest News</h1>
        <div className='row navv justify-start'>
            <div className='col-lg-2 col-sm-4 col-4'>
                <button className='btn btn-light nav-sec-link'>Politics</button>
            </div>
            <div className='col-lg-2 col-sm-4 col-4'>
                <button className='btn btn-light nav-sec-link'>Business</button>
            </div>
            <div className='col-lg-2 col-sm-4 col-4'>
                <button className='btn btn-light nav-sec-link'>Tech</button>
            </div>
            <div className='col-lg-2 col-sm-4 col-4'>
                <button className='btn btn-light nav-sec-link'>Sports</button>
            </div>
            <div className='col-lg-2 col-sm-4 col-4'>
                <button className='btn btn-light nav-sec-link'>Science</button>
            </div>
            <div className='col-lg-2 col-sm-4 col-4'>
                <button className='btn btn-light nav-sec-link'>Health</button>
            </div>
        </div>
        <CarouselComponent/>
    </div>
    </div>
  )
}

export default NavbarSec