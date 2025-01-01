import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login.jsx"
import AuthMiddleware from "./middlewares/AuthMiddleware.jsx";
import {Home} from "./pages/Home.jsx";

function App() {

  return (
    <>
      <Router>
        <AuthMiddleware isAuth={true} excludeRoutes={['/login']}>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthMiddleware>
      </Router>
    </>
  )
}

export default App
