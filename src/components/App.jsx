import HomePage from './HomePage.jsx';
import { Link, Route, Routes, NavLink, useNavigate, useLocation, Router } from 'react-router-dom';
import { Profile } from './Profile.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile">
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="*" element={<h1>User not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
