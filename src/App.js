import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth";
import { useIdleTimer } from "react-idle-timer";
import { useAuth } from "./store/context/auth";
import Program from "./pages/Program/Program";
import CRM from "./pages/CRM/CRM";
import Footer from "./components/Footer/Footer";
import FooterNotifications from "./components/FooterNotifications/FooterNotifications";
import "./App.scss";
import Admin from "./pages/Admin/Admin";
import RolesAndPermissions from "./pages/RolesAndPermissions/RolesAndPermissions";
import Compliance from "./pages/Compliance/Compliance";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const userInfo = useSelector((state) => state.login.user);
  console.log(userInfo);

  const auth = useAuth();
  const path = useLocation().pathname;

  useIdleTimer({
    timeout: 1000 * 60 * 20,
    onIdle: () => {
      auth.logout();
      // console.log("idle");
    },
  });

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const isLoginRoute = path === "/";

  return (
    <div className="App">
      {!isLoginRoute && (
        <Navbar
          onMenuIconClick={toggleSidebar}
          isSidebarVisible={isSidebarVisible}
        />
      )}
      <div className="home">
        {!isLoginRoute && <Sidebar isSidebarVisible={isSidebarVisible} />}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/program" element={<Program />} />
            <Route path="/CRM" element={<CRM />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="users" element={<Admin />} />
            </Route>
            <Route path="/admin/roles" element={<RolesAndPermissions />} />
            <Route path="/compliance" element={<Compliance />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
      {/* <FooterNotifications /> */}
      <Footer />
    </div>
  );
}

export default App;
