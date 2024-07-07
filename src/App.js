import React from 'react';
import { UserProvider } from './contexts/User.context';
import PortfolioPage from './components/PortfolioPage/Portfolio.page';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm/LoginForm";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PortfolioHeader from "./components/Header/PortfolioHeader";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <PortfolioHeader />
        <Routes>
          <Route path="/" element={<Navigate replace to="/portfolio" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
