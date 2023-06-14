import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pagenotfound from './pages/Pagenotfound'
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import Blog from './components/dashy/Blog';
import Terms from './components/dashy/Terms';
import Site from './components/dashy/Site';


function App() {
  return (
    <>
    
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
       
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/category" element={<Category/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/terms" element={<Terms/>}/>
       <Route path="/site" element={<Site/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
