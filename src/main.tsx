import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Linkedin from './linkedin/index.tsx'
import Github from './github/index.tsx'
import Home from './home/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/linkedin" element={<Linkedin />}/>
      <Route path="/github" element={<Github />}/>
      <Route path="*" element={<Home/>}/>
    </Routes>

  </BrowserRouter>
  
);