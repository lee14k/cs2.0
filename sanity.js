import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'luoqbu9k',
  dataset: 'CS',
  useCdn: true // `false` if you want to ensure fresh data
});

// Fetch data:
const query = '*[_type == "post"]';
client.fetch(query).then(posts => {
  console.log(posts);
});
