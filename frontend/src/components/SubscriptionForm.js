// frontend/src/components/SubscriptionForm.js
import React, { useState } from 'react';
import { subscribeEmail } from '../services/api';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await subscribeEmail(email);
            setMessage(response.message);
            setIsError(false);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong');
            setIsError(true);
        }
    };

    return (
        <div className="subscription-form">
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && (
                <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
            )}
        </div>
    );
};

export default SubscriptionForm;
