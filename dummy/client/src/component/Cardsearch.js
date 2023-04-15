import React from 'react';
import { Link } from 'react-router-dom';

export default function Cardsearch() {
  return (
    <div>
    
    <div className="card mb-3 m-5 mx-10 w3-border w3-border-black" style={{height:"35%",width:"80%"}} >
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://tse3.mm.bing.net/th?id=OIP.cJ5IiGwF6AqPUFAJOslZuQHaEx&pid=Api&P=0" className="img-fluid rounded-start w3-border-right w3-border-black" style={{height:"100%",width:"100%"}} alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title w3-xlarge">Paulina Porizkova Celebrates Turning 58 With a Peek at Her Birthday Suit</h5>
          <p className="card-text w3-large">
          Paulina Portizkova defined aging with grace in a new social media post honoring her 58th birthday. Shalom Harlow wrote, "Happy Birthday love," and Tarina Patel commented, "Happy happy happiest of bdays u gorgeous one.A month ahead of her 58th birthday, Porizkova shared a picture from a photoshoot showing off her svelte figure.Check, check, check, check!Happy birthday, Paulina! 
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Something else</small><Link to="/detail"><button type="button" class="btn btn-primary card-btn">Read More</button></Link>
          </p>
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  </div>
  )
}
