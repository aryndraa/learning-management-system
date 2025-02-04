import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login.jsx"
import AuthMiddleware from "./middlewares/AuthMiddleware.jsx";
import {Home} from "./pages/Home.jsx";
import auth from './api/auth.js'
import {Subject} from "./pages/subject/Subject.jsx";
import {Resource} from "./pages/resource/Resource.jsx";
import {Chat} from "./pages/chat/Chat.jsx";
import {Date} from "./pages/date/Date.jsx";
import {DefaultLayout} from "./layouts/DefaultLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import {CustomerService} from "./pages/auth/CustomerService.jsx";

function  App() {

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
                    <Route path="/customer-service" element={<CustomerService/>} />
                  </Routes>
                </AuthLayout>
              }
           />

            <Route
              path="*"
              element={
                <DefaultLayout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/subject" element={<Subject />} />
                    <Route path="/resource" element={<Resource />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/date" element={<Date />} />
                  </Routes>
                </DefaultLayout>
              }
            />
          </Routes>
        </AuthMiddleware>
      </Router>
    </>
  )
}

export default App
