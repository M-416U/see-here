"use client";
import React, { useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  const [Msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/send-email", formData);
      setMsg("Email sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setMsg("Contact With Email Does`t Work For Mow Sorry");
    }
  };

  return (
    <>
      <NavBar home />
      <div className="flex flex-col justify-center relative">
        {Msg && (
          <h2 className="text-center absolute top-[100px] left-[50%] translate-x-[-50%] p-4 bg-yellow-500 rounded-md flex items-center justify-between">
            {Msg}{" "}
            <span
              className="bg-black rounded-full w-4 h-4 flex justify-center items-center cursor-pointer ml-3 text-xs"
              onClick={() => setMsg("")}
            >
              {" "}
              X
            </span>
          </h2>
        )}
        <div className="bg-black min-h-screen flex items-center justify-center">
          <div className="bg-slate-500 p-8 rounded shadow-md max-w-md w-full">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-black"
                  rows="4"
                  required
                />
              </div>
              <div className="justify-between flex items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
                <Link href="https://www.instagram.com/mo0hie/">
                  <BsInstagram className="w-10 h-10 cursor-pointer" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
