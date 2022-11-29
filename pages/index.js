import Head from 'next/head';
import { useRef, useState } from 'react';

function HomePage({ events }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const text = feedbackInputRef.current.value;
    if (email && text) {
      fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({ email, text }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => setFeedbacks([...feedbacks,data.data]))
        .catch(err => console.log(err))
    }
  }
  const loadFeedbackHandler = ()=>{
    fetch('api/feedback')
    .then(res=>res.json())
    .then(data=>setFeedbacks(data.data))
  }
  return (
    <div>
      <h1>Home page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea rows='5' id='feedback' ref={feedbackInputRef} />
        </div>
        <button type='submit'>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedbacks</button>
      <ul>
        {
          feedbacks && feedbacks.map(feedback=>(
            <li key={feedback.id}>{feedback.text}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default HomePage;
