import { useIntersectionObserver } from "./useIntersectionObserver.js";

const features = [
  {
    name: "Organizational Assessment",
    description:
      "Organizational conflicts can arise from various sources, be it individual personalities, team dynamics, or structural issues. Regular conflict assessments can identify potential trouble spots, thereby allowing for proactive resolution and fostering a harmonious working environment.",
    href: "/organizationalculture",
  },
  {
    name: "Mediation",
    description:
      "Our goal is to provide an impartial platform where parties can freely express their concerns, find common ground, and reach mutually beneficial solutions, ensuring that the business thrives and conflict is resolved.",
    href: "/mediation",
  },
  {
    name: "Arbitration",
    description:"For smaller enterprises without a dedicated Human Resources team, a Contract Ombuds emerges as a pivotal resource, enabling employees to navigate workplace concerns. ",
        href: "/arbitration",
  },
];

export default function Mid() {
  const refs = [];

  const onIntersect = (element) => {
    element.classList.add("visible");
  };

  features.forEach(() => {
    const [setRef] = useIntersectionObserver(onIntersect, { threshold: 0.1 });
    refs.push(setRef);
  });
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
  {"We'll give you the tools and solutions to"} <span class="solve-underline" ref={solveRef}>solve it</span>

</p>

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
                  {feature.name}
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
    </div>
  );
}
