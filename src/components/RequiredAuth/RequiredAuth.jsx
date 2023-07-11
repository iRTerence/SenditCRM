import { useAuth } from "../../store/context/auth";
import { Navigate, useLocation } from "react-router-dom";

function RequiredAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user || auth.user.callStatus == 0) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  return children;
}

export default RequiredAuth;
