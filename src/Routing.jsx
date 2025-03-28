import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Pages/Pagenotfound'
import Blogs from "./Pages/Blogs";
import Home from './Pages/Home'
export default function App1() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);