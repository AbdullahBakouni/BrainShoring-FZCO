"use client";

import { useState } from "react";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneClick = () => {
    window.location.href = "tel:+971501046487";
    setIsModalOpen(false);
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:info@Brainshoring.com";
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative z-20 max-w-sm mx-auto p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get in touch with our team
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +971 501046487
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  info@Brainshoring.com
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-8 max-w-sm mx-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                Choose Contact Method
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                How would you like to get in touch?
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePhoneClick}
                className="w-full flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Us</span>
              </button>

              <button
                onClick={handleEmailClick}
                className="w-full flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Send Email</span>
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full p-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
