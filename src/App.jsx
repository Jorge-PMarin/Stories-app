import { Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar/Navbar';
import Home from './Home/Home';
import Register from './Register/Register';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
