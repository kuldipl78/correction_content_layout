import React from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
const About = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <Navbar />
            <div className="home-container">
              <img
                alt="About"
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                }
              />
              <h1>About</h1>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About
