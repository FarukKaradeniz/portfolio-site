import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Section from "./Section";
import Interests from "./Interests";
import Blogs from "./Blogs";

const Layout = () => {
    return (
        <main className="flex flex-col justify-center items-center p-4">
            <Header/>
            <Section title="Projects" isOpen={""}>
                <Projects/>
            </Section>
            <Section title="Skills & Programming Languages" isOpen={""}>
                <Interests/>
            </Section>
            <Section title="Blog Posts" isOpen="">
                <Blogs/>
            </Section>
        </main>
    );
};

export default Layout;
