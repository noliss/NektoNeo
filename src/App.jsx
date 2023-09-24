import "./styles/reset.scss";
import "./styles/global.scss";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AdminAuth from './pages/AdminAuth';
import NotFound from "./pages/NotFound";
import AdminPanel from "./pages/AdminPanel";


const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/admin" element={<AdminAuth/>}/>
          <Route exact path="/admin-panel" element={<AdminPanel/>} />
          <Route
              path="*"
              element={<NotFound />}
          />
        </Routes>
    </Router>
    </>
  );
};

export default App;