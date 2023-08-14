const admin = require("firebase-admin");

// Firebase Admin SDK initialization
if (!admin.apps.length) {
    const serviceAccount = require("../../path-to-service-account-file.json"); // Make sure to have this securely
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).end();
    }
    
    const { name, email, message } = req.body;

    // Save to Firebase
    await db.collection("contactSubmissions").add({
        name, 
        email,
        message,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    // Logic to send an email (this requires a service like SendGrid, Nodemailer, or any other email service)
    // ...

    return res.status(200).json({ message: "Form submitted successfully!" });
};
