import axios from 'axios';

const username = 'kailee';
const password = 'GeZc KO7P qF1d oumv OuKW KCcm';

// The URL should point to a specific post of your custom post type.
// If you want to create a new field, omit the POST_ID in the URL.
const postID = '7'; // Replace with the actual post ID
const customPostType = 'home'; // Replace with your custom post type slug
const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/${customPostType}/${postID}`;

// Encode the username and password in base64
const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

// Data to create a new field for the ACF field
const newFieldData = {
  acf: {
    new_custom_field: 'New Value for Custom Field', // Replace with your desired value
  },
};

// Use Axios to update the existing post with the new field
axios.put(apiUrl, newFieldData, {
  headers: {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    console.log('Field added successfully with Axios:', response.data);
  })
  .catch((error) => {
    console.error('Error adding field:', error);
  });
