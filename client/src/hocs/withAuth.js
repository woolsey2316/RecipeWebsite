import { AuthContext } from '../Context/AuthContext';
import Login from '../../pages/login'
const withAuth = Component => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)

    // If user is not logged in, return login component
    if (!isAuthenticated) {
      return (
        <Login />
      );
    }

    if (!roles.includes(user.role)) {
      return (
        <Login />
      );
    }

    // If user is logged in, return original component
    return (
      <Component {...props} />
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;