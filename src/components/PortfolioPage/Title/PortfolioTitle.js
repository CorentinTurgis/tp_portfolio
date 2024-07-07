// src/components/PortfolioTitle.js
import React from 'react';
import avatar from '/src/assets/notarealperson.jpeg'

const PortfolioTitle = () => {
  return (
    <section className="border-b border-black flex">
      <img className="rounded-full border border-black h-24 w-24 m-12 content-center" src={avatar} alt="Avatar"/>
      <div className='content-center'>
        <h2 className='font-bold text-2xl'>Titre</h2>
        <p>Description du portfolio...</p>
      </div>
    </section>
  );
};

export default PortfolioTitle;
