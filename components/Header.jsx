import React from 'react';
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 px-2">
            {/* Profile Image */}
            <div>
                <Image
                    src={assets.profile_img}
                    alt="profile-image"
                    className="rounded-full w-24 sm:w-32 mx-auto"
                />
            </div>

            {/* Intro */}
            <h3 className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 font-Ovo">
                Hi! I'm Ezekiel Abraham
                <Image src={assets.hand_icon} alt="hand-icon" className="w-5 sm:w-6"/>
            </h3>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-snug">
                FullStack Developer based in Uganda.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg max-w-lg sm:max-w-2xl mx-auto font-Ovo px-2">
                I'm a Kampala-based Fullstack Developer passionate about turning ideas into digital reality.
                I thrive on the entire development process, from designing robust backend architectures with
                Node.js & Laravel, to creating engaging user interfaces with React & Next.js. I power these
                applications with scalable databases, choosing the right tool—be it PostgreSQL, SQL Server,
                or MongoDB—for the task.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full sm:w-auto">
                <a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2"
                >
                    Contact Me
                    <Image src={assets.right_arrow_white} alt="arrow-icon" className="w-4"/>
                </a>
                <a
                    href="/sample-resume.pdf"
                    download
                    className="w-full sm:w-auto px-8 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2"
                >
                    My Resume
                    <Image src={assets.download_icon} alt="arrow-icon" className="w-4"/>
                </a>
            </div>
        </div>
    );
};

export default Header;
