import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderWithRoutes from './HeaderWithRoutes';
import HeroWithRoutes from './HeroWithRoutes';
import AboutWithRoutes from './AboutWithRoutes';
import ServicesWithRoutes from './ServicesWithRoutes';
import Works from './Works';
import Teams from './Teams';
import TestimonialsWithRoutes from './TestimonialsWithRoutes';
import PricingWithRoutes from './PricingWithRoutes';
import Blog from './Blog';
import ContactWithRoutes from './ContactWithRoutes';
import Footer from './Footer';


function WebsiteWithRoutes() {
    return (
        <>
            <Router>
                <header id='header' >
                    <HeaderWithRoutes />
                </header>               
                    <main>
                        <Routes>
                            <Route exact path='/' element={<HeroWithRoutes />} />
                            <Route exact path='/about' element={<AboutWithRoutes />} />
                            <Route exact path='/services' element={<ServicesWithRoutes />} />
                            <Route exact path='/works' element={<Works />} />
                            <Route exact path='/teams' element={<Teams />} />
                            <Route exact path='/testimonials' element={<TestimonialsWithRoutes />} />
                            <Route exact path='/pricing' element={<PricingWithRoutes />} />
                            <Route exact path='/blog' element={<Blog />} />
                            <Route exact path='/contact' element={<ContactWithRoutes />} />
                        </Routes>
                    </main>
                <footer id='footer'>
                    <Footer />
                </footer>
            </Router>
        </>
    )
}

export default WebsiteWithRoutes
