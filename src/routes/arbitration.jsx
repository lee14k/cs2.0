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
]
export default function Arbitration() {
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
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-emerald-600">
                A different approach to conflict
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Achieve fair resolutions with arbitration{" "}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Trust us to ensure efficient arbitration
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="./csarb.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                We understand that conflicts, whether personal or professional,
                can be challenging and often emotionally draining. Disputes, if
                not handled adeptly, can lead to fractured relationships,
                financial strain, and a host of other unwanted complications.
                That's where we step in, offering a beacon of resolution amidst
                the fog of disagreement.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Personal problems demand personal solutions.
                    </strong>{" "}
                    One key advantage of opting for our services is the
                    personalized attention each case receives. We believe that
                    every conflict has its unique intricacies and deserves a
                    tailored approach. We are deeply committed to fostering an
                    environment of open dialogue, where all parties feel heard
                    and understood. This not only expedites the resolution
                    process but also ensures that the outcomes are sustainable
                    and long-lasting.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Experienced Professionals
                    </strong>{" "}
                    Our team at Conflict Solutions comprises seasoned
                    professionals who bring with them a wealth of experience
                    spanning various sectors, from international trade disputes
                    to intricate technology disagreements. We pride ourselves on
                    our ability to navigate the nuances of each unique case,
                    always prioritizing fairness, understanding, and the best
                    interests of all parties involved.
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Resolution without the hassle
              </h2>
              <p className="mt-6">
                In today's fast-paced world, many are seeking alternatives to
                the traditional, often cumbersome, legal proceedings. Litigation
                can be lengthy, costly, and public, whereas arbitration emerges
                as a confidential, swifter, and more cost-effective solution.
                Arbitration empowers the involved parties to have more control
                over the resolution process, from choosing the arbitrator to
                setting the timeline. This often results in outcomes that are
                more in tune with the needs and preferences of the disputing
                parties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pricing
        headline="Procedural Arbitration"
        description="Procedural Hearings and Motion Practice"
        inperson="600 "
        online="550"
        bighead="Procedural Hearings & Motion Practice"
        timeUnit="per hour"
        subhead="We offer in person and virtual rates."
      />
      <Pricing
        headline="Arbitration Hearing"
        description="Arbitration Hearing"
        inperson="750 "
        online="600 "
        bighead="Arbitration Hearing"
        timeUnit="per hour"
        subhead="We offer in person and virtual rates."
      />
      <Footer />
    </div>
  );
}
