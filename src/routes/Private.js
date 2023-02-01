import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/Login";

const Private = ({ children }) => {
  const { adminToken } = useSelector((state) => state.authReducer);
  return adminToken ? children : <Login />;
};

export default Private;
