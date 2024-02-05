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
import { useLanguage } from "./LanguageContext";


const errors = {
  emptyFields: {
    EN: "This field cannot be empty !",
    FR: "Ce champ ne peut pas être vide !"
  }, 
  invalidEmail: {
    EN: "Invalid email format !",
    FR: "Email non valide !"
  },
  subjectToLong: {
    EN: "Subject is too long (max 100 characters) !",
    FR: "L'objet du message est trop long (max 100 caractères) !"
  },
  messageToLong: {
    EN: "Message is too long (max 400 characters) !",
    FR: "Le message est trop long (max 400 caractères) !"
  },
  successSending: {
    EN: "Message has been sent with success 😄 !",
    FR: "Message envoyé avec succès 😄 !"
  },
  errorSending: {
    EN: "The message could not be delivered  😞...",
    FR: "Le message n'a pas pu être délivré  😞 ..."
  }
}

var validator = require('validator');


const EmailSection = () => {
  
  const {language} = useLanguage()
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [subjectError, setSubjectError] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const subject = e.target.subject.value
    const message = e.target.message.value

    const button = document.querySelector("#submit")
    
    if (!email.trim()) {
      setEmailError(errors.emptyFields[language])
      return;
    } else {
      setEmailError("")
    }
    
    if (!validator.isEmail(email)) {
      setEmailError(errors.invalidEmail[language])
      return;
    } else {
      setEmailError("")
    }
    
    if (!subject.trim()) {
      setSubjectError(errors.emptyFields[language])
      return;
    } else {
      setSubjectError("")
    }
    
    if (subject.length > 100) {
      setSubjectError(errors.subjectToLong[language]);
      return;
    } else {
      setSubjectError("")
    }
    
    if (!message.trim()) {
      setMessageError(errors.emptyFields[language])
      return;
    } else {
      setMessageError("")
    }
    
    
    if (message.length > 400) {
      setMessageError(errors.messageToLong[language]);
      return;
    } else {
      setMessageError(""); 
    }

    button.disabled = true
    
    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://api.dataelevation.dev/api/mail";


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
      toast.success(errors.successSending[language], {
        autoClose: 5000,
      });
    }

    if (response.status === 500) {
      toast.error(errors.errorSending[language], {
        autoClose: 5000,
      });
    }

    button.disabled = false
  };


  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          {language === "EN" ? "Let's Connect" : "Echangeons"}
          
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {
            language === "EN" ? "I'm constantly looking for opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!" : 
            "Je suis toujours à la recherche de nouvelles opportunités. Si vous avez des questions et/ou des idées, je ferai mon maximum pour revenir rapidement vers vous !"
          }
          
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/SChoumiloff">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/sachachoumiloff/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link target="_blank" href="https://twitter.com/SachaChoumiloff">
            <Image src={TwitterIcon} alt="Twitter Icon"/>
          </Link>
          <Link target="_blank" href="https://twitter.com/SachaChoumiloff">
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
              {language === "EN" ? "Your email" : "Votre adresse email"}
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
                {language === "EN" ? "Subject" : "Objet"}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={language === "EN" ? "Just saying hi" : "Coucou"}
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
                placeholder={language === "EN" ? "Let's talk about..." : "Parlons de..."}
              />
              <p className="text-red-500 text-sm">{messageError}</p>
            </div>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {language === "EN" ? "Send message" : "Envoyer"}
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default EmailSection;
