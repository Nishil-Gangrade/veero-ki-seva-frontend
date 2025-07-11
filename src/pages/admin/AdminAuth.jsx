// src/pages/admin/AdminAuth.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded admin login
    if (email === 'nishil@boss' && password === '123') {
      localStorage.setItem('isAdmin', true);
      navigate('/admin/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminAuth;
