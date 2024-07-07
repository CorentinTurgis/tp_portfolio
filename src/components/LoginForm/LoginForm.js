// LoginForm.js
import React, {useState} from 'react';
import {useUser} from '/src/contexts/User.context';
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleLogin} = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({email, password});
      navigate('/portfolio'); // Redirige vers /portfolio après une connexion réussie
    } catch (error) {
      console.error('Login failed:', error);
      // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>

      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>

      <button type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login
      </button>
    </form>
  );
}

export default LoginForm;
