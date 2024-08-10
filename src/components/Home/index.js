import React from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
const Home = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <Navbar />
            <div className="home-container">
              <img
                alt="Home"
                className={isDarkTheme ? 'light-img' : 'dark-img'}
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                }
              />
              <h1>Home</h1>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
