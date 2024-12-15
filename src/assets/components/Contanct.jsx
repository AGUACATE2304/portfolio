import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    
    const checkIsformCompleted = () => {
        const { name, email, subject, message } = formData;

        if(!name || !email || !subject || !message) {
            Swal.fire({
                title: 'Incomplete Form',
                text: 'Please fill all the fields before sending your message, Thank you.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                    popup: 'wide-swal'
                }
            });
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkIsformCompleted(formData)) {
            console.log("aaa");
            return; //Dont let the form to be sended if not completed
        }
        
        Swal.fire({
            title: 'Thanks for sending a message!',
            text: 'Thank you for conctacting me. I will get back to you asap.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'wide-swal'
            }
        });

        setFormData({name: '', email: '', subject: '', message: ''});
    }


    return (
        <>
            <div className='contactFormContainer'>
                <form className='contactForm'>
                    <h2>Contact with me</h2>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
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
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            rows="5"
                            required
                        />
                    </label>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact;