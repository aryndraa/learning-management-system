import {useEffect} from 'react'
import { useNavigate } from 'react-router'

const AuthMiddleware = ({ isAuth, children, excludeRoutes = []}) => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    useEffect(() => {
        if  (!isAuth && !excludeRoutes.includes(currentPath)) {
            navigate('/login');
        }
    }, [isAuth, excludeRoutes, currentPath]);

    return children;
}

export default AuthMiddleware