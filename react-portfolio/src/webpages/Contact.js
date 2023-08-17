import { React, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserInput from '../components/Form';

// Page for Contact Informations Structure/Content
function Contact() {

  const [values, setValues] = useState({
    username: '',
    email: '',
  })

  // Array of Objects used to define each section of our contact form
  const inputs = [
    {
        id: 1,
        name: 'username',
        type: 'text', 
        placeholder: 'John Doe',
        label: 'Username:'
    },
    {
        id: 2,
        name: 'email',
        type: 'text', 
        placeholder: 'username@service.com',
        label: 'Email:'
    }
  ];

  // When a user clicks the submit button it will prevent it from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Header />
      <h3 className='contactTitle'>Contact</h3>

    {/* Creates the Username and Email section of the form */}
    <div className='alignForm'>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
            <UserInput key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}/>
        ))}

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
