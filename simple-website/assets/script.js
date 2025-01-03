     // Add event listener to form submit
     document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from submitting

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Convert to JSON
        const jsonData = JSON.stringify(formData);

        // Log the JSON data to the console
        console.log(jsonData);

        // Optionally send jsonData to the server using fetch or XMLHttpRequest
    });