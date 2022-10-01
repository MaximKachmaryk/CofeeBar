import Header from './Header/Header';
import OurCofee from './OurCofee/OurCofee';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main/Main';
import Footer from './footer/Footer';
import About from './About/About';
import Nav from './Nav/Nav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        
        <Header />

        <Routes>

          <Route path="/" component={<App />}>
            <Route path="header" element={<Main />} />
            <Route path="ourcoffe" element={<OurCofee />} />
            <Route path="Foryourpleasure" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
