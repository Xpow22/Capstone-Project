import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginAdmin from './page/Admin/loginAdmin';
import LayoutAdmin from './component/layoutAdmin';
import DashboardAdmin from './page/Admin/dashboardAdmin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/" element={<LayoutAdmin />}>
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
