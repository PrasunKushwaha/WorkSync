const bcrypt = require('bcryptjs');

const password = 'themsp'; // Password you want to test

// Hash the password
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hashedPassword);
  }
});
