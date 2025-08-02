const express = require('express');
const router = express.Router();

// This is a simple endpoint for the contact form. In a real application, you might:
// 1. Save the message to a database table.
// 2. Send an email notification to your support team using a library like Nodemailer.
// 3. Integrate with a ticketing system like Zendesk or Jira.

router.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // For now, we'll just log it to the server console to confirm it's working.
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log('---------------------------------');

    res.status(200).json({ success: true, message: 'Your message has been received. We will get back to you shortly.' });
});

module.exports = router;