import React, { useState } from 'react';

const UserForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
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

        switch (name) {
            case 'firstName':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    firstName: value.length < 2 ? 'First Name must be at least 2 characters' : ''
                }));
                break;
            case 'lastName':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    lastName: value.length < 2 ? 'Last Name must be at least 2 characters' : ''
                }));
                break;
            case 'email':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: value.length < 5 ? 'Email must be at least 5 characters' : ''
                }));
                break;
            case 'password':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: value.length < 8 ? 'Password must be at least 8 characters' : ''
                }));
                break;
            case 'confirmPassword':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    confirmPassword: value !== form.password ? 'Passwords must match' : ''
                }));
                break;
            default:
                break;
        }
    };

    return (
        <div className="container">
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
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
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
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
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
                    {errors.email && <p className="error">{errors.email}</p>}
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
                    {errors.password && <p className="error">{errors.password}</p>}
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
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
            </form>
        </div>
    );
};

export default UserForm;