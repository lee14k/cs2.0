const people = [
  {
    name: "Patrick O'Brien",
    role: 'CEO and Arbiter',
    imageUrl:
      './patrickhead.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
    description:"Patrick O’Brien started practicing law at a major California law firm in 1993.  At the time most case settled with a few phone calls or in person after a deposition.   He has had a front row seat to the development of the many new varied advanced methods of conflict resolution.At the forefront of these has been mediation.  Mr. O’Brien has participated in hundreds of mediations through the years, representing both plaintiffs and defendants.   Unfortunately he has noticed the incredible rise in the cost of mediation.   At times this is coupled with either a disinterested mediator or mediators who simply don’t devote the time, effort or energy needed to get cases resolved."
  },
  // More people...
]
import HeaderImage from '../components/HeaderImage'

export default function Neutrals() {
  return (
    <>
          <HeaderImage heading="Neutrals" page="Neutrals" />

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Arbiters</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           Passionate about dissolving conflict and finding creative solutions.
          </p>
        </div>
    
          {people.map((person) => (
                <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
            <li key={person.name}>
              <img className="aspect-[1/1] w-full rounded-2xl object-cover object-center" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
           
            </li>
            <li>
              <p>{person.description}</p>
            </li>
         </ul>
          ))}
        
      </div>
    </div>
    </>
  )
}
