import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet clssName="min-h-[calc(100vh-116px)]"/>
            <Footer />
        </div>
    );
};



export default Root;