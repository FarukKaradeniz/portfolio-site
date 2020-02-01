import React from "react";
import items from "../api/BlogList";

const Blogs = () => {
    let list = () => {
        return items.map(item => <Blog key={item.title} item={item}/>);
    };

    return (
        <div className="flex flex-row items-center justify-center h-full w-full flex-wrap">
            {list()}
        </div>
    );
};

const Blog = props => {
    const {title, date, url} = props.item;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div
                className="cursor-pointer flex flex-col items-start w-64 m-2 p-2 pb-0 border-gray-200 hover:border-gray-400 border-solid border-2">
                <div className="font-semibold">{title}</div>
                <div className="text-sm italic self-end">{date}</div>
            </div>
        </a>
    );
};

export default Blogs;
