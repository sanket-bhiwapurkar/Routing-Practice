import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="logo"
    />
    <h1 className="logo-title">Wave</h1>
    <ul className="menu-list">
      <li>
        <Link className="menu-list-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="menu-list-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="menu-list-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
