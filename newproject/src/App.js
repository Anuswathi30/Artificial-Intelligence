
import './App.css'
import Home from '../src/Pages/Home/Home'
import Training from '../src/Pages/Training/Training';
import Contact from '../src/Pages/contact/contact'

import{BrowserRouter as Router ,Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/Training'element={<Training/>}/>
          <Route path='/Contact'element={<Contact/>}/>
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
