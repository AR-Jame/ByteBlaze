import { Link } from "react-router-dom";

const Blog = ({ blog, children }) => {
    const { cover_image, title, description, id } = blog
    return (
        <div className="flex flex-col">
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="flex-1 max-w-sm mx-auto group hover:no-underline border focus:no-underline dark:bg-gray-50">
                <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3
                        className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {title}
                    </h3>
                    <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                    <p>{description}</p>
                </div>
            </Link>
            {children}
        </div>
    );
};

export default Blog;