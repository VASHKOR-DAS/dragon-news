import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <h2>Loading...</h2>
            // <progress className="progress w-56"></progress>
        );
    }


    if (user?.email && user?.uid) {
        return children;
    }

    // na thakle oi specific routes a gele login page a niye jabe
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;







    // eslint-disable-next-line
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;