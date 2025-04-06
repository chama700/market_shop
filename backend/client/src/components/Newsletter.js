import { useState } from 'react';

export const useNewsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: result.message });
                setEmail('');
            } else {
                setStatus({ type: 'error', message: result.message });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
    };

    return {
        email,
        setEmail,
        status,
        handleSubmit
    };
};

export const NewsletterForm = ({ email, setEmail, handleSubmit }) => (
    <form className="flex" onSubmit={handleSubmit}>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="focus:outline-none email-input p-2 border border-gray-300 rounded-l-md text-black"
            required
        />
        <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 rounded-lg"
        >
            Subscribe
        </button>
    </form>
);
