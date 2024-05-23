import React from 'react'
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Works from './Works';
import Teams from './Teams';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';


function SinglePageWebsite() {
    return (
        <>
            <header id='header' >
                <Header />
            </header>
            <main>
                <Hero />
                <About />
                <Services />
                <Works />
                <Teams />
                <Testimonials />
                <Pricing />
                <Blog />
                <Contact />
            </main>
            <footer id='footer'>
                <Footer />
            </footer>
        </>
    )
}

export default SinglePageWebsite
