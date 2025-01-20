import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthMiddleware from "./middlewares/AuthMiddleware.jsx";
import {Login} from "./pages/auth/Login.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import auth from './api/auth.js';
import { Home } from '../../student/src/pages/Home.jsx';

function App() {

  const hasLogin = auth.checkLoginStatus();
  
  return (
    <>
      <Router>
        <AuthMiddleware isAuth={hasLogin} excludeRoutes={['/auth/login']}  >

          <Routes>
            <Route
              path="auth/*"
              element={
                <AuthLayout>
                  <Routes>
                    <Route path="/login" element={<Login/>} />
                  </Routes>
                </AuthLayout>
              }
            />

            <Route path='/' element={Home}/>
          </Routes>

        </AuthMiddleware>
      </Router>
    </>
  )
}

export default App
