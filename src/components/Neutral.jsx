import { createSignal, createEffect } from 'solid-js';
import axios from 'axios';
import Headerimage from '../components/Headerimage';

// Function to fetch ACF data for a specific post
async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/neutrals/57`;

  try {
    const response = await axios.get(apiUrl);

    // Check if the response data is an object and has the 'acf' property
    if (typeof response.data === 'object' && response.data.acf) {
      return response.data.acf;
    } else {
      console.error('Error: ACF data not found in response.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching ACF data:', error);
    return null;
  }
}

const people = [
  {
    name: "Patrick O'Brien",
    role: 'CEO and Neutral',
    imageUrl: './patrickhead.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
    description: ""
  },
  // More people...
];

export default function Neutral() {
  const [acfData, setACFData] = createSignal({});
  const [descriptionOne, setDescriptionOne] = createSignal("");
  const [descriptionTwo, setDescriptionTwo] = createSignal("");

  // Fetch ACF data and update the 'description' signals with textfieldone and textfieldtwo
  createEffect(async () => {
    const fetchedACFData = await fetchACFData();
    if (fetchedACFData !== null) {
      console.log("Fetched ACF Data:", fetchedACFData); // Debug output
      setACFData(fetchedACFData);

      // Update descriptionOne and descriptionTwo with ACF data
      setDescriptionOne(fetchedACFData.textfieldone || "");
      setDescriptionTwo(fetchedACFData.textfieldtwo || "");
    }
  });

  return (
    <>
      <Headerimage heading="Neutrals" page="Neutrals" />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Neutrals</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {descriptionOne()}
            </p>
          </div>

          {people.map((person, index) => (
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              key={person.name}
            >
              <li>
                <img className="aspect-[1/1] w-full rounded-2xl object-cover object-center" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
              <li>
                <p>{descriptionTwo()}</p>
              </li>
            </ul>
          ))}

        </div>
      </div>
    </>
  );
}
