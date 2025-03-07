import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthDataContext } from "../AuthContext/AuthContext";

const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const storedTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", storedTheme)
    }, [theme])

    const handleTheme = (e) => {
        setTheme(e.target.checked ? "synthwave" : "light")
    }

    const { authData, logOut } = useContext(AuthDataContext)
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl text-primary"><span>Byte</span><span className="text-secondary">Blaze</span></Link>
                    {authData && <><p className="font-semibold">{authData.email}</p> <button className="btn" onClick={handleLogOut}>log Out</button></>}
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        <NavLink to="/" className="text-lg font-semibold">Home</NavLink>
                        <NavLink to="/blogs" className="text-lg font-semibold">Blogs</NavLink>
                        <NavLink to="/bookmarks" className="text-lg font-semibold">Bookmarks</NavLink>
                        <NavLink to="/register" className="text-lg font-semibold">Register</NavLink>
                        <NavLink to="/login" className="text-lg font-semibold">Login</NavLink>
                        <div>
                            <label className="grid cursor-pointer place-items-center">
                                <input
                                    type="checkbox"
                                    value="synthwave"
                                    checked={theme === "synthwave"}
                                    onChange={handleTheme}
                                    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                                <svg
                                    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <svg
                                    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;