import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from '../components/Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />			
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter> 
  );
}

export default App;