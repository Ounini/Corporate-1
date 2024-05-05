import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const teamsData = [
    {
      id: 1,
      image: require('../assets/images/bentley1.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Gabriel Hart',
      designation: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 2,
      image: require('../assets/images/bentley2.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Antony',
      designation: 'Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 3,
      image: require('../assets/images/bentley3.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Nicholas Perry',
      designation: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 4,
      image: require('../assets/images/bentley4.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sarah Wills',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 5,
      image: require('../assets/images/bentley5.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sophia Pitt',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 6,
      image: require('../assets/images/bentley6.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Taylor Lopez',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 7,
      image: require('../assets/images/bentley7.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Ryan Giggs',
      designation: 'Content Writer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 8,
      image: require('../assets/images/bentley8.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Smith',
      designation: 'SEO Expert',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    }
]

function Teams() {
    return (
        <section id='teams' className='block teams-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Teams</h2>
                    <div className='subtitle'>some of our experts</div>
                </div>
                <Row>
                    {
                        teamsData.map(teams => {
                            return (
                                <Col sm={3} key={teams.id}>
                                    <div className='image'>
                                        <Image src={teams.image} alt='Image' />
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul>
                                                    <li><a href={teams.fbLink}><i className="fab fa-facebook-f" /></a></li>
                                                    <li><a href={teams.twitterLink}><i className="fab fa-twitter" /></a></li>
                                                    <li><a href={teams.linkedinLink}><i className="fab fa-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='content'>
                                            <h3>{teams.name}</h3>
                                            <span className='designation'>{teams.designation}</span>
                                            <p>{teams.description}</p>
                                        </div>
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

export default Teams
