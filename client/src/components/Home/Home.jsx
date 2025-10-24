import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='homecont'>
      <div className="navbar">
        <h1>Kongu Engineering College</h1>
        <a href="#about" className='navank'>About Us</a>
        <a href="#contact" className='navank'>Contact</a>
        <Link to='/Login'><button className='navlogbut'>Login</button></Link>
      </div>
      <div className="carousel">
        <Carousel controls={false} indicators={false} interval={3000} fade>
          <Carousel.Item>
            <img src="#" alt="First Image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="#" alt="Second Image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="#" alt="Third Image" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="aboutus" id='about'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima temporibus illo, velit debitis aspernatur, molestiae nemo eveniet commodi nihil et voluptatum recusandae corrupti est officiis totam repudiandae amet modi.</p>
      </div>
      <footer className='contact' id='contact'>
        Contact : Kongu.ac.in
      </footer>
      
    </div>
  )
}

export default Home
