import logo from './logo.svg';
import './App.css';
import {Nav} from 'react-bootstrap'
import {Link,Route ,BrowserRouter as Router,Switch} from 'react-router-dom'
import Home from './Home';
import User from './Users';
import About from './About'
function App() {
  return (
    <div className="App">
      <Router>

    
     <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to='/users'>User</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to='/about'>About</Link></Nav.Link>
  </Nav.Item>
</Nav>
<Switch>


<Route  component={User} path='/users'/>
<Route exact component={About} path='/about'/>
<Route exact component={Home} path='/'/>
</Switch>
</Router>
    </div>
  );
}

export default App;

//1.add user route
//2.fetch api data
//3.
