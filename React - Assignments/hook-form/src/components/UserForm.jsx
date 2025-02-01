import React, { useState } from 'react';

const UserForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <h3>User Registration</h3>
            <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div>
                <h3>Form Data</h3>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;