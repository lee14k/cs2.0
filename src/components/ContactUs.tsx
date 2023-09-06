import { createSignal } from "solid-js";
const [submissionStatus, setSubmissionStatus] = createSignal("idle"); // 'idle', 'sending', 'success', 'error'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
declare module "solid-js" {
  interface InputHTMLAttributes<T> extends JSX.InputHTMLAttributes<T> {
    bind?: any;
  }
}

export default function ContactUs() {
  const [agreed, setAgreed] = createSignal(false);

  // Set up signals for form fields
  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [company, setCompany] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [phoneNumber, setPhoneNumber] = createSignal("");
  const [country, setCountry] = createSignal("US");
  const [message, setMessage] = createSignal("");
  async function handleSubmit(event) {
    event.preventDefault();
    setSubmissionStatus("sending");
    const formData = {
      firstName: firstName(),
      lastName: lastName(),
      company: company(),
      email: email(),
      phoneNumber: phoneNumber(),
      country: country(),
      message: message(),
    };
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("error");
    }
  }
  return (
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="mt-5">
        {submissionStatus() === "sending" && <span>Sending...</span>}
        {submissionStatus() === "success" && (
          <span>Your message has been sent! We'll get back to you soon.</span>
        )}
        {submissionStatus() === "error" && (
          <span>Oops! Something went wrong. Please try again.</span>
        )}
      </div>
      <div
        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
We'll get back to you as soon as possible        </p>
      </div>
      <form onSubmit={handleSubmit} class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div class="mt-2.5">
              <input
                value={firstName()}
                onInput={(e) => setFirstName(e.currentTarget.value)}
                type="text"
                name="firstName"
                id="firstName"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                bind={lastName}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              htmlFor="company"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                bind={company}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              htmlFor="email"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                bind={email}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              htmlFor="phone-number"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div class="relative mt-2.5">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" class="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  bind={country}
                  class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                bind={phoneNumber}
                class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              htmlFor="message"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                bind={message}
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <Switch
              checked={agreed()}
              onChange={(e) => setAgreed(e.target.checked)}
              class={classNames(
                agreed() ? "bg-emerald-600" : "bg-gray-200",
                "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              )}
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                class={classNames(
                  agreed() ? "translate-x-3.5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </div>
          <div class="flex gap-x-4 sm:col-span-2">
            <label class="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="/privacypolicy" class="font-semibold text-emerald-600">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}

function Switch(props) {
  return <input type="checkbox" {...props} />;
}
