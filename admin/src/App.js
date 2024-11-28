import './App.css';
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Log from './pages/log/log';
import Request from './pages/request/request';
import Printer from './pages/printer/printer';
import AccountPopup from './components/accountPopup/accountPopup';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <div className='app-content'>
          <Routes>
            <Route path='/request' element={<Request />} />
            <Route path='/log' element={<Log />} />
            <Route path='/printer' element={<Printer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
