import { Navigate} from 'react-router-dom';
import { useUser } from './useUser';
import { UserInfoPage } from '../pages/UserInfoPage';

export const PrivateRoute = ({ ...props }) => {
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Wrap the <Route> in a <Routes>
  return (
         <UserInfoPage />
  );
};
