import { createSignal, createEffect } from 'solid-js';
import axios from 'axios';
import Pricing from '../components/Pricing';

async function fetchACFData() {
  const apiUrl = `https://kaileehamre.net/wp-json/wp/v2/mediation/64`;

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

export default function Mediation() {
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
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-16 lg:overflow-visible lg:px-0">
     
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-emerald-600">
                  {" "}
                  Providing comprehensive & creative solutions to complicated
                  problems
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Mediation
                </h1>
           <p className="mt-6 text-xl leading-8 text-gray-700">
                      {paragraphsData()[0].description || "Default content if not fetched"}

            
</p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="./csmed.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                               {paragraphsData()[1].description || "Default content if not fetched"} 

                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Cost-Effective{" "}
                      </strong>{" "}
                    {paragraphsData()[2].description || "Default content if not fetched"} 
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Confidential & Efficient :{" "}
                      </strong>{" "}
                     {paragraphsData()[3].description || "Default content if not fetched"} 
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
            {paragraphsData()[4].description || "Default content if not fetched"} 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing
        headline="Full Day Mediation"
        description="Includes pre-mediation calls with all parties"
        inperson="7500 "
        online="6500"
        bighead="Procedural Hearings & Motion Practice"
         subhead="We offer in person and virtual rates."
      />
      <Pricing
        headline="Half Day Day Mediation"
        description="Includes pre-mediation calls with all parties"
        inperson="4000 "
        online="3500"
        bighead="Procedural Hearings & Motion Practice"
         subhead="We offer in person and virtual rates."
      />
      <Pricing
        headline="Quick Mediation Solution"
        description="For smaller matters or matters where the parties are already close"
        inperson="2500 "
        bighead="Quick Mediation Solution"
        
      />
    </div>
  );
}
