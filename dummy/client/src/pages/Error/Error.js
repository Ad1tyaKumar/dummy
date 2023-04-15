import React from 'react'
import "./Error.scss"
import Footer from '../../component/Footer/Footer'

export default function Error() {
  return (
    <div className='errorpage'>
    <div className="content">
    <div className="errimg"><img src="https://img.lovepik.com/element/40021/7866.png_1200.png" alt="" /></div>
    
    <h1 className='oops'>OOPS!! <i class="fa-solid fa-bug fa-beat"></i></h1>
    <h2 className='heading'>404 Error</h2>
    <h2 className='heading2'>Hello..Is Somebody Here??</h2>
    <h3>We are Sorry, the page that you are looking is disappeared!!</h3> 
    <h4></h4>
    <a href="/"><button>Go back To Home Page</button></a>
    <span className='m-4'>Nothing is wrong with your PC..just sit back and relax...</span>
    </div>
    <Footer/>
    </div>
  )
}
