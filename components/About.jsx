import React from 'react';
import {assets, infoList, toolsData} from "@/assets/assets";
import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-2 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image className="w-full rounded-3xl" src={assets.user_image} alt="user-image"/>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        A problem-solver at heart, driven by a simple question: "How does it work?" I transform complex ideas into seamless, full-stack digital solutions. My toolkit features the modern stack: React, Next.js, Node, Laravel, Python, PostgreSQL, and MongoDB. This technical foundation is proven through real-world application, having delivered value in collaborations with industry leaders like ICEA. I am eager to leverage my unique blend of curiosity and skill to innovate and deliver impact on a dynamic team.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-400 hover:-translate-y-1 duration-500">
                                <Image className="w-7 mt-3" src={icon} alt={title} />
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>

                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-gray-700 font-Ovo">Tools I Use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                    {toolsData.map((tool, index) => (
                        <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-blue-400 hover:-translate-y-1 duration-500" key={index}>
                            <Image src={tool} alt="tool" className="w-5 sm:w-7"/>
                        </li>
                    ))}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default About;