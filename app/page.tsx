import { About } from "./(partials)/About";
import { Faq } from "./(partials)/Faq";
import { Footer } from "./(partials)/Footer";
import { Header } from "./(partials)/Header";

export default function () {
  return (
    <>
        <section className="mb-20 bg-white md:mb-52 xl:mb-72">
            <div className="container max-w-screen-xl px-4 mx-auto">
            <nav
                className="z-10 flex-wrap items-center lg:flex py-14 xl:relative"
                x-data="{navbarOpen:false}"
            >
                <div className="flex items-center justify-between mb-10 lg:mb-0">
                <img
                    src="/img/navbar-logo.png"
                    alt="Logo img"
                    className="w-52 md:w-80 lg:w-full"
                />
                <button className="flex items-center justify-center w-10 h-10 ml-auto text-green-700 border border-green-700 rounded-md lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                    >
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                </button>
                </div>
                <ul className="flex-col hidden lg:flex lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16">
                <li className="mb-5 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:text-gray-400 lg:mb-0">
                    <a href="#">Landing</a>
                </li>
                <li className="mb-5 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:text-gray-400 lg:mb-0">
                    <a href="#">Pages</a>
                </li>
                <li className="mb-5 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:text-gray-400 lg:mb-0">
                    <a href="#">Contact</a>
                </li>
                <li className="mb-5 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:text-gray-400 lg:mb-0">
                    <a href="#">About</a>
                </li>
                </ul>
                <button className="hidden px-5 py-3 text-lg font-semibold text-green-700 transition duration-500 ease-linear border-2 border-green-700 rounded-lg lg:block hover:bg-green-700 hover:text-white">
                Request quote
                </button>
            </nav>
            <div className="flex items-center justify-center xl:justify-start">
                <div className="text-center mt-28 xl:text-left">
                <h1 className="mb-6 text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
                    Get your dream <br />
                    house now
                </h1>
                <p className="mb-12 text-xl font-normal leading-relaxed text-gray-400">
                    Having a sweet home is everyone's dream. Have you
                    <br />
                    owned your dream house?
                </p>
                <button className="px-6 py-4 text-lg font-semibold text-white transition duration-500 ease-in-out bg-green-700 rounded-xl hover:bg-green-900">
                    Contact us
                </button>
                </div>
                <div className="top-0 right-0 z-0 hidden xl:block xl:absolute">
                <img src="/img/home-img.png" alt="Home img" />
                </div>
            </div>
            </div>
            {/* container.// */}
        </section>

        <section className="py-10 bg-white md:py-16 xl:relative">
            <div className="container max-w-screen-xl px-4 mx-auto">
                <div className="flex flex-col justify-end xl:flex-row">
                <div className="bottom-0 left-0 hidden w-full xl:block xl:absolute">
                    <img src="/img/feature-img.png" alt="Feature img" />
                </div>
                <div >
                    <h1 className="mb-6 text-xl font-semibold leading-normal text-center text-gray-900 md:text-4xl">
                    Choice of various types of <br />
                    house
                    </h1>
                    <p className="mb-16 font-normal text-center text-gray-400 text-md md:text-xl">
                    We provide a wide of selection of home types for you
                    and your
                    <br />
                    family and are free to choose a home model
                    </p>
                    <div className="flex flex-col justify-center mb-20 space-x-4 md:flex-row xl:justify-start">
                    <div className="flex items-center justify-center h-20 px-8 mx-auto mb-5 bg-gray-200 rounded-lg md:mx-0 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-green-900 feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-900">
                        Best Home Guarantee
                        </h4>
                        <p className="text-xl font-normal leading-relaxed text-gray-400">
                        We guarantees the quality of your home you
                        bought <br />
                        from D’house
                        </p>
                    </div>
                    </div>
                    <div className="flex flex-col justify-center mb-20 space-x-4 md:flex-row xl:justify-start">
                    <div className="flex items-center justify-center h-20 px-8 mx-auto mb-5 bg-gray-200 rounded-lg md:mx-0 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-green-900 feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-900">
                        Safe Transaction
                        </h4>
                        <p className="text-xl font-normal leading-relaxed text-gray-400">
                        Your transactions will always be kept
                        confidential <br />
                        and will get discounted
                        </p>
                    </div>
                    </div>
                    <div className="flex flex-col justify-center space-x-4 md:flex-row xl:justify-start">
                    <div className="flex items-center justify-center h-20 px-8 mx-auto mb-5 bg-gray-200 rounded-lg md:mx-0 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-green-900 feather feather-credit-card"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-900">
                        Low and Cost Home Taxes
                        </h4>
                        <p className="text-xl font-normal leading-relaxed text-gray-400">
                        By buying a house from D’house, you will get
                        a tax <br />
                        discount
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="py-10 bg-white md:py-16">
            <div className="container max-w-screen-xl px-4 mx-auto">
                <h1 className="mb-10 text-4xl font-semibold text-center text-gray-900">
                Our Gallery
                </h1>
                <div className="items-center hidden mb-12 space-x-10 text-center md:block lg:space-x-20">
                <a href="#" className="px-6 py-2 text-xl font-semibold text-white transition duration-500 ease-in-out bg-green-800 rounded-lg hover:bg-green-600">All</a>
                <a href="#" className="px-6 py-2 text-xl font-normal text-gray-900 transition duration-500 ease-in-out rounded-lg hover:bg-gray-200 hover:text-gray-400">Exterior</a>
                <a href="#" className="px-6 py-2 text-xl font-normal text-gray-900 transition duration-500 ease-in-out rounded-lg hover:bg-gray-200 hover:text-gray-400">Interior</a>
                <a href="#" className="px-6 py-2 text-xl font-normal text-gray-900 transition duration-500 ease-in-out rounded-lg hover:bg-gray-200 hover:text-gray-400">Building</a>
                </div>
                <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
                <div>
                    <img src="/img/gallery-1.png" alt="image" className="mb-4 transition duration-500 ease-in-out md:mb-6 lg:mb-8 hover:opacity-75" />
                    <img src="/img/gallery-4.png" alt="image" className="transition duration-500 ease-in-out hover:opacity-75" />
                </div>
                <div>
                    <img src="/img/gallery-2.png" alt="image" className="mb-4 transition duration-500 ease-in-out md:mb-6 lg:mb-8 hover:opacity-75" />
                    <img src="/img/gallery-5.png" alt="image" className="mb-3 transition duration-500 ease-in-out md:mb-6 lg:mb-8 hover:opacity-75" />
                    <img src="/img/gallery-6.png" alt="image" className="transition duration-500 ease-in-out hover:opacity-75" />
                </div>
                <div>
                    <img src="/img/gallery-3.png" alt="image" className="mb-4 transition duration-500 ease-in-out md:mb-6 lg:mb-8 hover:opacity-75" />
                    <img src="/img/gallery-7.png" alt="image" className="transition duration-500 ease-in-out hover:opacity-75" />
                </div>
                </div>
            </div>
        </section>

        <section className="py-10 bg-white md:py-16">
            <div className="container max-w-screen-xl px-4 mx-auto xl:relative">
                <p className="mb-6 text-lg font-normal text-center text-gray-400 uppercase md:text-xl">
                Testimonial
                </p>
                <h1 className="text-2xl font-semibold leading-normal text-center text-gray-900 md:text-4xl mb-14">
                What People Say <br />
                About D’house
                </h1>
                <div className="top-0 hidden xl:block xl:absolute">
                <img src="/img/testimoni-1.png" alt="Image" />
                </div>
                <div className="hidden xl:block xl:absolute top-32">
                <img src="/img/testimoni-2.png" alt="Image" />
                </div>
                <div className="flex flex-col justify-center mb-10 md:flex-row md:items-center md:space-x-8 lg:space-x-12 md:mb-20">
                <div className="mb-10 bg-gray-100 rounded-lg md:mb-0">
                    <img src="/img/testimoni-3.png" alt="Image" className="mx-8 my-8" />
                    <div className="flex items-center gap-5 mx-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                    <p className="mx-8 my-8 text-sm font-normal text-gray-400 lg:text-md">
                    I recommend anyone to buy house on <br />
                    D’house. I received great customer service <br />
                    from the specialists who helped me.
                    </p>
                    <h3 className="mx-8 mb-8 text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
                    Brooklyn Simmons
                    </h3>
                </div>
                <div className="bg-gray-100 rounded-lg">
                    <img src="/img/testimoni-4.png" alt="Image" className="mx-8 my-8" />
                    <div className="flex items-center gap-5 mx-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                    <p className="mx-8 my-8 text-sm font-normal text-gray-400 lg:text-md">
                    D’house is the best property agent in the <br />
                    world. I received great customer service <br />
                    from the D’house agent
                    </p>
                    <h3 className="mx-8 mb-8 text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
                    Ralph Edwards
                    </h3>
                </div>
                </div>
            </div>
        </section>

        <section className="py-10 bg-white md:py-16">
            <div className="container max-w-screen-xl px-4 mx-auto xl:relative">
                <div className="flex flex-col items-center bg-green-800 lg:flex-row justify-evenly py-14 rounded-3xl">
                <div className="mb-10 text-center lg:text-left lg:mb-0">
                    <h1 className="mb-4 text-4xl font-semibold leading-normal text-white md:text-5xl lg:text-7xl">
                    Talk to us <br />
                    to discuss
                    </h1>
                    <p className="font-normal text-white text-md md:text-xl">
                    Need more time to discuss? Won’t worry, we are
                    <br />
                    ready to help you. You can fill in the column on the
                    <br />
                    right to book a meeting with us. Totally free.
                    </p>
                </div>
                <div className="right-0 hidden xl:block xl:absolute">
                    <img src="/img/book.png" alt="Image" />
                </div>
                <div className="hidden px-6 py-3 bg-white md:block xl:relative rounded-3xl">
                    <div className="py-3">
                    <h3 className="text-3xl font-semibold text-gray-900">
                        Book a meeting
                    </h3>
                    </div>
                    <div className="py-3">
                    <input type="text" placeholder="Full Name" className="px-4 py-4 placeholder-gray-400 bg-gray-100 outline-none w-96 rounded-xl" />
                    </div>
                    <div className="py-3">
                    <input type="text" placeholder="Email" className="px-4 py-4 placeholder-gray-400 bg-gray-100 outline-none w-96 rounded-xl" />
                    </div>
                    <div className="relative py-3">
                    <input type="text" placeholder="Date" className="px-4 py-4 text-lg font-normal placeholder-gray-400 bg-gray-100 outline-none w-96 rounded-xl" />
                    <div className="absolute inset-y-0 flex items-center ml-6 text-xl text-gray-600 left-80">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
                    </div>
                    </div>
                    <div className="relative py-3">
                    <input type="text" placeholder="Virtual Meeting" className="px-4 py-4 placeholder-gray-400 bg-gray-100 outline-none w-96 rounded-xl" />
                    <div className="absolute inset-y-0 flex items-center ml-6 text-xl text-gray-600 left-80">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                    </div>
                    <div className="py-3">
                    <button className="w-full py-4 text-lg font-semibold text-white transition duration-500 ease-in-out bg-green-700 rounded-xl hover:bg-green-900">
                        Booking
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <footer className="py-10 bg-white md:py-16">
            <div className="container max-w-screen-xl px-4 mx-auto">
                <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-10 text-center lg:text-left lg:mb-0">
                    <div className="flex justify-center mb-5 lg:justify-start">
                    <img src="/img/footer-logo.png" alt="Image" />
                    </div>
                    <p className="mb-10 text-xl font-light text-gray-400">
                    Get your dream house with <br />
                    D’house
                    </p>
                    <div className="flex items-center justify-center space-x-5 lg:justify-start">
                    <a href="#" className="px-3 py-3 text-gray-700 transition duration-500 ease-in-out bg-gray-200 rounded-full hover:bg-green-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href="#" className="px-3 py-3 text-gray-700 transition duration-500 ease-in-out bg-gray-200 rounded-full hover:bg-green-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </a>
                    <a href="#" className="px-3 py-3 text-gray-700 transition duration-500 ease-in-out bg-gray-200 rounded-full hover:bg-green-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg>
                    </a>
                    </div>
                </div>
                <div className="mb-10 text-center lg:text-left lg:mb-0">
                    <h4 className="mb-6 text-2xl font-semibold text-gray-900">
                    Sitemap
                    </h4>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Home</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Features</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Gallery</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Testimoni</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Book a meeting</a>
                </div>
                <div className="mb-10 text-center lg:text-left lg:mb-0">
                    <h4 className="mb-6 text-2xl font-semibold text-gray-900">
                    Landing
                    </h4>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Mobile App</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Property</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Personal Website</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Web Developer</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Online Course</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Donation</a>
                </div>
                <div className="text-center lg:text-left">
                    <h4 className="mb-6 text-2xl font-semibold text-gray-900">
                    Utility
                    </h4>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">FAQ</a>
                    <a href="#" className="block mb-6 text-xl font-light text-gray-400 transition duration-300 ease-in-out hover:text-gray-800">Terms &amp; Conditions</a>
                </div>
                </div>
            </div>
        </footer>
    </>
  );
}
