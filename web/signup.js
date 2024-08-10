document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    // Perform further validation if needed
    
    // Submit the form (you can send the data to your server here)
    alert("Sign up successful!");
    this.reset(); // Reset form
  });