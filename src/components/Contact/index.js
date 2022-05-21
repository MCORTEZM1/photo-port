import React, { useState } from 'react';

function ContactForm() {
    // hook to manage form data
    const [ formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync form data to state to manipulate, submit, and validate
    function handleChange(e) {
        // e.target.name refers to the name attribute of the form element. [] allows us to create dynamic property names
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}> 
                <div>
                    {/* htmlfor is the same as 'for=' in HTML, since this is written in js; same as className*/}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message"  defaultValue={message} onChange={handleChange} rows="5"/>
                </div> 
                <button type="submit">Submit</button> 
            </form>
        </section>
    )   
}

export default ContactForm;