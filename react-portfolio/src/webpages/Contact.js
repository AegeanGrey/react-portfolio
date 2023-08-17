import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Page for Contact Informations Structure/Content
function Contact() {
  return (
    <div>
      <Header />
      <h3 className='contactTitle'>Contact</h3>

    <div className='alignForm'>
      <form>
        <h2>Name:</h2>
        <input placeholder='John Doe'/>
        <h2>Email Address:</h2>
        <input placeholder='username@service.com'/>
        <h2>Message:</h2>
        <textarea rows='6' placeholder='How can I help you?'/>
        <button type='submit'>Submit</button>
      </form>
    </div>

      <Footer />
    </div>
  )
}

export default Contact
