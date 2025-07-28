import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/test' element={<Test />} />
        {/* <Route path="/book" element={<Book />} /> */}
        {/* <Route path="/goal" element={<Goal />} /> */}
        {/* <Route path="/community" element={<Community />} /> */}
      </Routes>
    </BrowserRouter>
  );
}