import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const WhatsappButton: React.FC = () => {
  const yourNumber = '+5569638393'; // Replace with your actual WhatsApp number
  const text = 'Hi! I saw your website and wanted to chat.'; // Optional pre-filled text

  const handleButtonClick = () => {
    const whatsappUrl = `https://wa.me/${yourNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <button
      className={`fixed z-50 bottom-6 right-10 w-12 h-12 rounded-full bg-green-500 text-white flex justify-center items-center focus:outline-none shadow-md
                    sm:fixed sm:bottom-2 sm:right-5 md:fixed md:bottom-5 md:right-10`}
      onClick={handleButtonClick}
    >
      <span className=''><FaWhatsapp /></span>
    </button>
  );
};

export default WhatsappButton;