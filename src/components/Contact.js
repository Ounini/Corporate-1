import React from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'

function Contact() {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact us</h2>
                    <div className='subtitle'>get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required/>
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required/>
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as='textarea' placeholder='Enter a message' required/>
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126844.06348606381!2d3.3488896!3d6.537216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e0818f71991%3A0x3aa0ed79528bc2cf!2sOshodi%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1714921467267!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope" />
                            wittyways1216@gmail.com
                        </li>
                        <li>
                            <i className="fas fa-phone" />
                            +234-706-998-9300
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt" />
                            Oshodi, Nigeria
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Contact
