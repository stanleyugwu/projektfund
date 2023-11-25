import React from 'react'

export const Footer = () => {
    return (
      <footer className="relative mt-24 bg-slate-900 dark:bg-slate-800">
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
