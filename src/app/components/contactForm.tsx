"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnbbjok"); // <-- Your form ID

  if (state.succeeded) {
    return <p className="text-green-600 mt-4">✅ Thanks for reaching out! I’ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <div>
        <label htmlFor="email" className="block font-medium">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full border rounded p-2"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="company" className="block font-medium">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          name="company"
          className="w-full border rounded p-2"
        />
        <ValidationError prefix="Company" field="company" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="company" className="block font-medium">
          URL
        </label>
        <input
          id="url"
          type="url"
          name="url"
          placeholder="https://example.com"
          className="w-full border rounded p-2"
        />
        <ValidationError prefix="Company" field="company" errors={state.errors} />
      </div>

      

      <div>
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full border rounded p-2 h-28"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
