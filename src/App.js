import  React, {useState} from 'react';
import './App.css';
import logo from './navlogo.png';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import PuppyPage from './pages/PuppyPage';
import AboutPage from './pages/About/AboutPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import PuppiesPage from './pages/PuppiesPage';
import ShippingPage from './pages/ShippingPage';
import RegisterPage from './pages/RegisterPage';
import PaymentPage from './pages/PaymentPage';
import { BrowserRouter as  Router, Route, Link, NavLink } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import SigninPage from './pages/SigninPage';
import AboutCairnCare from './pages/About/CairnCare';
import AboutDiet from './pages/About/AboutDiet';
import ProfilePage from './pages/ProfilePage';
import ManagePage from './pages/ManagePage';
import AboutHomeRaised from './pages/About/AboutHomeRaised';
import Reservations from './pages/ReservationsPage';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/PuppiesPage', name: 'Puppies', Component: PuppiesPage },
  { path: '/GalleryPage', name: 'Gallery', Component: GalleryPage },
  { path: '/AboutPage', name: 'About', Component: AboutPage },
  { path: '/Contact', name: 'Contact', Component: ContactPage },
]

const App = () => {
  const [expanded, setExpanded] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
return (
  <div id="NaviBarStyle"> 
    <div>
  <Navbar  fixed="top" collapseOnSelect expand="lg"expanded={expanded} bg="light" variant="light">
  <Navbar.Brand ><Link to="/"><img src={logo} /> </Link></Navbar.Brand>
  <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto"  >
          {routes.map(route => (
            <Nav.Link
              onClick={() => setExpanded(false)}
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
  <Nav>
    {/*
  <NavDropdown.Divider />
  
  {userInfo ? (
              <Link to="/ProfilePage" onClick={() => setExpanded(false)}>{userInfo.name}</Link>
            ) : (
              <Link to="/SigninPage" onClick={() => setExpanded(false)}>Sign In / Register</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#"></Link>
                    <Link to="/ManagePage">Puppies</Link>
                  </li>
                </ul>
              </div>
            )}
    {/* <Nav.Link >
      <Link to="/SigninPage" >
      
      SignIn / Register
      </Link>
    </Nav.Link> */}
  </Nav>

</Navbar.Collapse>

</Navbar>
<div className="containertwo">
<Container>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                unmountOnExit
              >
               
                  <Component />
                
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
      </div>
</div>
<Route path="/ManagePage" component={ManagePage} />
<Route path="/puppy/:id" component={PuppyPage} />
<Route path="/ProfilePage" component={ProfilePage} />
<Route path="/About/AboutDiet" component={AboutDiet} />
<Route path="/About/AboutHomeRaised" component={AboutHomeRaised} />
<Route path="/ShippingPage" component={ShippingPage} />
<Route path="/About/AboutCairnCare" component={AboutCairnCare} />
<Route path="/SigninPage" component={SigninPage} />
<Route path="/deposit/:id?" component={DepositPage} />
<Route path="/PaymentPage" component={PaymentPage} />
<Route path="/Reservations" component={Reservations} />
<Route path="/RegisterPage" component={RegisterPage} />
</div>
  );
}

export default App;
