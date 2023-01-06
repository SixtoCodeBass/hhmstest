import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layout/AuthLayout";
import ManagerLayout from "./layout/ManagerLayout";
import ForgotPassword from "./page/public/ForgotPassword";
import LandingPage from "./page/public/LandingPage";
import Login from "./page/public/Login";
import Register from "./page/public/Register";
import SoftLogin from "./page/public/SoftLogin";
import ValidateAccount from "./page/public/ValidateAccount"
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="soft-login" element={<SoftLogin />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="validate/:id" element={<ValidateAccount />} />
            <Route path="*" element={<NotFound />}/>
          </Route>
          {/* <Route path="/landing-page" element={<LandingPageLayout />}></Route>
          <Route path="/manager" element={<ManagerLayout />}></Route>
          <Route path="/dashboard" element={<DashboardLayout />}></Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
