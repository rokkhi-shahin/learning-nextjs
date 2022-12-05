import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef()
  function registrationHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    if(email){
      fetch('/api/newsletter',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          email
        })
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
