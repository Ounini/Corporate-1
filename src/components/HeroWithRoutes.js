import React from 'react'
import { Carousel } from 'react-bootstrap'

var heroData = [
    {
      id: 1,
      image: require('../assets/images/bentley1.JPG'),
      title: 'The perfect design for your website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/bentley2.JPG'),
      title: 'Start Your Future Financial Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/bentley3.JPG'),
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ]

function HeroWithRoutes() {
    return (
        <section className='hero-block pad-down pad-top'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id} >
                                <img 
                                    className='d-block w-100'
                                    src={hero.image}
                                    alt={'slide ' + hero.id}
                                />
                                <Carousel.Caption>
                                    <h3>{hero.title}</h3>
                                    <p>{hero.description}</p>
                                    <a className='btn btn-primary' href={hero.link} >Learn More <i className="fas fa-chevron-right" /> </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </section>
    )
}

export default HeroWithRoutes
