import logo from './logo.svg';
import './App.css';

//Components
import Header from './Components/Header'

//import screens
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
<div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
          </Routes>
        <Footer />
      </Router>
   </div>
  );
}

export default App;
