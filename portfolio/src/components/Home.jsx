import React from 'react';
import './Home.css'
import mainImage from '../assets/main.jpg';



const Home = () => {
  return (
    <div className='image-container'>
      <div className="image">
        <img
          src={mainImage}
          className="main-image"
          alt="Dimitar's picture"
        />
      </div>
      <div className="text">
        <h1>Hi I'm Dimitar ...</h1>
        <p>
          A software developer, recent graduate from edX coding Bootcamp,
          who has always kept up to date with new industry standards and
          technology. Passionate about Full-stack development and pursuing
          opportunities in a fast-paced and challenging environment.
        </p>
      </div>
    </div>
  );
};

export default Home;




