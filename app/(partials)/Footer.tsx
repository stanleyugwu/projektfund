import React from 'react'

export const Footer = () => {
    return (
      <footer className="relative mt-24 bg-slate-900 dark:bg-slate-800">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative py-16">
                {/* Subscribe */}
                <div className="relative w-full">
                  <div className="relative px-6 py-10 overflow-hidden bg-white shadow-lg -top-40 dark:bg-slate-900 lg:px-8 rounded-xl dark:shadow-gray-700">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                      <div className="text-center ltr:md:text-left rtl:md:text-right z-1">
                        <h3 className="text-2xl font-medium leading-normal text-black md:text-3xl md:leading-normal dark:text-white">Subscribe to Newsletter!</h3>
                        <p className="max-w-xl mx-auto text-slate-400">Subscribe to get latest updates and information.</p>
                      </div>
                      <div className="subcribe-form z-1">
                        <form className="relative max-w-lg md:ms-auto">
                          <input type="email" id="subcribe" name="email" className="bg-white rounded-full shadow dark:bg-slate-900 dark:shadow-gray-700" placeholder="Enter your email :" />
                          <button type="submit" className="text-white bg-green-600 rounded-full btn hover:bg-green-700">Subscribe</button>
                        </form>{/*end form*/}
                      </div>
                    </div>
                    <div className="absolute -top-5 -start-5">
                      <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
                    </div>
                    <div className="absolute -bottom-5 -end-5">
                      <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                    <div className="lg:col-span-4 md:col-span-12">
                      <a href="#" className="text-[22px] focus:outline-none">
                        <img src="assets/images/logo-light.png" alt="" />
                      </a>
                      <p className="mt-6 text-gray-300">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>{/*end col*/}
                    <div className="lg:col-span-2 md:col-span-4">
                      <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                      <ul className="mt-6 list-none footer-list">
                        <li><a href="aboutus.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> About us</a></li>
                        <li className="mt-[10px]"><a href="features.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Services</a></li>
                        <li className="mt-[10px]"><a href="pricing.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Pricing</a></li>
                        <li className="mt-[10px]"><a href="blog.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Blog</a></li>
                        <li className="mt-[10px]"><a href="auth-login.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Login</a></li>
                      </ul>
                    </div>{/*end col*/}
                    <div className="lg:col-span-3 md:col-span-4">
                      <h5 className="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                      <ul className="mt-6 list-none footer-list">
                        <li><a href="terms.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Terms of Services</a></li>
                        <li className="mt-[10px]"><a href="privacy.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Privacy Policy</a></li>
                        <li className="mt-[10px]"><a href="listing-one.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Listing</a></li>
                        <li className="mt-[10px]"><a href="contact.html" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"><i className="uil uil-angle-right-b me-1" /> Contact</a></li>
                      </ul>
                    </div>{/*end col*/}
                    <div className="lg:col-span-3 md:col-span-4">
                      <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact Details</h5>
                      <div className="flex mt-6">
                        <i data-feather="map-pin" className="w-5 h-5 text-green-600 me-3" />
                        <div >
                          <h6 className="mb-2 text-gray-300">C/54 Northwest Freeway, <br /> Suite 558, <br /> Houston, USA 485</h6>
                          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="text-green-600 duration-500 ease-in-out hover:text-green-700 lightbox">View on Google map</a>
                        </div>
                      </div>
                      <div className="flex mt-6">
                        <i data-feather="mail" className="w-5 h-5 text-green-600 me-3" />
                        <div >
                          <a href="mailto:contact@example.com" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400">contact@example.com</a>
                        </div>
                      </div>
                      <div className="flex mt-6">
                        <i data-feather="phone" className="w-5 h-5 text-green-600 me-3" />
                        <div >
                          <a href="tel:+152534-468-854" className="duration-500 ease-in-out text-slate-300 hover:text-slate-400">+152 534-468-854</a>
                        </div>
                      </div>
                    </div>{/*end col*/}
                  </div>{/*end grid*/}
                </div>
                {/* Subscribe */}
              </div>
            </div>
          </div>{/*end container*/}
          <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
            <div className="container text-center">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div className="text-center ltr:md:text-left rtl:md:text-right">
                  <p className="mb-0 text-gray-300">©  Hously. Design with <i className="text-red-600 mdi mdi-heart" /> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                </div>
                <ul className="text-center list-none ltr:md:text-right rtl:md:text-left">
                  <li className="inline"><a href="https://1.envato.market/hously" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="shopping-cart" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="https://dribbble.com/shreethemes" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="dribbble" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="https://www.behance.net/shreethemes" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i className="align-baseline uil uil-behance" /></a></li>
                  <li className="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="linkedin" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="facebook" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="instagram" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="https://twitter.com/shreethemes" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="twitter" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="mailto:support@shreethemes.in" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="mail" className="w-4 h-4" /></a></li>
                  <li className="inline"><a href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i data-feather="file-text" className="w-4 h-4" /></a></li>
                </ul>{/*end icon*/}
              </div>{/*end grid*/}
            </div>{/*end container*/}
          </div>
      </footer>


    
    )
}
