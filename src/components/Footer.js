import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        })
    }

    return (
        <Container fluid>
            <div className='copyright'>&copy; 2024 Corporate. All Right Reserved</div>
            <div className='socials'>
                <ul>
                    <li><a href='https://facebook.com'><i className='fab fa-facebook-f'/></a></li>
                    <li><a href='https://twitter.com'><i className='fab fa-twitter'/></a></li>
                    <li><a href='https://linkedin.com'><i className='fab fa-linkedin'/></a></li>
                </ul>
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
        </Container>
    )
}

export default Footer
