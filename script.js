// Function to scroll to the courses section
function exploreCourses() {
    document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle login
  function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }
  }
  