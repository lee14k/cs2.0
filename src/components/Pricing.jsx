export default function Pricing({ headline, inperson, online, bighead, timeUnit, subhead, description}) {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-4xl">{bighead}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
               {subhead && <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"> {subhead}</span>}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 mt-20">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{headline}</h3>
            <div className="mt-10 flex items-center gap-x-4">
              {description}
              <div className="h-px flex-auto bg-gray-100" />
            </div>
          </div>
          <div className="-mt-2 p-2">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">In-person</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">${inperson}</span>
                  {timeUnit && <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD {timeUnit}</span>}
                </p>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">*travel billed at half rate</span>
              </div>
              {online && (
                <div className="mx-auto max-w-xs px-8 mt-20">
                  <p className="text-base font-semibold text-gray-600">Virtual</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${online}</span>
                    {timeUnit && <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD {timeUnit}</span>}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
