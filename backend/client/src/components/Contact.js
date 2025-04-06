import React, { useState } from 'react';
import Bg from "../assets/images/contact.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent
        const data = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setStatusType('success');
                setStatusMessage(result.message);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setStatusType('error');
                setStatusMessage(result.message || 'Error sending message.');
            }
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('Error sending message.');
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="contact-page">
            <h1 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h1>
            <div className="grid grid-cols-2">
                <div className="relative home h-[600px]">
                    <img
                        src={Bg}
                        alt="home"
                        className="w-full h-full"
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10 py-16">
                        <div className="max-w-4xl bg-black/40 p-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
                            <h3 className="text-lg md:text-xl mb-6">
                                Let us know how we can assist you, and we'll get back to you as soon as possible!
                                We’d love to hear from you! If you have any questions or issues, please fill out the form.
                            </h3>
                        </div>
                    </div>
                </div>
              <div>
                  <div className="flex justify-center">
                      <div className="w-full max-w-2xl bg-white shadow-top-bottom rounded-lg p-8">
                          <form onSubmit={handleSubmit}>
                              <div className="mb-6">
                                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">First & Last name</label>
                                  <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                                      placeholder="Your full name"
                                      required
                                  />
                              </div>

                              <div className="mb-6">
                                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                  <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                                      placeholder="Your email address"
                                      required
                                  />
                              </div>

                              <div className="mb-8">
                                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                  <textarea
                                      id="message"
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                                      placeholder="Your message"
                                      rows="6"
                                      required
                                  ></textarea>
                              </div>

                              <button
                                  type="submit"
                                  className="w-full bg-green-600 text-white font-semibold py-4 rounded-lg hover:bg-green-700 transition duration-300"
                              >
                                  Send Message
                              </button>
                          </form>

                          {/* Display the status message */}
                          {isModalOpen && (
                              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                  <div className={`bg-white p-8 rounded-lg shadow-lg max-w-lg w-full ${statusType === 'success' ? 'border-l-4 border-green-600' : 'border-l-4 border-red-600'}`}>
                                      <h2 className="text-xl font-semibold text-center mb-4">
                                          {statusType === 'success' ? 'Success!' : 'Error'}
                                      </h2>
                                      <p className={`text-lg text-center ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                          {statusMessage}
                                      </p>
                                      <div className="mt-4 text-center">
                                          <button
                                              onClick={closeModal}
                                              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                                          >
                                              Close
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          )}
                      </div>
                  </div>

                  <div className="mt-8 text-center">
                      <p className="text-lg text-gray-700">
                          Or reach us directly at <a href="mailto:marketShop@gmail.com" className="text-green-600 hover:text-green-700">marketShop@gmail.com</a>
                      </p>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default Contact;
