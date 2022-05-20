import React from 'react';

function ContactForm() {

    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form"> 
                <div>
                    {/* htmlfor is the same as 'for=' in HTML, since this is written in js; same as className*/}
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div> 
                <button type="submit">Submit</button> 
            </form>
        </section>
    )   
}

export default ContactForm;