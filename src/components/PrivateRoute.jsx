import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // or use context if available

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
