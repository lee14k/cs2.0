import { useIntersectionObserver } from "./useIntersectionObserver.js";
import axios from 'axios';
import { createSignal } from 'solid-js';

// Function to fetch ACF data for a specific post
async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/home/7`;

  try {
    const response = await axios.get(apiUrl);
    return response.data[0].acf.textfieldone; // Return the specific ACF field 'textfieldone'
  } catch (error) {
    console.error('Error fetching ACF data:', error);
    return null;
  }
}

export default function Mid() {
  const refs = [];

  const onIntersect = (element) => {
    element.classList.add("visible");
  };
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

    createEffect(async () => {
    const textfieldoneValue = await fetchACFData();
    if (textfieldoneValue) {
      const updatedFeatures = features().map((feature) => ({
        ...feature,
        description: textfieldoneValue, // Update the 'description' property
      }));
      // Update the 'features' signal with the ACF data
      setFeatures(updatedFeatures);
    }
  });

  // Use useState to set and update the 'features' array

  // Fetch ACF data and update the 'description' property of each feature
  useEffect(() => {
    async function fetchData() {
      const textfieldoneValue = await fetchACFData();
      if (textfieldoneValue) {
        const updatedFeatures = features.map((feature) => ({
          ...feature,
          description: textfieldoneValue, // Update the 'description' property
        }));
        // Update the 'features' array with the ACF data
        setUpdatedFeatures(updatedFeatures);
      }
    }
    fetchData();
  }, []); 

  const [solveRef] = useIntersectionObserver(element => {
    element.classList.add("visible");
  }, { threshold: 0.1 });

  return (
    <div class="bg-white sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-emerald-600">
            Conflict is inevitable
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {"We'll give you the tools and solutions to"} <br/> <span class="solve-underline" ref={solveRef}>solve it</span>
          </p>

          {/* Render the updated 'description' property */}
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {updatedFeatures[0].description}
          </p>
        </div>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Have a professional dispute? Want to squash conflict before it
            starts in your organization? We have the experience and knowledge to
            offer solutions.{" "}
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                    <div key={feature.name} class="flex flex-col transition-opacity opacity-0" ref={refs[index]}>
                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 flex-none text-emerald-600">
                <h2>{feature.name}</h2>  
                </dt>
                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p class="flex-auto">{feature.description}</p>
                  <p class="mt-6">
                    <a
                      href={feature.href}
                      class="text-sm font-semibold leading-6 text-emerald-700"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  );
}

