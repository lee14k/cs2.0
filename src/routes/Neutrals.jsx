import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'

const people = [
  {
    name: "Patrick O'Brien",
    role: 'CEO and Arbiter',
    imageUrl:
      './patrickhead.jpg',
    bio: "Patrick O’Brien started practicing law at a major California law firm in 1993.  At the time most case settled with a few phone calls or in person after a deposition.   He has had a front row seat to the development of the many new varied advanced methods of conflict resolution. Mr. O’Brien has participated in hundreds of mediations through the years, representing both plaintiffs and defendants. In addition to mediation, Mr. O’Brien has an extensive background as a trial attorney in a wide swath of practice areas.   He is intimately familiar with the Civil Procedure and Evidence and as such would make an excellent choice as an Arbitrator for many types of matters. During his studies, Mr. O’Brien became interested in the new methods being used to assist Organizations with internal conflict.    It is incredible to understand the amount of productivity lost by organizational in fighting, rumormongering and general employee unhappiness at work.   Given that Mr. O’Brien left the active practice of law for 8 years and ran two startups, he is well aware of these problems",
  },
  // More people...
]

export default function Neutrals() {
  return (
    <>
          <HeaderImage heading="Neutrals" page="Neutrals" />
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Arbiters</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
           
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
    </>
  )
}
