
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
function App() {
  return (
 
 
 <Router>
        <Routes>
        <Route path = '/Home' element={<Home/>}/>
        <Route path = '/About' element={<About/>}/>
        <Route path = '/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
  

  );
};


export default App;
