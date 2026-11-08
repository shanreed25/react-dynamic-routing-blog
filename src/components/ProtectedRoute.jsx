import { Navigate, Outlet} from "react-router-dom";
import  useAuth  from "../context/AuthContext";

export default function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;//replace stops the Back button from sending the user to /login over

    } else {
        return <Outlet />
    }

}