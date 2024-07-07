import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '/src/contexts/User.context';

const PortfolioHeader = () => {
  const { token, handleLogout } = useUser();

  return (
    <header className='flex justify-between items-center p-6 border-b border-gray-300 bg-white shadow-sm'>
      <h1 className='text-2xl font-bold text-gray-800'>Corentin</h1>
      <nav>
        {token ? (
          <>
            <Link to="/add_project" className="button">Modifier mes projets</Link>
            <button onClick={handleLogout} className="button">Déconnexion</button>
          </>
        ) : (
          <Link to="/login" className="button">Se Connecter</Link>
        )}
      </nav>
    </header>
  );
};

export default PortfolioHeader;
