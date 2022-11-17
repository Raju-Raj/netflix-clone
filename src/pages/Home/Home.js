import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SectionFive from '../../components/SectionFive/SectionFive';
import SectionFour from '../../components/SectionFour/SectionFour';
import SectionOne from '../../components/SectionOne/SectionOne';
import SectionThree from '../../components/SectionThree/SectionThree';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
import MetaData from '../../more/MetaData';
import './Home.css';

const Home = () => {
  return (
    <div>
        <MetaData title='Home'/>
        <Header/>
        <hr/>
        <SectionOne/>
        <hr/>
        <SectionTwo/>
        <hr/>
        <SectionThree/>
        <hr/>
        <SectionFour/>
        <hr/>
        <SectionFive/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default Home