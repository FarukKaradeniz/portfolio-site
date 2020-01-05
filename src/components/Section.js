import React, {useRef, useState} from "react";
import "../styles/customStyles.css";

let Section = props => {
    const [isOpen, setOpen] = useState(props.isOpen);
    const [height, setHeight] = useState(isOpen === "active" ? "100%" : "0px");
    const [rotate, setRotate] = useState("accordion__icon");
    const content = useRef();

    let toggle = () => {
        setOpen(isOpen === "" ? "active" : "");
        setHeight(
            isOpen === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotate(
            isOpen === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    };

    return (
        <section className="flex flex-col w-full h-full mt-2">
            <div
                className="flex flex-row h-16 w-full border-b-2 border-t-2 border-l-8 border-blue-200 justify-start items-center cursor-pointer hover:bg-blue-200"
                onClick={() => toggle()}
            >
                <div className="mr-4 ml-4 text-3xl font-bold">
                    <Chevron className={`${rotate}`} width={10} fill={"#777"}/>
                </div>
                <div className="text-xl font-semibold">{props.title}</div>
            </div>
            <div
                ref={content}
                className="accordion__content"
                style={{maxHeight: `${height}`}}
            >
                <div>{props.children}</div>
            </div>
        </section>
    );
};

let Chevron = props => {
    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path
                fill={props.fill}
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
        </svg>
    );
};

export default Section;
