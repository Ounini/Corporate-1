import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const blogData = [
    {
      id: 1,
      image: require('../assets/images/bentley1.JPG'),
      time: '15 Nov 2016',
      title: 'Coffee Lovers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/bentley2.JPG'),
      time: '10 Nov 2016',
      title: 'Tips for UI Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/bentley3.JPG'),
      time: '07 Nov 2016',
      title: 'Beautiful Day',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.twitter.com'
    }
]
  
function Blog() {
    return (
       <section id='blog' className='block blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Latest from Blog</h2>
                    <div className='subtitle'>get our latest news from blog</div>
                </div>
                <Row>
                    {
                        blogData.map(blog => {
                            return (
                                <Col sm={4}  key={blog.id}>
                                    <div className='holder'>
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <time>{blog.time}</time>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>
                                                   {blog.description}
                                                </Card.Text>
                                                <a href={blog.link} className='btn btn-primary'>
                                                    Read More <i className="fas fa-chevron-right" />
                                                </a>
                                            </Card.Body>
                                        </Card>
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

export default Blog
