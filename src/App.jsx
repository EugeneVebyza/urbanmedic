import './App.css';
import LoginPage from './pages/Login/LoginPage';
import UsersPage from './pages/UsersPage/UsersPage';

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  )
}

export default App;
