"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const onSubmit = async (e) => {
  e.preventDefault();
  try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form),
      })
      const data = await res.json();

      if(data.success) {
        alert("Message sent successfully");

        setForm({
          name: "",
          email: "",
          message: "",
        });

      } else {
        alert("Failed to sent messages");
        console.log(data);
      }
  } catch (error) {
    console.log("Error sending message", error)
    alert("Error sending message");
  }
 }

  return (
    <section className="w-full flex justify-center py-28 px-6 bg-center bg-cover" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* CONTAINER → 60% WIDTH */}
      <div className="w-full md:w-[60%] max-w-5xl mx-auto">

        {/* CARD */}
        <div className="grid md:grid-cols-2 gap-10 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Let’s talk about your project
              </h3>

              <p className="text-gray-600 text-sm">
                Fill the form or contact me directly. I usually reply within 24 hours.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <FiMail className="text-lg" />
                </div>
                <span className="text-gray-700 text-sm">
                  your@email.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <FiPhone className="text-lg" />
                </div>
                <span className="text-gray-700 text-sm">
                  +91 8810391702
                </span>
              </div>

            </div>

          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={onSubmit}>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/80 transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-4 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/80 transition"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="5"
              className="w-full p-4 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/80 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            >
              <FiSend />
              Send Message
            </button>

          </form>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 text-sm">
            Or connect instantly
          </p>

          <Link
            href="https://wa.me/919876543210"
            target="_blank"
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </Link>
        </div>

      </div>

    </section>
  );
}