import React from 'react';
import Image from "next/image";
import {assets} from "@/assets/assets";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.profile_img} alt="profile-image" className="rounded-full w-32"/>
            </div>

            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Ezekiel Abraham <Image src={assets.hand_icon} alt="profile-image" className="w-6"/>
            </h3>

            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                FullStack Developer based in Uganda.
            </h1>

            <p className="max-w-2xl mx-auto font-Ovo">
                I'm a Kampala-based Fullstack Developer passionate about turning ideas into digital reality. I thrive on the entire development process, from designing robust backend architectures with Node.js, Laravel, to creating engaging user interfaces with React & Next.js. I power these applications with scalable databases, choosing the right tool—be it PostgreSQL, SQL Server, or MongoDB—for the task.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
                    Contact Me <Image src={assets.right_arrow_white} alt="arrow-icon" className="w-4"/>
                </a>
                <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                    My Resume<Image src={assets.download_icon} alt="arrow-icon" className="w-4"/>
                </a>
            </div>
        </div>
    );
};

export default Header;