// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Toggle between Login/Signup forms
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    loginToggle.addEventListener('click', () => {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      loginToggle.classList.add('active');
      signupToggle.classList.remove('active');
    });
  
    signupToggle.addEventListener('click', () => {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      loginToggle.classList.remove('active');
      signupToggle.classList.add('active');
    });
  
    // Toggle password visibility
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        const input = e.target.closest('.input-group').querySelector('input');
        if (input.type === 'password') {
          input.type = 'text';
          e.target.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
          input.type = 'password';
          e.target.classList.replace('fa-eye-slash', 'fa-eye');
        }
      });
    });
  
    // Password strength indicator
    const passwordInput = document.getElementById('signup-password');
    const strengthMeter = document.getElementById('strength-meter');
    const strengthBar = document.querySelector('.strength-bar');
  
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      let strength = 0;
  
      // Check length
      if (password.length >= 8) strength += 1;
      // Check for numbers
      if (password.match(/\d/)) strength += 1;
      // Check for special chars
      if (password.match(/[!@#$%^&*]/)) strength += 1;
      // Check for uppercase
      if (password.match(/[A-Z]/)) strength += 1;
  
      // Update UI
      let color, width;
      switch (strength) {
        case 0:
        case 1:
          color = 'red';
          width = '20%';
          strengthMeter.innerText = 'Weak';
          break;
        case 2:
          color = 'orange';
          width = '50%';
          strengthMeter.innerText = 'Medium';
          break;
        case 3:
        case 4:
          color = 'green';
          width = '100%';
          strengthMeter.innerText= 'Strong';
          break;
      }
  
      strengthBar.style.backgroundColor = color;
      strengthBar.style.width = width;
    });
  
    // Form validation
    document.getElementById('signup-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
  // if password and confirmPassword is not same
      if (password !== confirmPassword) {
        alert("Password don't match!");
        return;
      }
      alert("Signup successful (demo)");
    });
  
    // Forgot password
    document.querySelector('.forgot-password').addEventListener('click', (e) => {
      e.preventDefault();
      const email = prompt("Enter your email to reset password:");
      if (email) alert(`Password reset link sent to ${email} (demo)`);
    });
  
    // Social login buttons 
    document.querySelectorAll('.social-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert(`Redirecting to ${btn.classList.contains('google') ? 'Google' : 'Facebook'} login (demo)`);
      });
    });
  });