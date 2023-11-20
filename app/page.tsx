import { Input } from "@/components/ui/input";
import { About } from "./(partials)/About";
import { Faq } from "./(partials)/Faq";
import { Footer } from "./(partials)/Footer";
import { Header } from "./(partials)/Header";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
    ArrowRight,
  BriefcaseIcon,
  HexagonIcon,
  PlayIcon,
  ShoppingBag,
  UserCheckIcon,
} from "lucide-react";

export default function () {
  return (
    <>
      <section className="relative flex items-center justify-center py-40 lg:h-screen bg-green-600/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-[30px] mt-10 items-center">
            <div className="text-center ltr:md:text-left rtl:md:text-right">
              <h1 className="mb-6 text-4xl font-bold leading-normal lg:leading-normal lg:text-5xl">
                Find Your{" "}
                <span className="text-green-600">
                  Perfect <br /> &amp; Wonderful
                </span>{" "}
                Home
              </h1>
              <p className="max-w-xl text-xl text-slate-400">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
              <div className="relative mt-8">
                <div className="grid grid-cols-1">
                  <div className="flex-wrap justify-center inline-block w-full p-4 text-center bg-white shadow sm:w-fit dark:bg-slate-900 rounded-t-xl dark:shadow-gray-700">
                    <ToggleGroup type="single">
                      <ToggleGroupItem variant={"outline"} value="For Sale">
                        For Sale
                      </ToggleGroupItem>
                      <ToggleGroupItem variant={"outline"} value="For Rent">
                        For Rent
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="p-6 bg-white shadow dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl dark:shadow-gray-700">
                    <div
                      id="buy-home"
                      role="tabpanel"
                      aria-labelledby="buy-home-tab"
                    >
                      <div className="z-1">
                        <form className="relative flex max-w-2xl mx-auto space-x-3">
                          <Input
                            type="name"
                            id="search_name"
                            name="name"
                            className="flex-1"
                            placeholder="City, Address, Zip :"
                          />
                          <Button type="submit">Search</Button>
                        </form>
                        {/*end form*/}
                      </div>
                    </div>
                  </div>
                </div>
                {/*end grid*/}
              </div>
            </div>
            <div className="relative lg:ms-10">
              <div className="p-5 bg-white rounded-t-full shadow dark:shadow-gray-700 dark:bg-slate-900">
                <img
                  src="assets/images/hero.jpg"
                  className="rounded-md rounded-t-full shadow-md"
                  alt=""
                />
              </div>
              <div className="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
                <a
                  href="#!"
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="inline-flex items-center justify-center w-20 h-20 text-green-600 bg-white rounded-full shadow-md lightbox dark:shadow-gray-800 dark:bg-slate-900"
                >
                  <PlayIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*end Container*/}
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-5">
              <div className="relative">
                <img
                  src="assets/images/about.jpg"
                  className="shadow-md rounded-xl"
                  alt=""
                />
                <div className="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="inline-flex items-center justify-center w-20 h-20 text-green-600 bg-white rounded-full shadow-md lightbox dark:shadow-gyay-700 dark:bg-slate-900"
                  >
                    <i className="inline-flex items-center justify-center text-2xl mdi mdi-play" />
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="md:col-span-7">
              <div className="lg:ms-4">
                <h4 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl lg:leading-normal">
                  Efficiency. Transparency. <br /> Control.
                </h4>
                <p className="max-w-xl text-slate-400">
                  Hously developed a platform for the Real Estate marketplace
                  that allows buyers and sellers to easily execute a transaction
                  on their own. The platform drives efficiency, cost
                  transparency and control into the hands of the consumers.
                  Hously is Real Estate Redefined.
                </p>

                <div className="mt-4">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
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
                <i
                  data-feather="hexagon"
                  className="w-32 h-32 mx-auto fill-green-600/5"
                />
                <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                  <i className="uil uil-estate" />
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
                <i
                  data-feather="hexagon"
                  className="w-32 h-32 mx-auto fill-green-600/5"
                />
                <div className="absolute flex items-center justify-center mx-auto text-4xl text-green-600 align-middle transition-all duration-500 ease-in-out top-2/4 -translate-y-2/4 start-0 end-0 rounded-xl">
                  <i className="uil uil-key-skeleton" />
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
        {/*end container*/}

        <div className="container mt-16 lg:mt-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
              Featured Properties
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
          {/*end grid*/}

          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/5.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/6.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        5133 MCLAIN WAY, Baton Rouge, LA 70809, USA
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/7.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        2141 Fiero Street, Baton Rouge, LA 70808
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/8.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        9714 Inniswold Estates Ave, Baton Rouge, LA 70809
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/9.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        1433 Beckenham Dr, Baton Rouge, LA 70808, USA
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/10.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        1574 Sharlo Ave, Baton Rouge, LA 70820, USA
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/11.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        2528 BOCAGE LAKE DR, Baton Rouge, LA 70809, USA
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
                <div className="md:flex">
                  <div className="relative md:shrink-0">
                    <img
                      className="object-cover w-full h-full md:w-48"
                      src="assets/images/property/12.jpg"
                      alt=""
                    />
                    <div className="absolute top-4 end-4">
                      <a
                        href="javascript:void(0)"
                        className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                      >
                        <i className="mdi mdi-heart mdi-18px" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="pb-6 md:pb-4">
                      <a
                        href="property-detail.html"
                        className="text-lg font-medium duration-500 ease-in-out hover:text-green-600"
                      >
                        1533 NICHOLSON DR, Baton Rouge, LA 70802, USA
                      </a>
                    </div>
                    <ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-compress-arrows me-2" />
                        <span>8000sqf</span>
                      </li>
                      <li className="flex items-center me-4">
                        <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
                        <span>4 Beds</span>
                      </li>
                      <li className="flex items-center">
                        <i className="text-2xl text-green-600 uil uil-bath me-2" />
                        <span>4 Baths</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between pt-6 list-none md:pt-4">
                      <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">$5000</p>
                      </li>
                      <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium list-none text-amber-400">
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star" />
                          </li>
                          <li className="inline text-black dark:text-white">
                            5.0(30)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*en grid*/}
            <div className="justify-center mt-6 text-center md:flex">
              <div className="md:w-full">
                <Button>View More Properties</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-16 lg:mt-24">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 text-2xl font-medium leading-normal text-black md:text-3xl md:leading-normal dark:text-white">
              Have Question ? Get in touch!
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <div className="mt-6">
              <Button>Contact us</Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative mt-24 bg-slate-900 dark:bg-slate-800">
        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="text-center ltr:md:text-left rtl:md:text-right">
                <p className="mb-0 text-gray-300">
                  © Hously. Design with{" "}
                  <i className="text-red-600 mdi mdi-heart" /> by{" "}
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
              <ul className="text-center list-none ltr:md:text-right rtl:md:text-left">
                <li className="inline">
                  <a
                    href="https://1.envato.market/hously"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="shopping-cart" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="dribbble" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.behance.net/shreethemes"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i className="align-baseline uil uil-behance" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="linkedin" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.facebook.com/shreethemes"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="facebook" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="instagram" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://twitter.com/shreethemes"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="twitter" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="mailto:support@shreethemes.in"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="mail" className="w-4 h-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://forms.gle/QkTueCikDGqJnbky9"
                    target="_blank"
                    className="text-gray-400 border border-gray-800 rounded-md btn btn-icon btn-sm hover:text-white dark:border-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="file-text" className="w-4 h-4" />
                  </a>
                </li>
              </ul>
              {/*end icon*/}
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
        </div>
      </footer>
    </>
  );
}
