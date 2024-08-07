import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-section">
                <h2>Contact Me</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <p>If you'd like to get in touch, you can reach me through the following methods:</p>
                        <ul>
                            <li>Email: <a href="mailto:henrysandsgrant@gmail.com">henrysandsgrant@gmail.com</a></li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/henry-sands-grant" target="_blank" rel="noopener noreferrer">linkedin.com/in/henry-sands-grant</a></li>
                            <li>Phone: (+44) 7517404724</li>
                        </ul>
                        <p>I'm always interested in conversation about technology, so please feel free to contact me using any of the methods above!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
