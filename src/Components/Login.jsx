import { useContext, useState } from "react";
import { AuthDataContext } from "../AuthContext/AuthContext";
import { Link} from "react-router-dom";

const Login = () => {
    const [loginError, setLoginError] = useState(null)
    const { authData, login, googleLogin } = useContext(AuthDataContext)
    console.log(authData);
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setLoginError("")
        login(email, password)
            .then((result) => {
                console.log(result.user)
                e.target.reset()
            }).catch((err) => {
                console.log(err.message)
                setLoginError(err.message)
            });

    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            console.log(result.user)
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div>
            <>
                <div className="flex flex-col justify-center items-center h-[calc(100vh-116px)] gap-5">
                    <h3 className="text-2xl font-bold">Login Now</h3>
                    <div className="flex justify-center items-center ">
                        <div>
                            <form onSubmit={handleLogin} className=" min-w-[500px] mx-auto">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="floating_email"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="floating_email"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Email address
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="floating_password"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="floating_password"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Password
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login
                                </button>
                                {
                                    loginError && <p className="text-red-700 my-4">{loginError}</p>
                                }
                            </form>
                            <Link className="ml-3" to="/register">New here? go to  <button className="underline">Registration</button></Link>
                            <button onClick={handleGoogleLogin} className="btn bg-pink-400">Google</button>
                        </div>

                    </div>
                </div>
            </>
        </div>
    );
};

export default Login;