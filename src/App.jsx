import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transpose from './components/Transpose/Transpose';
import Footer from './components/Footer/Footer';
import Hero from './components/Navbar/Hero';
import Scales from './components/Scales/Scales';
import Docs from './components/Docs/Docs';
import TextForm from './components/TextForm/TextForm';
import Contact from './components/Contacts/Contact';

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path="/" element={<Scales />} />
        <Route path="/transpose" element={<Transpose />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/textform" element={<TextForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;