const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const creditCard = document.querySelector('#creditCard').value.trim();
    const cvc = document.querySelector('#cvc').value.trim();
  
    if (name && email && password && phone && creditCard && cvc) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, phone, creditCard, cvc, location:1 }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector('.signupForm')
  .addEventListener('submit', signupFormHandler);