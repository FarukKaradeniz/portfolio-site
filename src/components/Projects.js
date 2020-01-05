import React from "react";
import items from "../api/ProjectList";

let Projects = () => {
    let list = () => {
        return items.map(item => (
            <Project key={item.title} item={item}/>
        ));
    };

    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="flex flex-row justify-center items-center flex-wrap">
                {list()}
            </div>
        </div>
    );
};

let Project = props => {
    const {title, summary, langs, link} = props.item;
    return (
        <a
            href={link}
            className="cursor-pointer flex flex-col justify-between items-start m-2 p-2 h-64 w-1/4 sm:w-1/6 border-gray-200 hover:border-gray-400 border-solid border-2">
            <div className="font-semibold text-lg underline">{title}</div>
            <div className="font-thin text-sm">{summary}</div>
            <div className="font-thin italic">{langs}</div>
        </a>
    );
};

export default Projects;
