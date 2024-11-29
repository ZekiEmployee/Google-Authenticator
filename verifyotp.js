// Import the required library
const otplib = require('otplib'); // Library for generating and validating OTPs

// Example user-provided OTP (e.g., input from a user via a login form)
const userOTP = '311096'; // Replace with the OTP entered by the user

// Secret key shared between the server and the user's app
const secret = "HJZSCQA2LJTGECSJ"; // This should match the secret key stored on the server

// Validate the OTP entered by the user
const isValid = otplib.authenticator.check(userOTP, secret); 
// The 'check' method generates an OTP based on the current time using the secret key 
// and compares it with the OTP provided by the user

// Check the result of validation
if (isValid) {
  console.log('OTP is valid'); // OTP matches the expected value
} else {
  console.log('Invalid OTP'); // OTP does not match or has expired
}
