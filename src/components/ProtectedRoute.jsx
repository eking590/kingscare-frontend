// frontend/src/components/ProtectedRoute.jsx
import { useGetCurrentUserQuery } from '../features/api/apiSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { data: currentUser, isLoading } = useGetCurrentUserQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;