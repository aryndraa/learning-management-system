import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthMiddleware from "./middlewares/AuthMiddleware.jsx";
import {Login} from "./pages/auth/Login.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

function App() {

  const hasLogin = false

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
          </Routes>

        </AuthMiddleware>
      </Router>
    </>
  )
}

export default App
