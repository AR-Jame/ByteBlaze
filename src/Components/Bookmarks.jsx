import { deleteItem, getValue } from "../js";
import Blog from "./Blog";

const Bookmarks = () => {
    const data = getValue()
    console.log(data)
    return (
        <div className="min-h-[calc(100vh-116px)]">
            <div className="mx-[20%] grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    data.length > 0 ? data.map(single => <Blog key={single.id} blog={single}>
                        <button onClick={() => deleteItem(single.id)} className="btn">Delete</button>
                    </Blog>) : <p>Please select any one</p>
                }
            </div>
        </div>
    );
};

// 
export default Bookmarks;