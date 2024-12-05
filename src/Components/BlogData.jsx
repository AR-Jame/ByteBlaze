const BlogData = ({ data }) => {
    const { title, body_markdown } = data
    return (
        <div>
            <h2>{title}</h2>
            <p>{body_markdown}</p>
        </div>
    );
};

export default BlogData;