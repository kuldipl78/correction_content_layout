import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {FaHandsClapping} from 'react-icons/fa6'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {IoIosSunny} from 'react-icons/io'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme, toggleTheme}) => (
          <nav className={isDarkTheme ? 'black-theme' : 'light-thee'}>
            <div
              className={isDarkTheme ? 'white-hand-theme' : 'light-hand-theme'}
            >
              <FaHandsClapping />
            </div>
            <nav>
              <ul className="ul-items">
                <li className="list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <button onClick={toggleTheme}>
                {isDarkTheme ? <IoIosSunny /> : <BsFillMoonStarsFill />}
              </button>
            </nav>
          </nav>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
