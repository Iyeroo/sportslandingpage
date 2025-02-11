import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from "./Header";
import LogoFlexbox from './Department.jsx';
import Events from './Events.jsx';
import Gallery from './Gallery.jsx';


import Footer from './Footer.jsx';
import "./Sports.css";

const Sports = () => {

  



    

    

  return (
    <div className="sports">
      <Header />
      <div className='Department'>
        <h1 className='headingCenter'>Who Will Win the Department Trophy Of 2025?</h1>
        <LogoFlexbox/>
      </div>
      <div className='events'>
        <h1 className='headingCenter'>EVENTS</h1>
        <Events/> 
      </div>
      <div className='Gallery'>
        <h1 className='headingCenter'>Gallery</h1>
        <Gallery/>
      </div> 
      <Footer />
    </div>
  )
}

export default Sports