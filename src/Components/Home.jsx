import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className="h-[calc(100vh-116px)] flex flex-col justify-center items-center gap-12">
                <h1 className="text-4xl font-black">Welcome to ByteBlaze</h1>
                <div className="flex justify-center items-center gap-3">
                    <NavLink to="Blogs" className="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">Blogs</span>
                    </NavLink>
                    <NavLink to="Bookmarks" className="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">Bookmarks</span>
                    </NavLink>
                </div>
            </div>
        </div>

    );
};


export default Home;