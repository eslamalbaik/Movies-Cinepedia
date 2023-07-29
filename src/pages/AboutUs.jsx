import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from '../components/Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { Pagebtn } from '../components/Pagebtn';
import { Helmet } from 'react-helmet';
import kavin from '../assets/images/photo2.jpg'
import fardeen from '../assets/images/photo3.jpg'
import waseem from '../assets/images/photo1.jpg'
const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '7.5rem' }}>Eslam AlBaik</h2>
          <br></br>
        </div>
        </div>
        
    </div>
  );
};

export default AboutUs;
