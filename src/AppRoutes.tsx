import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard_book" element={<Dashboard />} />
        {/* <Route path='/test' element={<Test />} /> */}
        {/* <Route path="/book" element={<Book />} /> */}
        {/* <Route path="/goal" element={<Goal />} /> */}
        {/* <Route path="/community" element={<Community />} /> */}
      </Routes>
    </BrowserRouter>
  );
}