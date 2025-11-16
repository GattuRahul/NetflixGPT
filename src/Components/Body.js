import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Body;