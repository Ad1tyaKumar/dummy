import React from 'react'

export default function Connect() {
  return (
    <div className='w3-disay-middle'><form
    action="/action_page.php"
    className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin w3-center w3-cursive" style={{width:"80%"}}
  >
    <h2 className="w3-center w3-xxlarge w3-cursive">Contact Us</h2>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{ width: 50 }}>
        <i className="w3-xxlarge fa fa-user" />
      </div>
      <div className="w3-rest">
        <input
          className="w3-input w3-border"
          name="first"
          type="text"
          placeholder="First Name"
        />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{ width: 50 }}>
        <i className="w3-xxlarge fa fa-user" />
      </div>
      <div className="w3-rest">
        <input
          className="w3-input w3-border"
          name="last"
          type="text"
          placeholder="Last Name" style={{width:"100%"}}
        />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{ width: 50 }}>
        <i className="w3-xxlarge fa fa-envelope-o" />
      </div>
      <div className="w3-rest">
        <input
          className="w3-input w3-border"
          name="email"
          type="text"
          placeholder="Email"
        />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{ width: 50 }}>
        <i className="w3-xxlarge fa fa-phone" />
      </div>
      <div className="w3-rest">
        <input
          className="w3-input w3-border"
          name="phone"
          type="text"
          placeholder="Phone"
        />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{ width: 50 }}>
        <i className="w3-xxlarge fa fa-pencil" />
      </div>
      <div className="w3-rest">
        <input
          className="w3-input w3-border"
          name="message"
          type="text"
          placeholder="Message"
        />
      </div>
    </div>
    <button className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">
      Send
    </button>
  </form>
  </div>
  )
}
