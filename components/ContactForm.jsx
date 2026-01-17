"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    try {
      const res = await fetch("/api/contact", {  // ✅ Added leading slash
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);

      if (success) {
        setFullname("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(["Failed to send message. Please try again."]);
      setSuccess(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="py-2 mt-1 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname" className="block mb-1">Full Name*</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email*</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="john@gmail.com"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">Your Message*</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32 w-full p-2 border rounded"
            id="message"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <button 
          className="bg-blue-900 p-3 text-white font-bold rounded hover:bg-blue-800" 
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col mt-4 rounded">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}