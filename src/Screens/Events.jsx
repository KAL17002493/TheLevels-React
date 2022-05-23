import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <div>
        <div>
            
            <Container className="mt-5 text-center">
                <Row>
                    <h1>Events</h1>
                    <h6 className="mt-3">We offer large variety of menus for different events such as Weddings, Corporate, Birthdays, Hens and Stags</h6>
                </Row>

                <Row className="my-2"></Row>

                <Row className="textBox">
                    <h3 className="mb-3">Weddings...£30 per person</h3>
                    <h4>To Start</h4>
                    
                      <ul>
                        <li>Chicken Liver Parfair, Melba Toast, Rocket, Beetroot Salsa Traditional Lentil Soup</li>
                      </ul>

                      <h4>To Follow</h4>
                      <ul>
                      <li>Skin-on Pan Fried Chicken Supreme, Creamy White Wine Reduction</li>
                      <li>Red Onion, Feta & Balsamic Tart Tatin</li>
                      <li>Pan Roasted Duck Breast, Goose Fat Roasted Potatoes, Celeriac Puree, Salsify Crisps (+5 Supplement)</li>
                      <li>Black Treacle Marinated Pork Tenderloin</li>
                      </ul>

                      <h4>To Finish</h4>
                      <ul>
                      <li>White Chocolate Cheesecake, Summer Berry Compote, Honeycombe</li>
                      <li>Eton Mess</li>
                      <li>Sticky Toffee Pudding, Butterscotch Sauce</li>
                      </ul>
                </Row>

                <Row className="my-4"></Row>

                <Row className="textBox">
                    <h3 className="mb-3">Weddings...£33 per person</h3>
                    <h4>To Start</h4>
                    
                      <ul>
                        <li>Roasted Red Pepper & Tomato Soup served with Herb Croutons Hot Smoked Salmon Nicoise Salad</li>
                      </ul>

                      <h4>To Follow</h4>
                      <ul>
                      <li>Traditional Somerset Roast Beef with Homemade Yorkshire Pudding & Rich Beef Jus</li>
                      <li>Chicken Ballotine Stuffed with Sage & Pancetta</li>
                      <li>Beetroot & Goats Cheese Wellington (vg)</li>
                      </ul>

                      <h4>To Finish</h4>
                      <ul>
                      <li>White Chocolate Cheesecake, Summer Berry Compote, Honeycombe</li>
                      <li>Chocolate Brownie with Freeze Dried Strawberries & Vanilla Ice Cream</li>
                      </ul>
                </Row>

                <Row className="my-4"></Row>

                <Row className="textBox">
                    <h3 className="mb-3">Corporate...£12 per person</h3>
                  
                      <h4>Buffer</h4>
                      <ul>
                      <li>Selection of Sandwiches (GFO VEO)</li>
                      <li>Scones with Jam & Clotted Cream (GFO)</li>
                      <li>Selection of Individual Cakes (GFO)</li>
                      <li>Tea & Coffee</li>
                      </ul>
                </Row>

                <Row className="my-4"></Row>

                <Row className="textBox">
                    <h3 className="mb-3">Corporate...£21.50 per person</h3>
                  
                      <h4>Buffer</h4>
                      <ul>
                      <li>Selection of Sandwiches (GFO VEO)</li>
                      <li>Puff Pastry Caskets with Smoked Salmon & Cream Cheese</li>
                      <li>Blue Swimmer Crab & Choux Dauphines</li>
                      <li>Vegetable & Miso Spring Rolls</li>
                      <li>Red Onion & Caramelised Goats Cheese Mini Tarts (GFO VEO)</li>
                      <li>Mini Fish & Chips on a stick</li>
                      <li>Lemon and Coriander Chicken Skewers</li>
                      <li>Mini Pork & Black Pudding Pies</li>
                      <li>Chicken Thighs Stuffed with Hogs Pudding</li>
                      <li>Marinated Mini Mushrooms & Vegetables Skewer (VE)</li>
                      <li>Fennel, Apple & Tofu Sausage (VE)</li>
                      </ul>
                </Row>

                <Row className="my-4"></Row>

                <h6 className="mt-3">Contact us for more information 07848 944477</h6>
            </Container>
        </div>

    </div>
  )
}

export default Events