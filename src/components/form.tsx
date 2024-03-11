// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );
      console.log('SUCCESS!', response.status, response.text);
      setFormData({ name: '', email: '', message: '' });
      alert('Form submitted successfully!'); // Or display a success message
    } catch (error) {
      console.error('FAILED...', error);
      alert('There was an error submitting the form. Please try again.'); // Or display an error message
    }
  };

  return (
    // <form className="flex flex-col bg-cyan-800 justify-center align-center items-center h-80 py-8 my-4" onSubmit={handleSubmit}>
    <form className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-cyan-800 dark:bg-black' onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Asunto o Consulta
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.email}
          onChange={handleChange}
          className="rounded-md border border-gray-300 p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;