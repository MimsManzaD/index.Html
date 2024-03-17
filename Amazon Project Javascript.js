window.onload = function() {
    // Form Submission Validation
    document.getElementById('login-form').addEventListener('submit', function(e) {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (!email || !password) {
        alert('Please fill in both email and password.');
        e.preventDefault(); // Prevent form submission
      }
    });

    // Toggle "Need Help?" Section
    document.getElementById('help-link').addEventListener('click', function(e) {
      var helpContent = document.getElementById('help-content');
      if (helpContent.style.display === 'none' || !helpContent.style.display) {
        helpContent.style.display = 'block';
      } else {
        helpContent.style.display = 'none';
      }
      e.preventDefault(); // Prevent default anchor action
    });
};
