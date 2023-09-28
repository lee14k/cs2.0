import Footer from "~/components/Footer";
import Pricing from "../components/Pricing";
import { createSignal, createEffect } from 'solid-js';
import axios from 'axios';

async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/organizational-asses/65`;

  try {
    const response = await axios.get(apiUrl);

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
const paragraphs = [
  { fieldName: 'textfieldone', description: '' },
  { fieldName: 'textfieldtwo', description: '' },
  { fieldName: 'textfieldthree', description: '' },
  { fieldName: 'textfieldfour', description: '' },
  { fieldName: 'textfieldfive', description: '' },
];

export default function Org() {
    const [acfData, setACFData] = createSignal({});
  const [paragraphsData, setParagraphsData] = createSignal(paragraphs);
 createEffect(async () => {
    const fetchedACFData = await fetchACFData();
    if (fetchedACFData !== null) {
      setACFData(fetchedACFData);
      console.log(fetchedACFData)

      const updatedParagraphsData = paragraphsData().map((paragraph) => ({
        ...paragraph,
        description: fetchedACFData[paragraph.fieldName] || '',
      }));
console.log(updatedParagraphsData)
      setParagraphsData(updatedParagraphsData);
    }
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-emerald-600">
            Organizational Conflict Assessment
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stop Problems Before They Start
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                      {paragraphsData()[0].description || "Default content if not fetched"}
              </p>
              <p className="mt-8">
                              {paragraphsData()[1].description || "Default content if not fetched"}
              </p>
            </div>
            <div>
              <p>
                     {paragraphsData()[2].description || "Default content if not fetched"}
              </p>
              <p className="mt-8">
                       {paragraphsData()[3].description || "Default content if not fetched"}
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="/contact"
              className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Let's get started{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="./csorg.jpg"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    <Pricing
        headline="Organizational Solutions"
        description="    Conflict culture assessment (Extensive assessment of the organization including employee interviews, management consultations, questionnaires, etc.). Management and employee training, coaching and Ombudsman services"
        inperson="600 "
        online="550"
        bighead=" Conflict culture assessment "
        timeUnit="per hour"
        subhead="We offer in person and virtual rates."
      />
      <Footer />
    </div>
  );
}
