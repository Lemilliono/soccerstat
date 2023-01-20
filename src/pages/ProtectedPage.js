import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';

const ProtectedPage = () => {
    const { user, isLoading, isAuthenticated, checkAuth } = useAuth();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div>Please login to view this page</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>This is a protected page</p>
        </div>
    );
}

export default ProtectedPage;
