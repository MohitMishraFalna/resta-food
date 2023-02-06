import './App.css';
import About from './components/about/About';
import Services from './components/services/ServiceContainer';
import Menu from './components/menu/Menu';
import Team from './components/team-member/Team';
import Booking from './components/booking/Booking';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/error-page/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/resta-food'>
        <Routes>
          <Route index path='/resta-food' element={<Home />} />
          <Route index path='/home' element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="menu" element={<Menu />} />
          <Route path="booking" element={<Booking />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

// animation for the pate div
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.animClass');

  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight;
  
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;
  
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('slideUpClass');
    }else{
      reveals[i].classList.remove('slideUpClass');
    }
  }
}

export default App;
