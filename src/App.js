
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer'
function App() {
  return (

 <BrowserRouter>
 <div>
 <Header/>
 </div>
<div className="container">
        <Routes>
        <Route path = "/Home" element={<Home />}/>
        <Route path = "/About" exact element={<About />}/>
        <Route path = "/Contact" exact element={<Contact />}/>
        </Routes>
     
        </div>
        <Footer/>
      </BrowserRouter>
  );
};


export default App;
