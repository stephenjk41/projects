import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import './App.css';
import './About.css'


function About() {
  return (
    <div className="main-page">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <br />
            <br />
            <Image src="corb_about_pic.jpeg" fluid />
            <br />
          </Col>
          <Col>
          <br />
            <p>I am a producer, mix engineer, and artist from West Orange, New Jersey. Music has always been a part of my life. My mother was a piano teacher since before I was born and had me banging on the keys straight out of the womb. I played the piano up until sophomore year of high school (while dabbling in guitar, flute, violin, and the drums in that time period as well) where, at that point, I just thought I was “too cool” for it at the time and took a break from lessons. Right around that time is when I started making beats while my friends would freestyle over them and that’s where this really began (probably around 2014/2015?). I did it for fun here and there for a few years, while also working in sales with Vector Marketing from 2016-2020. There I learned the true definitions of hard work and pursuing your dreams, while also meeting some of the most impressive people I know today. While in college, still figuring out what I really wanted to do for the rest of my life, I got an apartment with one of my fraternity brothers, Josh Brody (aka BIG Brody) who I’d constantly show new beats and freestyle on them with. That’s when I started taking this seriously and pursuing this dream (late 2018), making beats on a daily basis, purchasing a recording setup, and started recording & working on everything I do now, daily. While still at school, I would send beats to local artists and that’s how I reconnected Lord the Icon (who I used to be next door neighbors with for at least 5 years) & AlottaCa$h (who I knew from high school) and started recording with them constantly from that time on. I dropped out of NJIT, ditching mechanical engineering and business, finally realizing it wasn’t the place for me and took a year long break where Lord the Icon and myself opened our first recording studio, More Time Studios in Paterson, New Jersey. I decided to attend SAE institute in New York City & earn a diploma in Audio Technology and I’ve turned my passion and dream into something I can live off of and do every day. I love the people I have around me and I love what I do and am so thankful for all the opportunity I’ve been given so far. This website serves as a hub for content & my portfolio. Please enjoy ❤️</p>
            <br />
            <p>Ps. Fun fact, I do absolutely everything in FL studio</p>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default About;
