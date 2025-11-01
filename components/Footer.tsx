"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with backend API later
    if (email.trim()) {
      console.log("Subscribed with:", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 border-t bg-white/60 backdrop-blur-sm"
    >
      {/* Subscribe Section */}
      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay in the loop</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to get the latest coupons, deals, and updates from HALY Coupon.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 rounded-lg border border-gray-300 bg-white/70 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition"
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto max-w-7xl p-6 text-center text-sm text-gray-600 border-t">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800">HALY Coupon</span>. All rights reserved.
      </div>
    </motion.footer>
  );
}
