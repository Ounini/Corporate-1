import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const servicesData = [
    {
        id: 1,
        icon: 'fas fa-clone',
        title: 'Reponsive Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    },
    {
        id: 2,
        image: 'fas fa-snowflake',
        title: 'Creative Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    },
    {
        id: 3,
        image: 'fas fa-plug',
        title: 'SEO Optimized',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',       
    },
    {
        id: 4,
        image: 'fas fa-desktop',
        title: 'Retina Ready',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    },
    {
        id: 5,
        image: 'fas fa-trophy',
        title: 'Browser Compatibility',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    },
    {
        id: 6,
        image: 'fas fa-life-ring',
        title: 'Customer Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    },
]

function ServicesWithRoutes() {
    return (
        <section id='services' className='block services-block pad-top'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>services we provide</div>
                </div>
                <Row>
                    {
                        servicesData.map(services => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon} />
                                    </div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default ServicesWithRoutes
