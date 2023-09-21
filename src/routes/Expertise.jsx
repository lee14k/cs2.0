import Footer from '~/components/Footer'
import Headerimage from '~/components/Headerimage'
const features = [
  {
    name: 'Tort Litigation',
    description:
      'We have an extensive background in dealing with these cases as both a Plaintiff and a Defendant. We have litigated and tried a wide variety of matters, including but not limited to, auto accidents, neighbor disputes, product liability cases, fire cases, slip and falls, wrongful death, nuisance and trespass and most other types of torts.',
  },
  {
    name: 'Probate',
    description:
      'We have handled many types of Probate matters.   Our philosophy in this area is to attempt to resolve the matters as quickly as possible, many times pre-litigation, as legal fees can quickly consume the corpus of the estate.',
  },
  {
    name: 'Business Matters',
    description:
      'With an extensive background as business and start-up owners ourselves, we have become extremely knowledgable in matters of finance, contracts, and many other areas of business. We are uniquely qualified to assist you in business resolution in ways other mediators cannot.',
  },
  {
    name: 'Construction Matters',
    description:
      'We have handled all types of construction litigation as both the plaintiff and defendant.   Through the years we have represented both painting and contractors in defect cases, contract disputes and construction accidents.',
  },
    {
    name: 'Workplace Safety',
    description:
      'In addition to construction safety issues we have worked on all types of third party disputes arising out of workplace safety issues such as auto accidents, falls, equipment injuries and the like.',
  },
]

export default function Expertise() {
  return (
    <>
          <Headerimage heading="Expertise" page="Expertise" />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Trust our experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
Our areas of specialty          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We have extensive experiences in many areas of legal practice. Take a look and if you don't see your area of need, contact us and we will be happy to discuss your case with you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer/>
    </div>
    </>

  )
}
