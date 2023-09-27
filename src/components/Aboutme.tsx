import { createSignal, createEffect, Suspense } from 'solid-js';
import axios from 'axios';

// Function to fetch ACF data for a specific post
async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/about/47`;

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
const stats = [
    { label: "", value: "" },
  { label: "Business was founded", value: "2023" },
  { label: "Years of experience", value: "30+" },
      { label: "", value: "" },
];

const team = [
  {
    name: "Patrick O'Brien",
    role: "Founder / CEO",
    imageUrl: "./patrickhead.jpg",
  },
 
  // More people...
];


export default function Aboutme() {
  const [acfData, setACFData] = createSignal({});

  // Fetch ACF data and update the 'acfData' signal
  createEffect(async () => {
    const fetchedACFData = await fetchACFData();
    if (fetchedACFData !== null) {
      setACFData(fetchedACFData);
    }
  });

  return (
    <div>
      <main class="relative isolate">
        {/* Background */}
        <div
          class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        ></div>

        {/* Header section */}
        <div class="px-6 pt-14 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-4xl font-bold tracking-tight text-emerald-600 sm:text-6xl">
              We love problem solving
            </h2>
            <p class="mt-6 text-lg leading-8 text-black">
     {acfData().textfieldone}
            </p>
          </div>
        </div>

        {/* Content section */}
        <div class="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div class="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-emerald-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
        {acfData().textfieldtwo}
                </p>
              </div>
              <div>
                <p class="text-black">
                  {acfData().textfieldthree}
                </p>
                <p class="mt-8 "></p>
              </div>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-1 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt class="text-base leading-7 text-emerald-500">
                    {stat.label}
                  </dt>
                  <dd class="text-3xl font-semibold tracking-tight text-emerald">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="./aboutcs.jpg"
            alt=""
            class="aspect-[9/4] w-full object-cover xl:rounded-3xl fade-in"
          />
        </div>

        {/* Values section */}

        {/* Team section */}
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-emerald sm:text-4xl">
              Our team
            </h2>
            <p class="mt-6 text-lg leading-8 text-emerald-600">
              {acfData().textfieldfour}
            </p>
          </div>
          <ul
            role="list"
            class="mx-auto mt-20 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            {team.map((person) => (
              <li key={person.name}>
                <div class="imgcontain">
                  <img
                    class="rounded-2xl aboutpic"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                  {person.name}
                </h3>
                <p class="text-base leading-7 text-black">
                  {person.role}
                </p>
              
              </li>
            ))}
          </ul>
        </div>
      </main>
 
    </div>
  );
}
  
