const BlogAuthor = ({data}) => {
    const {user} = data
    console.log(user)
    return (
        <div>
            <img src={user.profile_image} alt="" />
        </div>
    );
};

export default BlogAuthor;