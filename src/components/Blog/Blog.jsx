import React, { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";

const Blog = () => {
    const [blogItems, setBlogItems] = useState([]);
    useEffect(() => {
        fetch("blog.json")
            .then((res) => res.json())
            .then((data) => setBlogItems(data));
    }, []);
    return (
        <div className="w-full bg-gray-100 py-28">
            <div className="text-center mb-5">
                <h4>Blogs</h4>
                <h2 className="leading-[55px]">Latest News Updates</h2>
            </div>
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto grid md:grid-cols-3 gap-5">
                {blogItems.map((item) => (
                    <BlogItem key={item.id} item={item}></BlogItem>
                ))}
            </div>
        </div>
    );
};

export default Blog;
