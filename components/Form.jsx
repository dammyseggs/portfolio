'use client'; 
import { useState } from "react";
import emailjs from "emailjs-com";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare, MailCheck, MailX  } from "lucide-react";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d7f0rf1", // EmailJS Service ID
        "template_6eadag6", // Template ID
        formData,
        "C7HQvaraeRY0uJocU" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setTimeout(() => {
            setStatus("");
          }, 60000);
        },
        (error) => {
          setStatus(`Failed to send message: ${error.text}`);
          setTimeout(() => {
            setStatus(""); 
          }, 60000);
        }
      );
  };


  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {status && (
        <div className="relative justify-center flex mx-auto bg-slate-50 shadow-md rounded-md p-4 w-9/12 xl:p-5 xl:w-2/4 dark:text-black">
          {status.startsWith("Message sent") ? (
            <MailIcon className="text-green-500 mr-2" size={24} />
          ) : (
            <MailX className="text-red-500 mr-2" size={24} />
          )}
          <p>{status}</p>
        </div>
      )}
      <div className="relative flex items-center ">
        <Input
          type="name"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Textarea
          placeholder="Type Your Message Here."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <MessageSquare className="absolute top-2 right-4" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        {" "}
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}

export default Form