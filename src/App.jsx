import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from './pages/Index';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forotpassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;