import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


import bus1 from '../../assets/bus1.jpg';
import bus2 from '../../assets/bus2.jpg';
import bus3 from '../../assets/bus3.jpg';
import bus4 from '../../assets/bus4.webp';
import bus5 from '../../assets/bus5.webp';
import bus6 from '../../assets/bus6.webp';
import bus7 from '../../assets/bus7.png';

const Home = () => {
  return (
    <div className='homecont'>

      <div className="navbar">
        <h1>Kongu Engineering College</h1>
        <div className="nav-links">
          <a href="#about" className='navank'>About Us</a>
          <a href="#transport" className='navank'>Transport</a>
          <a href="#contact" className='navank'>Contact</a>
          <Link to='/Login'><button className='navlogbut'>Login</button></Link>
        </div>
      </div>

      
      <div className="carousel">
        <Carousel controls={false} indicators={false} interval={3000} fade>
          {[bus1, bus2, bus4, bus5].map((bus, index) => (
            <Carousel.Item key={index}>
              <img src={bus} alt="College Bus" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      
      <section className="aboutus" id='about'>
        <h2>About Us</h2>
        <p>
          <strong>Kongu Engineering College (KEC)</strong>, a premier institution in Tamil Nadu, is located just
          <strong> 3 km from Perundurai Bus Stand</strong> on the way to the Railway Station. The college stands as a
          beacon of excellence in engineering education, research, and innovation.
        </p>
        <p>
          The serene campus offers state-of-the-art infrastructure, modern laboratories, digital classrooms, and
          extensive research facilities. Established with the mission to provide quality education and skill-based
          learning, KEC empowers students to become globally competent professionals while fostering ethical and social
          responsibility.
        </p>
      </section>

      
      <section className="transport" id='transport'>
        <h2>Transport Facilities</h2>
        <img src={bus3} alt="Transport Facilities" className='transimg' />
        <p>
          The college provides one of the most extensive and efficient transport systems in Tamil Nadu. Located
          strategically, KEC ensures safe and punctual travel for both students and staff members. The campus is
          <strong> 18 km from Erode Junction</strong> and <strong>70 km from Coimbatore Airport</strong>, ensuring
          excellent connectivity across the state.
        </p>
        <p>
          Over <strong>75 buses</strong> operate on multiple routes, covering nearby towns and villages, allowing
          students from remote areas to reach the college easily and safely.
        </p>

        <div className='trans-grid'>
        
          <div className='trans-card'>
            <h4>College Bus Routes</h4>
            <img src={bus6} alt="College Bus Routes" />
            <p>
              KEC operates a large fleet of buses covering a vast network of towns including:
              <br /><br />
              <strong>Erode (20 buses)</strong>, <strong>Tiruppur (13)</strong>, <strong>Perundurai (7)</strong>,
              <strong> Gobi (6)</strong>, <strong>Kangeyam (3)</strong>, <strong>Tiruchengode (3)</strong>, and many
              more such as Sathyamangalam, Bhavani, Komarapalayam, Anthiyur, Ammapettai, and Kodumudi.
            </p>
          </div>

          <div className='trans-card'>
            <h4>Public Transport Services</h4>
            <img src={bus7} alt="Public Transport" />
            <p>
              The college is also well connected through government and private buses. Regular routes include
              <strong> 18, 39, 39A, 20B, and P9</strong> as well as <strong>Kongu Raja Bus Service</strong>.
              Mini-buses operate frequently from Perundurai to the KEC campus.
            </p>
            <p>
              Regular trips between Perundurai and the college run from <strong>7.40 A.M. to 8.20 A.M.</strong> and
              return between <strong>4.15 P.M. and 7.15 P.M.</strong>, perfectly aligned with college timings.
            </p>
          </div>
        </div>
      </section>

      
      <footer className='contact' id='contact'>
        <h3>Contact</h3>
        <p>
          <strong>KONGU ENGINEERING COLLEGE</strong><br />
          Perundurai, Erode - 638060, Tamil Nadu, India<br />
          Phone: 04294 - 226555, 226666, 226500<br />
          Email: info@kongu.ac.in
        </p>
      </footer>
    </div>
  );
};

export default Home;
