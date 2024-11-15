import { useState } from 'react'
import { LOGO_URL } from '../../utils/constant'
const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  const btnClicked = () => {
    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={btnClicked}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
