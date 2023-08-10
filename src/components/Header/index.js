import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nxt-logo"
    />
    <ul className="nav-item-list">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </li>
      <li>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </li>
      <Link to="/logout">
        <button type="button" className="btn">
          Logout
        </button>
      </Link>
    </ul>
  </nav>
)

export default Header
