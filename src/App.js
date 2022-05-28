import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LandingPage from './components/layout/LandingPage';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Forum from './components/pages/Forum';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register'
import Create from './components/pages/Create'

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router> 
      <NavBar />
        <Container customClass="min-height">
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/Home" element={<Home/>}/> 
              <Route path="/Projects" element={<Projects/>}/> 
              <Route path="/Forum" element={<Forum/>}/> 
              <Route path="/Contact" element={<Contact/>}/> 
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Create" element={<Create/>}/>
          </Routes>
        </Container>  
      <Footer />
    </Router>
  );
}