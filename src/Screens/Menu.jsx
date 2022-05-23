import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <div>
            
            <Container className="mt-5 text-center">
              <h1 className='mb-5'>Menu</h1>
                <Row className="textBox">
                    <h3 className="mb-3">Dinner Parties...£41.99</h3>
                    <h4>To Start</h4>
                    
                      <ul>
                        <li>Chicken Liver Parfait, Date Chutney, Melba Toast</li>
                        <li>Beetroot & Goats Curd Tart</li>
                        <li>Smoked Mackerel Pate, Celeriac Remoulade, Crostini</li>
                        <li>Crispy Belly Pork, Apple Puree, Black Pudding Crumb</li>
                      </ul>

                      <h4>To Follow</h4>
                      <ul>
                      <li>Chicken Supreme, Fondant Potato, Curly Kale, Leek & Whisky Cream Sauce</li>
                      <li>Pan Roasted Pork Chop, Roasted Root Vegetables, Sauteed Savoy Cabbage, Apple & Bacon, Cider & Mustard Jus</li>
                      <li>Pan Roasted Duck Breast, Goose Fat Roasted Potatoes, Celeriac Puree, Salsify Crisps (+5 Supplement)</li>
                      <li>Pan Roasted Cod Loin, Potato Discs, Buttered Greens, Watercress Hollandaise</li>
                      <li>Wild Mushroom Risotto with Parmesan Cheese</li>
                      </ul>

                      <h4>To Finish</h4>
                      <ul>
                      <li>White Chocolate & Raspberry Cheesecake, Raspberry Coulis </li>
                      <li>Chocolate Brownie, Chocolate Sauce, Vanilla Ice Cream</li>
                      <li>Selection of Local Cheese, Cheese Biscuits, Chutney, Grapes & Apple (+5 Supplement)</li>
                      <li>Apple Crumble, Vanilla Ice Cream </li>
                      </ul>
                </Row>

                <Row className="my-4"></Row>

                <Row className="textBox">
                    <h3 className="mb-3">Christmas Parties...£41.99</h3>
                    <h4>To Start</h4>
                    
                      <ul>
                        <li>Spiced Butternut Squash & Coconut Soup with Herb Crouton (VG)</li>
                        <li>King Prawn Cocktail, Homemade Marie Rose Sauce, Fresh Brown Bread & Somerset Butter</li>
                        <li>Goats’ Cheese & Beetroot Salad – Served with Crispy Fried Ham Bonbon, Balsamic Jelly, Honeycombe</li>
                        <li>Pork & Rabbit Rillette – A Course Game Terrine, Served with Apple & Stout Chutney, Warm Rosemary Bread</li>
                      </ul>

                      <h4>To Follow</h4>
                      <ul>
                      <li>Roasted Sirloin of Beef, Herb Roasted Potatoes in Goose Fat, Yorkshire Pudding, Roasted Root Veg & Shallot, Traditional Beef Gravy</li>
                      <li>Escalope of Turkey, Apricot & Cranberry Stuffing, Bread Sauce & Trimmings</li>
                      <li>Pan Roasted Seabass, Sautéed Baby Potatoes, Chorizo & Red Onion, Spinach & Dill Butter</li>
                      <li>Sweet Potato, Spinach & Chickpea Moroccan Tagine, Buttered Lemon & Coriander Couscous (V) </li>
                      <li>Roast Fillet of Venison (Served Pink) Spiced Red Cabbage in Red Wine, Wild Mushroom Reduction, Mustard Mash</li>
                      </ul>

                      <h4>To Finish</h4>
                      <ul>
                      <li>Spiced Poached Pears, Homemade Pomegranate Sorbet, Candied Sage & Hazelnut Shard (VG)</li>
                      <li>Christmas Pudding & Brandy Sauce</li>
                      
                      <li>Cheese Board – Selection of 3 Somerset Cheeses, Grapes & Apple Batons, Homemade Quince Jam, Biscuits</li>
                      </ul>
                </Row>
            </Container>
        </div>

    </div>
  )
}

export default Menu