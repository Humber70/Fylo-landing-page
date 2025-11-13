import css from './EmailSignup.module.css'
import { useState } from 'react';

export default function EmailSignup () {
  
  const [messageError, setMessageError] = useState({
    state: null,
    message: ''
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // get value of input email 
    let fieldEmail = new FormData(event.target).get('email')
    
    // mini Validation and set message error
    if(!fieldEmail) return setMessageError({
      state: true,
      message: 'Please enter a valid email Address'
    })
    
    // clear input and new message Successful
    setMessageError({
      state: false,
      message: 'Thanks'
    })
    document.querySelector('#email').value = ''

  }

  return (
    <section className={css.emailSignup}>
      <div className={css.contentEmailSignup}>
        <div className={css.contentInfo}>
          <h2>Get early access today</h2>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input id="email" type="email" placeholder='email@example.com' name='email' autoComplete='off'/>
          <button type='submit'>Get Started For Free</button>
        </form>
        {<span className={messageError.state ? `${css.messageError}` : `${css.messageSuccessful}`}>{messageError.state ? messageError.message : messageError.message}</span>}
      </div>
    </section>
  )
}