import "./styles/reset.scss";
import "./styles/global.scss";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage';
import Admin from './pages/Admin';


const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
        </Routes>
    </Router>
    </>
  );
};

export default App;