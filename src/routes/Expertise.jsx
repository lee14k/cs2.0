import { createSignal, createEffect, Suspense } from "solid-js";
import axios from "axios";
import Footer from "~/components/Footer";
import Headerimage from "~/components/Headerimage";

// Function to fetch ACF data for a specific post
async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/expertise/55`;

  try {
    const response = await axios.get(apiUrl);

    // Check if the response data is an object and has the 'acf' property
    if (typeof response.data === "object" && response.data.acf) {
      return response.data.acf;
    } else {
      console.error("Error: ACF data not found in response.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching ACF data:", error);
    return null;
  }
}

export default function Expertise() {
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
      name: "Tort Litigation",
      description: "",
    },
    {
      name: "Probate",
      description: "",
    },
    {
      name: "Business Matters",
      description: "",
    },
    {
      name: "Construction Matters",
      description: "",
    },
    {
      name: "Workplace Safety",
      description: "",
    },
  ]);

  // Fetch ACF data and update the 'description' property of each feature
  createEffect(() => {
    const {
      textfieldone,
      textfieldtwo,
      textfieldthree,
      textfieldfour,
      textfieldfive,
      textfieldsix,
    } = acfData();
    if (textfieldone) {
      const updatedFeatures = features().map((feature, index) => ({
        ...feature,
        description:
          index === 0
            ? textfieldtwo
            : index === 1
            ? textfieldthree
            : index === 2
            ? textfieldfour
            : index === 3
            ? textfieldfive
            : textfieldsix,
      }));
      setFeatures(updatedFeatures);
    }
  });
  return (
    <>
      <Headerimage heading="Expertise" page="Expertise" />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              Trust our experience
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our areas of specialty
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {acfData().textfieldone}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features().map((feature, index) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
