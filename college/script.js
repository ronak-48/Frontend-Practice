document.getElementById('bus-pass-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dob = document.getElementById('dob').value;
  const passType = document.getElementById('pass-type').value;

  // Output the bus pass details
  const passOutput = document.getElementById('pass-output');
  passOutput.innerHTML = `
      <h2>Bus Pass Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Pass Type:</strong> ${passType}</p>
  `;

  passOutput.style.display = 'block';
});
