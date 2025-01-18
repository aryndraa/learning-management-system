import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthMiddleware from "./middlewares/AuthMiddleware.jsx";

function App() {

  const hasLogin = false

  return (
    <>
      <Router>
        <AuthMiddleware isAuth={hasLogin} excludeRoutes={['/auth/login']}  >
          <Routes>
          {/*  page */}
          </Routes>
        </AuthMiddleware>
      </Router>
    </>
  )
}

export default App
