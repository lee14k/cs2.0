function handleSubmit() {
  const formData = {
    firstName: firstName(),
    lastName: lastName(),
    company: company(),
    email: email(),
    phoneNumber: phoneNumber(),
    country: country(),
    message: message()
  };

  fetch("YOUR_FIREBASE_CLOUD_FUNCTION_URL/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
