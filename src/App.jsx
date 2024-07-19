import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transpose from './components/Transpose/Transpose';
import Footer from './components/Footer/Footer';
import Hero from './components/Navbar/Hero';
import Scales from './components/Scales/Scales';
import Docs from './components/Docs/Docs'

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path="/" element={<Scales />} />
        <Route path="/transpose" element={<Transpose />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;