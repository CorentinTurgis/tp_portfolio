import React from 'react';

const PortfolioContact = () => {
  return (
    <footer className='p-12'>
      <h2 className='font-bold text-xl mb-8'>Me contacter</h2>
      <div className='flex justify-between'>
        <div>
          <p>Turgis Corentin</p>
          <p>5 rue de maringues</p>
          <p>63000</p>
          <p>Ma ville</p>
        </div>
        <div className='mr-48'>
          <p>Mon telephone</p>
          <p>Mon e-mail</p>
          <p>Autre...</p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioContact;
