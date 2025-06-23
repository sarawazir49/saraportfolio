
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer'
import CV from "./pages/cv";

function App() {
  return (

 <HashRouter>
 <div>
 <Header/>
 </div>
<div className="container">
        <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/About" exact element={<About />}/>
        <Route path = "/Contact" exact element={<Contact />}/>
        <Route path = "/Cv" exact element={<CV />}/>
        </Routes>
     
        </div>
        <Footer/>
      </HashRouter>
  );
};


export default App;
