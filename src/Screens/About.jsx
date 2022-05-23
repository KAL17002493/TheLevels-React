import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
        <div className='backgroundAbout'>
            <Container className="mt-5 text-center">
                <Row>
                    <h1>About Us</h1>
                </Row>

                <Row className="m-4"></Row>

                <Row className="mt-3 textBox">
                    <p className="mb-4">
                    We are a catering company based in heart of Somerset. Although our focus is weddings & fine dining dinner parties, we are more than happy to cater for any other event,  BBQ's, hog roasts, shooting parties, stag/hen parties & more
                    </p>
                    <p>
                    We like to use the best ingredients available to our customers, at any given time, so any of our sample menus are subject to change depending on the time of year. We work closely with local butchers, fruit & veg suppliers & fishmongers to uphold sustainable and seasonal menu choices. 
                    </p>
                </Row>

                <Row className="mt-5 textBox">
                <h3>Our Promise</h3>
                    <p>
                Here at The Levels Catering Company we are committed to making your special occasion truly one to remember. We do this by tailoring each menu to suit your individual requirements. 
                </p>
                </Row>

            </Container>
        </div>

    </div>
  )
}

export default About