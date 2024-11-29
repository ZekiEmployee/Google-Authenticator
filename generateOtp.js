// Import required libraries
const otplib = require('otplib'); // Library for generating and validating OTPs
const qrcode = require('qrcode'); // Library for generating QR codes

// Step 1: Generate a new secret key
const secret = otplib.authenticator.generateSecret(); // Generates a random secret key for the user
console.log(`Secret key: ${secret}`); // Display the secret key (should be stored securely for later validation)

// Step 2: Create a user and service identifier
const user = 'user@example.com'; // Replace with the user's email or unique identifier
const service = 'MyApp'; // Replace with your application or service name

// Step 3: Generate a key URI for use with OTP authenticator apps
const otpauth = otplib.authenticator.keyuri(user, service, secret); 
// Generates a URI that follows the otpauth:// scheme, compatible with Google Authenticator
console.log("otpath", otpauth);

// Step 4: Generate a QR code based on the key URI
qrcode.toDataURL(otpauth, (err, imageUrl) => {
  if (err) {
    console.error('Error generating QR code:', err); // Log errors if QR code generation fails
    return;
  }
  // Display the QR code as a base64 image URL
  console.log('Scan this QR code with Google Authenticator:', imageUrl);
});
