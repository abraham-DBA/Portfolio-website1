import React from 'react';
import {assets, workData} from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

const Work = () => {
    return (
        <motion.div id="work" initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 1}}  className="w-full px-[12%] py-2 scroll-mt-20">
            <motion.h4 initial={{opacity:0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5, delay:0.3}}  className="text-center mb-2 text-lg font-Ovo">
                My Portfolio
            </motion.h4>

            <motion.h2 initial={{opacity:0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5, delay:0.3}}  className="text-center text-5xl font-Ovo">
                My Latest Work
            </motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:0.7}}  className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development Portfolio.  Explore a showcase of my latest projects, demonstrating my skills in crafting dynamic and responsive web applications. Each project reflects my commitment to quality, innovation, and user-centric design.
            </motion.p>

            <motion.div initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay:0.9}}  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 my-10">
                {workData.map((project, index) => (
                    <motion.div whileHover={{scale: 1.05}} transition={{duration: 0.3}}
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    >
                        {/* Background Image */}
                        <a href={project.link}> <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        /></a>

                        {/* Overlay Card */}
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12">
                            <div className="bg-white rounded-md py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7 relative">
                                <div>
                                    <h2 className="text-sm font-semibold">{project.title}</h2>
                                    <p className="text-xs text-gray-600">{project.description}</p>
                                </div>
                                <div className="ml-3">
                                    <Image
                                        src={assets.send_icon}
                                        alt="send-icon"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.a initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:1.1}}  href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-blue-400 duration-500">
                Show More <Image src={assets.right_arrow_bold} alt="right-arrow" className="w-4" />
            </motion.a>

        </motion.div>
    );
};

export default Work;