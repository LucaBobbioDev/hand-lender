import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LandingPage from './components/layout/LandingPage';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Forum from './components/pages/Forum';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register1 from './components/pages/Register1'
import Register2 from './components/pages/Register2'
import Create from './components/pages/Create'

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Choose from './components/pages/Choose';

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
              <Route path="/Register1" element={<Register1/>}/>
              <Route path="/Register2" element={<Register2/>}/>
              <Route path="/Create" element={<Create/>}/>
              <Route path="/Choose" element={<Choose/>}/>
          </Routes>
        </Container>  
      <Footer />
    </Router>
  );
}