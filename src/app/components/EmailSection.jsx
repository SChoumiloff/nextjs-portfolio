"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TwitterIcon from "../../../public/icons8-twitter.svg";
import InstagramIcon from "../../../public/icons8-instagram.svg";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';


var validator = require('validator');

const EmailSection = () => {
  
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [subjectError, setSubjectError] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const subject = e.target.subject.value
    const message = e.target.message.value

    if (!email.trim()) {
      setEmailError("Email cannot be empty !")
      return;
    } else {
      setEmailError("")
    }

    if (!validator.isEmail(email)) {
      setEmailError("Invalid email format !")
      return;
    } else {
      setEmailError("")
    }

    if (!subject.trim()) {
      setSubjectError("Subject cannot be empty !")
      return;
    } else {
      setSubjectError("")
    }

    if (subject.length > 100) {
      setSubjectError("Subject is too long (max 100 characters) !");
      return;
    } else {
      setSubjectError("")
    }

    if (!message.trim()) {
      setMessageError("Message cannot be empty !")
      return;
    } else {
      setMessageError("")
    }


    if (message.length > 400) {
      setMessageError("Message is too long (max 400 characters) !");
      return;
    } else {
      setMessageError(""); 
    }

    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "http://localhost:3001/api/mail";


    const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      e.target.email.value = ""
      e.target.subject.value = ""
      e.target.message.value = ""
      toast.success('Message has been sent with success 😄 !', {
        autoClose: 5000,
      });
    }

    if (response.status === 500) {
      toast.error('Internal server error 😞 ...', {
        autoClose: 5000,
      });
    }
  };



  return (
    <section
    
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m constantly looking for opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/SChoumiloff">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sachachoumiloff/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://twitter.com/SachaChoumiloff">
            <Image src={TwitterIcon} alt="Twitter Icon"/>
          </Link>
          <Link href="https://twitter.com/SachaChoumiloff">
            <Image src={InstagramIcon} alt="Twitter Icon"/>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                id="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="sacha@dataelevation.dev"
              />
              <p className="text-red-500 text-sm">{emailError}</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
              <p className="text-red-500 text-sm">{subjectError}</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
              <p className="text-red-500 text-sm">{messageError}</p>
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default EmailSection;
