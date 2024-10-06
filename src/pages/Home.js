import React from 'react';
import EventosWorkshops from '../components/EventosWorkshops';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Destaques from '../components/Destaques';
import Depoimentos from '../components/Depoimentos';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Destaques />
            <Depoimentos />
            <EventosWorkshops />
            <Cta />
            <Footer />
        </>

    )
}

export default Home;
