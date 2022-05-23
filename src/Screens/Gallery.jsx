import React from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'

import I1 from '../Images/Gallery/1.jpg'
import I2 from '../Images/Gallery/2.jpeg'
import I3 from '../Images/Gallery/3.jpeg'
import I4 from '../Images/Gallery/4.jpeg'
import I5 from '../Images/Gallery/5.jpeg'
import I6 from '../Images/Gallery/6.jpg'
import I7 from '../Images/Gallery/7.jpg'
import I8 from '../Images/Gallery/8.jpg'

function Gallery() {
  return (
    <div>
        <div className='backgroundBooking'>
            <Container className="mt-5">
                <Row className='text-center'>
                  <h1>Gallery</h1>
                </Row>

                <Row className="m-4"></Row>

                <Row className="text-center my-3">
                  <Col><img className="block-example border border-dark" src={I1} alt="I1" width={130} height={130}/></Col>
                  <Col><img className="block-example border border-dark" src={I2} alt="I2" width={130} height={130}/></Col>
                </Row>

                <Row className="text-center my-3">
                  <Col><img className="block-example border border-dark" src={I3} alt="I3" width={130} height={130}/></Col>
                  <Col><img className="block-example border border-dark" src={I4} alt="I4" width={130} height={130}/></Col>
                </Row>

                <Row className="text-center my-3">
                  <Col><img className="block-example border border-dark" src={I5} alt="I5" width={130} height={130}/></Col>
                  <Col><img className="block-example border border-dark" src={I6} alt="I6" width={130} height={130}/></Col>
                </Row>

                <Row className="text-center my-3">
                  <Col><img className="block-example border border-dark" src={I7} alt="I7" width={130} height={130}/></Col>
                  <Col><img className="block-example border border-dark" src={I8} alt="I8" width={130} height={130}/></Col>
                </Row>

            </Container>
        </div>

    </div>
  )
}

export default Gallery