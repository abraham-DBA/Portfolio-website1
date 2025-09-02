import React from 'react';
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 px-2">
            {/* Profile Image */}
            <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: "spring", stiffness:100}}>
                <Image
                    src={assets.profile_img}
                    alt="profile-image"
                    className="rounded-full w-24 sm:w-32 mx-auto"
                />
            </motion.div>

            {/* Intro */}
            <motion.h3 initial={{y: -20, opacity:0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay:0.5}} className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 font-Ovo">
                Hi! I'm Ezekiel Abraham
                <Image src={assets.hand_icon} alt="hand-icon" className="w-5 sm:w-6"/>
            </motion.h3>

            {/* Title */}
            <motion.h1 initial={{y: -30, opacity:0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay:0.5}} className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-snug">
                FullStack Developer based in Uganda.
            </motion.h1>

            {/* Description */}
            <motion.p initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay:0.7}} className="text-sm sm:text-base md:text-lg max-w-lg sm:max-w-2xl mx-auto font-Ovo px-2">
                I'm a Kampala-based Fullstack Developer passionate about turning ideas into digital reality.
                I thrive on the entire development process, from designing robust backend architectures with
                Node.js & Laravel, to creating engaging user interfaces with React & Next.js. I power these
                applications with scalable databases, choosing the right tool—be it PostgreSQL, SQL Server,
                or MongoDB—for the task.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full sm:w-auto">
                <motion.a initial={{y: 30, opacity:0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay:1}}
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2"
                >
                    Contact Me
                    <Image src={assets.right_arrow_white} alt="arrow-icon" className="w-4"/>
                </motion.a>
                <motion.a initial={{y: 30, opacity:0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay:1.2}}
                    href="/sample-resume.pdf"
                    download
                    className="w-full sm:w-auto px-8 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2"
                >
                    My Resume
                    <Image src={assets.download_icon} alt="arrow-icon" className="w-4"/>
                </motion.a>
            </div>
        </div>
    );
};

export default Header;
