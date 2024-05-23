import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const pricingData = [
    {
      id: 1,
      plan: 'Basic',
      price: '£49',
      features: ['Wireframing', 'Visual Design', '5 pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.google.com'
    },
    {
      id: 2,
      plan: 'Premium',
      price: '£149',
      features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      plan: 'Ultimate',
      price: '£349',
      features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.twitter.com'
    }
]

function PricingWithRoutes() {
    return (
        <section id='pricing' className='block pricing-block pad-top'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Pricing &amp; plans</h2>
                    <div className='subtitle'>Check our pricing & plans </div>
                </div>
                <Row>
                    {
                        pricingData.map(pricing => {
                            return (
                                <Col sm={4} key={pricing.id}>
                                    <div className='heading'>
                                        <h3>{pricing.plan}</h3>
                                        <span className='price'>{pricing.price}</span>
                                    </div>
                                    <div className='content'>
                                        <ListGroup as="ul">
                                            {
                                                pricing.features.map((feature, index) => {
                                                    return (
                                                        <ListGroup.Item as="li" key={index}>
                                                            {feature}
                                                        </ListGroup.Item>
                                                    )
                                                })
                                            }
                                        </ListGroup>
                                    </div>
                                    <div className='btn-holder'>
                                        <a href={pricing.link} className='btn btn-primary' >Order Now</a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default PricingWithRoutes
