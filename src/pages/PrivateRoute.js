import { Route } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to={{ pathname: '/login' }} />
                )
            }
        />
    );
};

export default PrivateRoute