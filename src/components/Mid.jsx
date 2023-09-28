import { createSignal, createEffect, Suspense } from 'solid-js';
import axios from 'axios';

// Function to fetch ACF data for a specific post
async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/home/7`;

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

export default function Mid() {
  const [acfData, setACFData] = createSignal({});

  // Fetch ACF data and update the 'acfData' signal
  createEffect(async () => {
    const fetchedACFData = await fetchACFData();
    if (fetchedACFData !== null) {
      setACFData(fetchedACFData);
    }
  });

  const [features, setFeatures] = createSignal([
    {
      name: "Organizational Assessment",
      description: "", // Initialize description as an empty string
      href: "/organizationalculture",
    },
    {
      name: "Mediation",
      description: "",
      href: "/mediation",
    },
    {
      name: "Arbitration",
      description: "",
      href: "/arbitration",
    },
  ]);

  // Fetch ACF data and update the 'description' property of each feature
  createEffect(() => {
    const { textfieldone, textfieldtwo, textfieldthree, textfieldfour } = acfData();
    if (textfieldone) {
      const updatedFeatures = features().map((feature) => ({
        ...feature,
        description: textfieldone,
        // Add more fields as needed
        fieldTwo: textfieldtwo,
        fieldThree: textfieldthree,
        fieldFour:textfieldfour,
      }));
      setFeatures(updatedFeatures);
    }
  });

  return (
    <div class="bg-white sm:py-32 mx-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-emerald-600">
            Conflict is inevitable
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {"We'll give you the tools and solutions to"} <br/> <span class="solve-underline" >solve it</span>
          </p>
           <p className="mt-6 text-lg leading-8 text-gray-600">
              {acfData().textfieldone}
            </p>
          </div>
          </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div class="grid grid-cols-3 gap-x-20 mt-10">
          {features().map((feature, index) => (
            <div key={index} class="mt-4 text-lg leading-8 text-gray-600">
              <span class="flex items-center gap-x-3 text-base font-semibold leading-7 flex-none text-emerald-600">
                {feature.name}
              </span>
              <span class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                {index === 0 ? feature.fieldTwo : index === 1 ? feature.fieldThree : feature.fieldFour}
              </span>
              {/* Button for each column */}
              <p class="mt-6">
             
              </p>
            </div>
          ))}
        </div>
      </Suspense>
      {/* Common button for all columns */}
      <div class="mt-6 text-center">
        <a
          href="/services" // Set the appropriate link for the common button
          class="text-sm font-semibold leading-6 text-emerald-700"
        >
        Learn More<span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}




