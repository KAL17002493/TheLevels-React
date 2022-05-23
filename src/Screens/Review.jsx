import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Review() {
  return (

    <div>
        <div>
            
            <Container className="mt-5 text-center">
                <Row>
                    <h1>Reviews</h1>
                </Row>

                <Row className="my-4"></Row>

                <Row className="mt-3">
                    <p>Check our facebook page</p>

                    <div className="d-grid gap-2 my-2">
                        <Link to="https://www.facebook.com/JJKCateringLTD/reviews/?ref=page_internal" variant="success">Go to Facebook</Link>
                    </div>
                </Row>

                <Row className="mt-5">
                    
                </Row>
                <Row>
                 
                </Row>

            </Container>
        </div>

    </div>

  )
}

export default Review