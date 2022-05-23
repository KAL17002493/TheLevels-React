import React from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <div>
        <div className='backgroundBooking'>
            <Container className="mt-5">
                <Row className='text-center'>
                    <h1>Booking</h1>
                </Row>

                <Row className="m-4"></Row>

                <Row className="mt-3">
                  
                <Form>

                <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="text-light"></Form.Label>
                      <Form.Control type="string" placeholder="Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-light"></Form.Label>
                      <Form.Control type="string" placeholder="Last Name" />
                  </Form.Group>


                  <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="text-light"></Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-light"></Form.Label>
                      <Form.Control type="email" placeholder="Phone (Optional)" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="text-light"></Form.Label>
                      <Form.Control as="textarea" placeholder="Your Message including date, time, number of guessts and any other questions you might have" rows={3} />
                  </Form.Group>

                  <Button variant="primary" className='w-100 mt-3' type="submit">Submi</Button>
        </Form>
                </Row>

            </Container>
        </div>

    </div>
  )
}

export default Booking