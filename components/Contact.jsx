"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Contact = () => {
    const [result, setResult] = useState("");

    // -----------------------------
    // Form Submit Handler
    // -----------------------------
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "38d5ab2f-e630-4c00-ab02-305b62ec9f59");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully ✅");
                event.target.reset();
            } else {
                console.error("Error:", data);
                setResult(data.message || "Something went wrong ❌");
            }
        } catch (error) {
            console.error("Network Error:", error);
            setResult("Failed to send. Please try again later ❌");
        }
    };

    return (
        <motion.div
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-[12%] py-2 scroll-mt-20
                 bg-[url('/footer-bg-color.png')] bg-center 
                 bg-no-repeat bg-[length:90%_auto]"
        >
            {/* Heading Section */}
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                Connect With Me
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                I would love to hear from you! If you have any questions, comments, or
                feedback, please use the form below.
            </motion.p>

            {/* Contact Form */}
            <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="max-w-2xl mx-auto"
            >
                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-6 mt-10 mb-5">
                    <motion.input
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        required
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex p-3 outline-none border border-gray-400
                       rounded-md bg-white"
                    />
                    <motion.input
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex p-3 outline-none border border-gray-400
                       rounded-md bg-white"
                    />
                </div>

                {/* Message */}
                <motion.textarea
                    name="message"
                    rows="6"
                    placeholder="Enter Your Message"
                    required
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="w-full p-4 outline-none border border-gray-400
                     rounded-md bg-white mb-6"
                />

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="py-3 px-8 w-max flex items-center justify-between gap-2
                     bg-blue-700 text-white rounded-full mx-auto 
                     hover:bg-blue-400 duration-500"
                >
                    Submit Now{" "}
                    <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
                </motion.button>

                {/* Status Message */}
                <p className="mt-4 text-center font-medium">{result}</p>
            </motion.form>
        </motion.div>
    );
};

export default Contact;
