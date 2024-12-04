import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Thanks for sending a message!',
            text: 'Thank you for conctacting me. I will get back to you asap.',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        setFormData({name: '', email: '', subject: '', message: ''});
    }


    return (
        <>
            <form className='formContainer'>
                <h2>Contact</h2>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="name"
                        value={FormData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </label>
                <label>
                    Email Address:
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                    />
                </label>
                <label>
                    Subject:
                    <input 
                        type='text'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder='Reason for your message'
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea 
                        name="mesage"
                        value={formData.mesage}
                        onChange={handleChange}
                        placeholder="Write your message here"
                        rows="5"
                        required
                    />
                </label>
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Contact;