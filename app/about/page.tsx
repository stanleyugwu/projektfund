import React from 'react'
import { Header } from '../(partials)/Header'
import { Footer } from '../(partials)/Footer'
import { Title } from '@/components/title'


export default function () {
    return (
        <>
            <Header />
            <Title title='About Us' />

            <div>
                <section className="relative table w-full py-32 bg-center bg-no-repeat bg-cover lg:py-36" style={{backgroundImage: "url(/assets/images/bg/02.jpg)"}}>
                    <div className="absolute inset-0 bg-black opacity-80" />
                    <div className="container">
                        <div className="grid grid-cols-1 mt-10 text-center">
                            <h3 className="z-20 text-3xl font-medium leading-normal text-white md:text-4xl md:leading-normal">About Us</h3>
                        </div>
                    </div>
                </section>
                
                <div className="relative">
                    <div className="overflow-hidden text-white shape z-1 dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
                    </svg>
                    </div>
                </div>
                
                <section className="relative py-16 lg:py-24">
                    <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-5">
                        <div className="relative">
                            <img src="#" className="shadow-md rounded-xl" alt="" />
                            <div className="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
                            <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="inline-flex items-center justify-center w-20 h-20 text-green-600 bg-white rounded-full shadow-md lightbox dark:shadow-gyay-700 dark:bg-slate-900">
                                <i className="inline-flex items-center justify-center text-2xl mdi mdi-play" />
                            </a>
                            </div>
                        </div>
                        </div>{/*end col*/}
                        <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl lg:leading-normal">Efficiency. Transparency. <br /> Control.</h4>
                            <p className="max-w-xl text-slate-400">Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Hously is Real Estate Redefined.</p>
                            <div className="mt-4">
                            <a href="#" className="mt-3 text-white bg-green-600 rounded-md btn hover:bg-green-700">Learn More </a>
                            </div>
                        </div>
                        </div>{/*end col*/}
                    </div>{/*end grid*/}
                    </div>{/*end container*/}
                    <div className="container mt-16 lg:mt-24">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">How It Works</h3>
                        <p className="max-w-xl mx-auto text-slate-400">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>{/*end grid*/}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {/* Content */}
                        <div className="relative overflow-hidden text-center transition-all duration-500 ease-in-out bg-transparent group lg:px-10 rounded-xl">
                        <div className="relative -m-3 overflow-hidden text-transparent">
                            <i data-feather="hexagon" className="w-32 h-32 mx-auto fill-green-600/5" />
                            <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                            <i className="uil uil-estate" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h5 className="text-xl font-medium">Evaluate Property</h5>
                            <p className="mt-3 text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                        </div>
                        {/* Content */}
                        {/* Content */}
                        <div className="relative overflow-hidden text-center transition-all duration-500 ease-in-out bg-transparent group lg:px-10 rounded-xl">
                        <div className="relative -m-3 overflow-hidden text-transparent">
                            <i data-feather="hexagon" className="w-32 h-32 mx-auto fill-green-600/5" />
                            <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                            <i className="uil uil-bag" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h5 className="text-xl font-medium">Meeting with Agent</h5>
                            <p className="mt-3 text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                        </div>
                        {/* Content */}
                        {/* Content */}
                        <div className="relative overflow-hidden text-center transition-all duration-500 ease-in-out bg-transparent group lg:px-10 rounded-xl">
                        <div className="relative -m-3 overflow-hidden text-transparent">
                            <i data-feather="hexagon" className="w-32 h-32 mx-auto fill-green-600/5" />
                            <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                            <i className="uil uil-key-skeleton" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h5 className="text-xl font-medium">Close the Deal</h5>
                            <p className="mt-3 text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                        </div>
                        {/* Content */}
                    </div>{/*end grid*/}
                    </div>{/*end container*/}
                </section>

                <section className="relative py-24 bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url(/assets/images/bg/02.jpg)"}}>
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="container">
                        <div className="grid justify-center grid-cols-1 text-center lg:grid-cols-12 md:text-left">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="grid items-center grid-cols-1 md:grid-cols-3">
                                    <div className="z-20 text-center counter-box">
                                        <h1 className="mb-2 text-4xl font-semibold text-white lg:text-5xl"><span className="counter-value" data-target={1548}>1010</span>+</h1>
                                        <h5 className="text-lg font-medium text-white counter-head">Properties Sell</h5>
                                    </div>
                                    
                                    <div className="z-20 text-center counter-box">
                                        <h1 className="mb-2 text-4xl font-semibold text-white lg:text-5xl"><span className="counter-value" data-target={25}>2</span>+</h1>
                                        <h5 className="text-lg font-medium text-white counter-head">Award Gained</h5>
                                    </div>

                                    <div className="z-20 text-center counter-box">
                                        <h1 className="mb-2 text-4xl font-semibold text-white lg:text-5xl"><span className="counter-value" data-target={9}>0</span>+</h1>
                                        <h5 className="text-lg font-medium text-white counter-head">Years Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="relative py-16 lg:py-24">
                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center">
                            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">Meet The Agent Team</h3>
                            <p className="max-w-xl mx-auto text-slate-400">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>{/*end grid*/}
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                            <div className="lg:col-span-3 md:col-span-6">
                            <div className="text-center group">
                                <div className="relative inline-block mx-auto overflow-hidden rounded-full h-52 w-52">
                                <img src="assets/images/client/04.jpg"  alt="" />
                                <div className="absolute inset-0 transition-all duration-500 ease-in-out rounded-full opacity-0 bg-gradient-to-b from-transparent to-black h-52 w-52 group-hover:opacity-100" />
                                <ul className="absolute list-none transition-all duration-500 ease-in-out start-0 end-0 -bottom-20 group-hover:bottom-5">
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="facebook" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="instagram" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="linkedin" className="w-4 h-4" /></a></li>
                                </ul>{/*end icon*/}
                                </div>
                                <div className="mt-3 content">
                                <a href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600">Jack John</a>
                                <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                            </div>
                            <div className="lg:col-span-3 md:col-span-6">
                            <div className="text-center group">
                                <div className="relative inline-block mx-auto overflow-hidden rounded-full h-52 w-52">
                                <img src="assets/images/client/05.jpg" alt="" />
                                <div className="absolute inset-0 transition-all duration-500 ease-in-out rounded-full opacity-0 bg-gradient-to-b from-transparent to-black h-52 w-52 group-hover:opacity-100" />
                                <ul className="absolute list-none transition-all duration-500 ease-in-out start-0 end-0 -bottom-20 group-hover:bottom-5">
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="facebook" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="instagram" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="linkedin" className="w-4 h-4" /></a></li>
                                </ul>{/*end icon*/}
                                </div>
                                <div className="mt-3 content">
                                <a href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600">Krista John</a>
                                <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                            </div>
                            <div className="lg:col-span-3 md:col-span-6">
                            <div className="text-center group">
                                <div className="relative inline-block mx-auto overflow-hidden rounded-full h-52 w-52">
                                <img src="assets/images/client/06.jpg" alt="" />
                                <div className="absolute inset-0 transition-all duration-500 ease-in-out rounded-full opacity-0 bg-gradient-to-b from-transparent to-black h-52 w-52 group-hover:opacity-100" />
                                <ul className="absolute list-none transition-all duration-500 ease-in-out start-0 end-0 -bottom-20 group-hover:bottom-5">
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="facebook" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="instagram" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="linkedin" className="w-4 h-4" /></a></li>
                                </ul>{/*end icon*/}
                                </div>
                                <div className="mt-3 content">
                                <a href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600">Roger Jackson</a>
                                <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                            </div>
                            <div className="lg:col-span-3 md:col-span-6">
                            <div className="text-center group">
                                <div className="relative inline-block mx-auto overflow-hidden rounded-full h-52 w-52">
                                <img src="assets/images/client/07.jpg" alt="" />
                                <div className="absolute inset-0 transition-all duration-500 ease-in-out rounded-full opacity-0 bg-gradient-to-b from-transparent to-black h-52 w-52 group-hover:opacity-100" />
                                <ul className="absolute list-none transition-all duration-500 ease-in-out start-0 end-0 -bottom-20 group-hover:bottom-5">
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="facebook" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="instagram" className="w-4 h-4" /></a></li>
                                    <li className="inline"><a href="#" className="text-white bg-green-600 border border-green-600 rounded-full btn btn-icon btn-sm hover:border-green-600 hover:bg-green-600"><i data-feather="linkedin" className="w-4 h-4" /></a></li>
                                </ul>{/*end icon*/}
                                </div>
                                <div className="mt-3 content">
                                <a href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600">Johnny English</a>
                                <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                            </div>
                        </div>    
                    </div>
                    <div className="container mt-16 lg:mt-24">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">What Our Client Say ?</h3>
                        <p className="max-w-xl mx-auto text-slate-400">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>{/*end grid*/}
                    <div className="relative flex justify-center mt-8">
                        <div className="relative w-full">
                        <div className="tiny-three-item">
                            <div className="tiny-slide">
                            <div className="mx-3 text-center">
                                <p className="text-lg italic text-slate-400"> " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. " </p>
                                <div className="mt-5 text-center">
                                <ul className="mb-2 text-xl font-medium list-none text-amber-400">
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                </ul>
                                <img src="assets/images/client/01.jpg" className="mx-auto rounded-full shadow-md h-14 w-14 dark:shadow-gray-700" alt="" />
                                <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                <span className="text-sm text-slate-400">Manager</span>
                                </div>
                            </div>
                            </div>
                            <div className="tiny-slide">
                            <div className="mx-3 text-center">
                                <p className="text-lg italic text-slate-400"> " I highly recommend Hously as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. " </p>
                                <div className="mt-5 text-center">
                                <ul className="mb-2 text-xl font-medium list-none text-amber-400">
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                </ul>
                                <img src="assets/images/client/02.jpg" className="mx-auto rounded-full shadow-md h-14 w-14 dark:shadow-gray-700" alt="" />
                                <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                <span className="text-sm text-slate-400">Manager</span>
                                </div>
                            </div>
                            </div>
                            <div className="tiny-slide">
                            <div className="mx-3 text-center">
                                <p className="text-lg italic text-slate-400"> " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! " </p>
                                <div className="mt-5 text-center">
                                <ul className="mb-2 text-xl font-medium list-none text-amber-400">
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                </ul>
                                <img src="assets/images/client/03.jpg" className="mx-auto rounded-full shadow-md h-14 w-14 dark:shadow-gray-700" alt="" />
                                <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                <span className="text-sm text-slate-400">Manager</span>
                                </div>
                            </div>
                            </div>
                            <div className="tiny-slide">
                            <div className="mx-3 text-center">
                                <p className="text-lg italic text-slate-400"> " Great experience all around! Easy to use and efficient. " </p>
                                <div className="mt-5 text-center">
                                <ul className="mb-2 text-xl font-medium list-none text-amber-400">
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                </ul>
                                <img src="assets/images/client/04.jpg" className="mx-auto rounded-full shadow-md h-14 w-14 dark:shadow-gray-700" alt="" />
                                <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                <span className="text-sm text-slate-400">Manager</span>
                                </div>
                            </div>
                            </div>
                            <div className="tiny-slide">
                            <div className="mx-3 text-center">
                                <p className="text-lg italic text-slate-400"> " Hously made selling my home easy and stress free. They went above and beyond what is expected. " </p>
                                <div className="mt-5 text-center">
                                <ul className="mb-2 text-xl font-medium list-none text-amber-400">
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                </ul>
                                <img src="assets/images/client/05.jpg" className="mx-auto rounded-full shadow-md h-14 w-14 dark:shadow-gray-700" alt="" />
                                <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                <span className="text-sm text-slate-400">Manager</span>
                                </div>
                            </div>
                            </div>
                            <div className="tiny-slide">
                            <div className="mx-3 text-center">
                                <p className="text-lg italic text-slate-400"> " Hously is fair priced, quick to respond, and easy to use. I highly recommend their services! " </p>
                                <div className="mt-5 text-center">
                                <ul className="mb-2 text-xl font-medium list-none text-amber-400">
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                    <li className="inline"><i className="mdi mdi-star" /></li>
                                </ul>
                                <img src="assets/images/client/06.jpg" className="mx-auto rounded-full shadow-md h-14 w-14 dark:shadow-gray-700" alt="" />
                                <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                <span className="text-sm text-slate-400">Manager</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>{/*end grid*/}
                    </div>{/*end container*/}
                    <div className="container mt-16 lg:mt-24">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 text-2xl font-medium leading-normal text-black md:text-3xl md:leading-normal dark:text-white">Have Question ? Get in touch!</h3>
                        <p className="max-w-xl mx-auto text-slate-400">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        <div className="mt-6">
                        <a href="contact.html" className="text-white bg-green-600 rounded-md btn hover:bg-green-700"><i className="align-middle uil uil-phone me-2" /> Contact us</a>
                        </div>
                    </div>{/*end grid*/}
                    </div>{/*end container*/}
                </section>
            </div>

            <Footer />
        
        </>
    )
}
