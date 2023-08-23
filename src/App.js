import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { AuthProvider } from "./store/context/auth";
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

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

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
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/program" element={<Program />} />
          <Route path="/CRM" element={<CRM />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<Admin />} />
          </Route>
          <Route path="/admin/roles" element={<RolesAndPermissions />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </div>
      {/* <FooterNotifications /> */}
      <Footer />
    </div>
  );
}

export default App;
