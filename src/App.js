import './App.css';
import './responsive.css';
import Home from './Home';
import Contact from './Contactus';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import Service from './Service';
import Product from './Product';
import Career from './Career';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Career' element={<Career/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
