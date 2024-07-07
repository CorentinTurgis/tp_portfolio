// NotFoundPage.js
import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-xl mt-4">Cette page n'existe pas</p>
      <Link to="/portfolio" className="button">Retour</Link>
    </div>
  );
};

export default NotFoundPage;
