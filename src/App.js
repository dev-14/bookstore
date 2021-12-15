import React from 'react';
//import LoginNav from './components/LoginNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';
import Login from './templates/Login';
import Register from './templates/Register';
import UserDashboard from './templates/UserDashboard';
import SupervisorDashboard from './templates/SupervisorDashboard';
import AdminDashboard from './templates/AdminDashboard';
import Books from './templates/Books';
import Users from './templates/Users';
import Categories from './templates/Categories';
import Logout from './templates/Logout';
import Cart from './templates/Cart';

function App() {
  return (
    <div className="App" style={{maxWidth: '100%'}}>
      {/* <LoginNav /> */}

      <main className="form-signin">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element={<Login />} />
            <Route path ="/supervisorDashboard" element={<SupervisorDashboard />} />
            <Route path ="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/books" element={<Books />} />
            <Route path="/users" element={<Users />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </main>

    </div>
  );
}

export default App;
