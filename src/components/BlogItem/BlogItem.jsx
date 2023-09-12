import { faCalendarDays, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlogItem = ({ item }) => {
    return (
        <div className="blog_item p-5 bg-white rounded-md">
            <div className="blog_img ">
                <img className="rounded-md" src={item.img} alt={item.title} />
            </div>
            <ul className="author_comments_date flex justify-between py-3 border-b">
                <li>
                    <span className="text-[#ff6809] pr-1">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    by {item.author}
                </li>
                <li>
                    <span className="text-[#ff6809] pr-1">
                        <FontAwesomeIcon icon={faComment} />
                    </span>
                    {item.totalComments}
                </li>
                <li>
                    <span className="text-[#ff6809] pr-1">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    {item.date}
                </li>
            </ul>
            <h3 className="pt-3">{item.title}</h3>
            <p className="pb-4">{item.shortDescription}</p>
            <button className="px-6 py-2 theme_bg_color text-white rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 inline-block">Read More</button>
        </div>
    );
};

export default BlogItem;
