import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // value given inside of useState() determines the initial state. Here an empty string.
    const [errorMessage, setErrorMessage] = useState('');
   
    // hook to manage form data
    const [ formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync form data to state to manipulate, submit, and validate
    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if(!isValid) {
                // assigns value to errorMessage
                setErrorMessage('Your email is invalid.')
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }

        //   console.log('errorMessage: ', errorMessage);   

        // wrap setter function in a conditional so that the state only updates if the form data has passed the quality tests
        if(!errorMessage){
            // e.target.name refers to the name attribute of the form element. [] allows us to create dynamic property names
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1 data-testid='h1tag'>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}> 
                <div>
                    {/* htmlfor is the same as 'for=' in HTML, since this is written in js; same as className*/}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message"  defaultValue={message} onBlur={handleChange} rows="5"/>
                </div>
                {/* below reads: 
                        if(errorMessage){ 
                            return <div>...
                        }
                    
                    This will conditionally render the div containing the error message.
                    && is used as a short circuit, if the first part is true, the second expression is evaluated.
                */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )} 
                <button data-testid='btn' type="submit">Submit</button> 
            </form>
        </section>
    )   
}

export default ContactForm;