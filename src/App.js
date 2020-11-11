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
    <Nav.Link><Link to='/user'>User</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to='/about'>About</Link></Nav.Link>
  </Nav.Item>
</Nav>
<Switch>


<Route exact component={User} path='/user'/>
<Route exact component={About} path='/about'/>
<Route exact component={Home} path='/'/>
</Switch>
</Router>
    </div>
  );
}

export default App;

//serviceWorker in public folder
//servciveworker in Src folder
//register SW file
//check SW geneerated or not

//service worker works after when we make the build
//build moves the serviceworker file from src to public folder


//we have made 2 service worker because we want it to work before making the build


//the hole game revolves around cache m/m

//1.write code to set files in cache
//2. write code for get files from cache
//3.test offline mode

//we can also make our app offline by going in serviceworker and there is option for offline

//when we reload any file it load some files in network and because of these files our application works
//so we can cache those files so our app also runs on offline mode
//then data will show from cache