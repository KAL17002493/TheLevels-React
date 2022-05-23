import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../Images/TheLevelsLogo.png'

function Home() {
  return (
    <div>
        <div className="backgroundHome">
            
            <Container className="mt-4 text-center">
                <Row>
                    <Col className="mt-5">
                        <img src={Logo} alt="Logo" width={250}/>
                    </Col>
                </Row>

                <Row className="m-5"></Row>

                <Row className="mt-5 mb-5">
                
                    <Col>
                        <div className="d-grid gap-2 m-2">
                            <Button as={Link} to="/menu" variant="success">Menu</Button>
                        </div>

                        <div className="d-grid gap-2 m-2">
                            <Button as={Link} to="/gallery" variant="dark">Gallery</Button>
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </div>

    </div>
  )
}

export default Home