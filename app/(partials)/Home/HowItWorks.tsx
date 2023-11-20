import { BriefcaseIcon, Building, HexagonIcon, StampIcon } from 'lucide-react'
import React from 'react'

export const HowItWorks = () => {
    return (
        <div className="container mt-16 lg:mt-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
              How It Works
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
          {/*end grid*/}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {/* Content */}
            <div className="relative overflow-hidden text-center transition-all duration-500 ease-in-out bg-transparent group lg:px-10 rounded-xl">
              <div className="relative -m-3 overflow-hidden text-transparent">
                  <HexagonIcon className="w-32 h-32 mx-auto fill-green-600/5" />
                <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                    <Building className="w-10 h-10" />
                </div>
              </div>
              <div className="mt-6">
                <h5 className="text-xl font-medium">Evaluate Property</h5>
                <p className="mt-3 text-slate-400">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            {/* Content */}
            {/* Content */}
            <div className="relative overflow-hidden text-center transition-all duration-500 ease-in-out bg-transparent group lg:px-10 rounded-xl">
              <div className="relative -m-3 overflow-hidden text-transparent">
                <HexagonIcon className="w-32 h-32 mx-auto fill-green-600/5" />
                <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                  <BriefcaseIcon className="w-10 h-10" />
                </div>
              </div>
              <div className="mt-6">
                <h5 className="text-xl font-medium">Meeting with Agent</h5>
                <p className="mt-3 text-slate-400">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            {/* Content */}
            {/* Content */}
            <div className="relative overflow-hidden text-center transition-all duration-500 ease-in-out bg-transparent group lg:px-10 rounded-xl">
              <div className="relative -m-3 overflow-hidden text-transparent">
                  <HexagonIcon className="w-32 h-32 mx-auto fill-green-600/5" />
                <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                    <StampIcon className="w-10 h-10" />
                </div>
              </div>
              <div className="mt-6">
                <h5 className="text-xl font-medium">Close the Deal</h5>
                <p className="mt-3 text-slate-400">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            {/* Content */}
          </div>
          {/*end grid*/}
        </div>
    )
}
