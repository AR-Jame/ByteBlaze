import { useContext } from "react";
import { AuthDataContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {authData, loading} = useContext(AuthDataContext)
    if(loading){
        return <p>i am loading</p>
    }
    if(!authData){
        return <Navigate to="/login"></Navigate>
    }
    if(authData){
        return children
    }
};

export default PrivateRoute;