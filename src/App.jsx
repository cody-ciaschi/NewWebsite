import { useState } from 'react';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Projects from './components/projects';
import { Container } from 'react-bootstrap';
import BackgroundImage from './assets/background.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='vh-100 d-flex flex-column' fluid="l">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App
