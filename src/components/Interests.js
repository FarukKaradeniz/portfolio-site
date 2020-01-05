import React from "react";
import items from "../api/SkillList";

let Interests = () => {
    let list = () => {
        return items.map(item => (
            <Interest key={item.name} item={item}/>
        ));
    };

    return (
        <div className="flex flex-row flex-wrap justify-center content w-full h-full mt-2">
            {list()}
        </div>
    );
};

let Interest = props => {
    const {name, img} = props.item;
    return (
        <div
            className="rounded-lg flex flex-row justify-center bg-gray-100 hover:bg-gray-300 cursor-pointer w-32 h-32 m-1">
            <div dangerouslySetInnerHTML={{__html: img}}/>
        </div>
    );
};

export default Interests;
