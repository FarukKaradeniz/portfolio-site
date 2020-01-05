import React from "react";
import socialMediaItems from "../api/SocialMediaLinks";

let Header = () => {
    return (
        <header className="flex flex-col justify-center items-center h-full w-full">
            <HeaderImage/>
            <HeaderBio/>
            <HeaderSocial/>
        </header>
    );
};

let HeaderImage = () => {
    return (
        <div className="sm:w-auto sm:h-auto w-1/2 h-1/2 pt-4">
            <img
                className="object-fit rounded-full border-solid border-4 border-gray-500 shadow-xl"
                src="https://avatars1.githubusercontent.com/u/22941245?v=4"
                alt="Ömer Faruk Karadeniz"
            />
        </div>
    );
};

let HeaderBio = () => {
    return (
        <div className="flex flex-col items-center justify-center w-3/4 h-3/4 p-2">
            <h3 className="text-3xl font-semibold leading-loose">
                Ömer Faruk Karadeniz
            </h3>
            <p className="text-lg leading-relaxed text-center">
                Yildiz Technical University Computer Engineering graduate.
                <br/>
                Fullstack (Mostly Java & React) developer.
            </p>
        </div>
    );
};

let HeaderSocial = () => {
    let list = () => {
        return socialMediaItems.map(item => (
            <HeaderSocialItem key={item.name} item={item}/>
        ));
    };

    return (
        <ul className="flex flex-row items-center flex-wrap justify-center">
            {list()}
        </ul>
    );
};

let HeaderSocialItem = props => {
    return (
        <li className="w-auto h-auto p-4 text-blue-400 text-3xl">
            <a className="cursor-pointer hover:text-blue-700" href={props.item.url}>
                <i className={props.item.icon}/>
            </a>
        </li>
    );
};

export default Header;
