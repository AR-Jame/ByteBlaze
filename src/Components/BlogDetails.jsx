import { useLoaderData } from "react-router-dom";
import BlogData from "./BlogData";
import BlogAuthor from "./BlogAuthor";
import { setValue } from "../js";
import toast, { Toaster } from "react-hot-toast";

const BlogDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { title } = data

    const handleBookmark = () => {
        setValue(data)
        toast.success("you added to bookmark successfully")
    }
    return (
        <>
            <div><Toaster /></div>
            <h2 className="text-5xl">{title}</h2>
            <div role="tablist" className="tabs tabs-lifted mx-[20%] mt-10">
                <input type="radio" name="my_tabs_2" defaultChecked role="tab" className="tab text-lg font-semibold" aria-label="Blog" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <BlogData data={data} />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-lg font-semibold"
                    aria-label="Author"
                     />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <BlogAuthor data={data} />
                </div>
                <button onClick={handleBookmark} className="btn">Add to bookmarks</button>
            </div>
        </>
    );
};

export default BlogDetails;