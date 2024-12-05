import { useContext, useState } from "react";
import { AuthDataContext } from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
    const {registration } = useContext(AuthDataContext)
    const [registerError, setRegisterError] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const repeatPassword = e.target.repeatPassword.value
        setRegisterError("")
        if(password.length <6){
            return setRegisterError("your password must have atleast six char..")
        }
        if(password !== repeatPassword){
            return setRegisterError("please type the same password in two place..")
        }
        if(!e.target.terms.checked){
            return setRegisterError("please accepct our terms and condition.")
        }

        registration(email, password)
        .then((result) => {
            console.log(result)
            e.target.reset()
        }).catch((err) => {
            console.log(err)
        });


    } 
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[calc(100vh-116px)] gap-5">
                <h3 className="text-2xl font-bold">Register Now</h3>
                <div className=" flex justify-center items-center">
                    <form onSubmit={handleRegister} className=" min-w-[500px] mx-auto">
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
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="repeatPassword"
                                id="floating_repeat_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Confirm password
                            </label>
                        </div>
                        <div className="flex gap-2 items-center my-2">
                            <input type="checkbox" name="terms" />       
                            <p>Please accepct our terms and condition</p>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Register
                        </button>
                    {
                        registerError && <p className="text-red-700 my-4">{registerError}</p>
                    }
                    <Link className="ml-3" to="/login">Already Register? go to  <button className="underline">Login</button></Link>
                    </form>

                </div>
            </div>
        </>
    );
};


export default Register;