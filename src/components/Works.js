import React from 'react'
import { Container, Row, Col, Image, Pagination} from 'react-bootstrap'

const worksData = [
    {
      id: 1,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley1.JPG'),
      title: 'Lonely Path',
      subtitle: 'Web Design'
    },
    {
      id: 2,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley2.JPG'),
      title: 'Photographer Girl',
      subtitle: 'Branding'
    },
    {
      id: 3,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley3.JPG'),
      title: 'The Difference',
      subtitle: 'Web Design'
    },
    {
      id: 4,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley4.JPG'),
      title: 'Nature Patterns',
      subtitle: 'Branding'
    },
    {
      id: 5,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley5.JPG'),
      title: 'The Difference',
      subtitle: 'Photography'
    },
    {
      id: 6,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley6.JPG'),
      title: 'Winter Sonata',
      subtitle: 'Web Design'
    },
    {
      id: 7,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley7.JPG'),
      title: 'Lonely Path',
      subtitle: 'Branding'
    },
    {
      id: 8,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley8.JPG'),
      title: 'Appreciation',
      subtitle: 'Photography'
    },
    {
      id: 9,
      link: 'https://www.google.com',
      image: require('../assets/images/bentley9.JPG'),
      title: 'Happy Days',
      subtitle: 'Web Design'
    }
]

let active = 2
let items = []
for (let number = 1; number <= 5; number++) {
    items.push (
        <Pagination.Item key= {number} active={number === active}>
            {number}
        </Pagination.Item>
    )
}

function Works() {
    return (
        <section id='works' className='block works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <div className='subtitle'>our awesome works</div>
                </div>
                <Row className='portfoliolist'>
                    {
                        worksData.map(works => {
                            return (
                                <Col sm={4} key={works.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={works.link}>
                                            <Image src={works.image}/>
                                            <div className='label text-center'>
                                                <h3>{works.title}</h3>
                                                <p>{works.subtitle}</p>    
                                            </div>
                                        </a>               
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    )
}

export default Works
