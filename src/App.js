
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Componenets/Header';

import Home from './Screens/Home';
import About from './Screens/About';
import Booking from './Screens/Booking';
import Events from './Screens/Events';
import Gallery from './Screens/Gallery';
import Menu from './Screens/Menu';
import Review from './Screens/Review';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/booking" element={<Booking/>}/>
        <Route exact path="/events" element={<Events/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/review" element={<Review/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
