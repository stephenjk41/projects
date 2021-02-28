import React from 'react';
import {Row, Col, Container, Carousel, Image} from 'react-bootstrap'
import './App.css';
import './portfolio.css'


function Portfolio() {
  return (
      <Container>
        <Row>
          <Col>
            <Carousel className="car">
            <Carousel.Item className="item">
                <a href="https://distrokid.com/hyperfollow/corbonnabeat/more-time-vol-1-2" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cover-art"
                    src="rsz_more_time_vol_1.jpg"
                    alt="Euphoria EP - Lil Rover"
                    fluid
                  />
                </a>
                
              </Carousel.Item>
              
              <Carousel.Item className="item">
                <a href="https://album.link/us/i/1531257174" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cover-art"
                    src="euphoria.jpg"
                    alt="Euphoria EP - Lil Rover"
                    fluid
                  />
                </a>
                
              </Carousel.Item>
              <Carousel.Item className="item">
                <a href="https://song.link/us/i/1478505560" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cover-art"
                    src="money.jpg"
                    alt="Euphoria EP - Lil Rover"
                    fluid
                  />
                </a>
                
              </Carousel.Item>
              <Carousel.Item className="item">
                <a href="https://album.link/us/i/1530495406" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cover-art"
                    src="riseof2.jpg"
                    alt="Euphoria EP - Lil Rover"
                    fluid
                  />
                </a>
                
              </Carousel.Item>
              <Carousel.Item className="item">
                <a href="https://song.link/us/i/1471856819" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cover-art"
                    src="coco_butter.jpg"
                    alt="Euphoria EP - Lil Rover"
                    fluid
                  />
                </a>
                
              </Carousel.Item>
              <Carousel.Item className="item">
                <a href="https://song.link/us/i/1505717961" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cover-art"
                    src="change_the_world.jpg"
                    alt="Euphoria EP - Lil Rover"
                    fluid
                  />
                </a>
                
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>
      </Container>
  );
}

export default Portfolio;
