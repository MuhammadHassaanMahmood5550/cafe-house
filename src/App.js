import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Footer from './components/Footer'
import Home from './components/Home';
import Todayspecial from './components/Todayspecial';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
    {/* <Navbar></Navbar> */}
    <Switch>
      <Route exact path="/">
    <Home></Home>
    </Route>

    <Route exact path="/today">
    <Todayspecial></Todayspecial>
    </Route>

    <Route exact path="/menu">
    <Menu></Menu>
    </Route>

    <Route exact path="/contact">
    <Contact></Contact>
    </Route>

    </Switch>
    <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
