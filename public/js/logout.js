// Logout function to send request to log out the user
const logoutHandler = async () => {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to log out.'); // When unsuccessful, show alert
    }
  };


  // Add an event listener to the logout button
document
.querySelector('#logout')
.addEventListener('click', logoutHandler);