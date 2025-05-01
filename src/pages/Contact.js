import React from 'react'

function Contact() {
  return (<section className="contact">
    <header className="contact-header">
      <h1>Let’s Connect</h1>
      <p>I'm always open to discussing software projects, research, or just tech in general. Feel free to reach out!</p>
      <p><a href='https://shivamjadhav.com' id="contact-url">View My Portfolio </a></p>
    </header>
  
    <div className="contact-cards">
      <div className="contact-card">
        <img src={`${process.env.PUBLIC_URL}/icons/email.png`} alt="Email" />
        <h2>Email</h2>
        <p>jadhavshivam0228@gmail.com</p>
      </div>
  
      <div className="contact-card">
        <img src={`${process.env.PUBLIC_URL}/icons/phone-call.png`} alt="Phone" />
        <h2>Phone</h2>
        <p>+1 (940) 843 9864</p>
      </div>
  
      <div className="contact-card">
        <img src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="LinkedIn" />
        <h2>LinkedIn</h2>
        <a href="https://www.linkedin.com/in/shivamjadhav/" target="_blank" rel="noreferrer">
          Connect with me
        </a>
      </div>
  
      <div className="contact-card">
        <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="GitHub" />
        <h2>GitHub</h2>
        <a href="https://github.com/shivamjadhav2000" target="_blank" rel="noreferrer">
          github.com/shivamjadhav2000
        </a>
      </div>
  
      <div className="contact-card">
        <img src={`${process.env.PUBLIC_URL}/icons/medium.png`} alt="Medium" />
        <h2>Medium</h2>
        <a href="https://medium.com/@jadhavshivam0228" target="_blank" rel="noreferrer">
          @jadhavshivam0228
        </a>
      </div>
    </div>
  </section>
  
  )
}

export default Contact