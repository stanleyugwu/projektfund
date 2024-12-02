import { Input } from "@/components/ui/input";
import { About } from "./(partials)/_About";
import { Faq } from "./(partials)/_Faq";
import { Footer } from "./(partials)/Footer";
import { Header } from "./(partials)/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HowItWorks } from "./(partials)/Home/HowItWorks";
import { ListingsList } from "./(partials)/Listings/ListingsList";
import { listListings } from "@/server/listings/list";
import { Metadata } from "next";
import NoData from "@/components/ui/no-data";

export const metadata: Metadata = {
  title: 'Welcome - HausProjekt',
  description: "We believe that property investment should be accessible to everyone. Whether you're looking to invest in small portions of properties, buy your dream home, or find the perfect rental, we have you covered.",
}

export default async function () {
  const listings = await listListings();

  return (
    <>
      <Header />

      <section className="relative flex items-center mx-auto bg-white max-w-7xl">
        <div className="relative items-center w-full py-20 ">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div className="relative items-center gap-12 m-auto lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <div className="py-6" />
                    <Badge className="px-6 py-1 mt-0 mb-5 leading-loose">Your Gateway to Smart Property Investment</Badge>
                    <p className="mb-10 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900">
                      Unlock Your real estate Dreams and invest like a PRO
                    </p>
                    <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                      We believe that property investment should be accessible to everyone. Whether you're looking to invest in small portions of properties, buy your dream home, or find the perfect rental, we have you covered.
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full pt-8 mx-auto space-x-4 lg:justify-start md:pt-6">
                    <Button variant={"secondary"} asChild>
                      <a href="/about">Learn More</a>
                    </Button>
                    <Button asChild>
                      <a href="/register">Get Started</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
                <img
                  alt="hero"
                  className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 mx-auto md:py-20 max-w-7xl">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] bg-gradient-to-bl from-gray-50 to-primary-foreground p-10 rounded-2xl">
          <div className="md:col-span-5">
            <div className="relative">
              <img src="/assets/images/about.jpg" className="shadow-md rounded-xl" alt="" />
            </div>
          </div>
          <div className="py-10 md:col-span-7">
            <div className=" lg:ms-4">
              <h4 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl lg:leading-normal">
                Access diverse real estate investment opportunities
              </h4>
              <p className="max-w-xl text-lg text-slate-600">
                Access a variety of properties to invest in, from residential to commercial, all in one place. Receive advice and insights from real estate professionals to make informed investment decisions. Enjoy a secure and transparent process with detailed property information and clear investment terms.
              </p>

              <div className="mt-4">
                <Button asChild>
                  <a href="/about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>

        <HowItWorks />

        {/* FEATURED PROPERTIES SECTION */}
        {/* <div className="mx-auto mt-16 max-w-7xl lg:mt-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
              Featured Properties
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>

          <div className="space-y-20">
            {
              listings?.length ?
                <ListingsList listings={listings} />
                : <NoData text="No featured properties available for now, check back later" />
            }
            <div className="justify-center mt-6 text-center md:flex">
              <div className="md:w-full">
                <Button asChild>
                  <a href="/listings">View More Properties</a>
                </Button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container mt-16 lg:mt-24">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 text-2xl font-medium leading-normal text-black md:text-3xl md:leading-normal dark:text-white">
              Kickstart your real estate journey with HausProjekt
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              Whether you're a seasoned investor or just getting started, our platform provides the tools and resources you need to succeed. Become part of our growing community and start your journey toward financial freedom and homeownership today.
            </p>
            <div className="mt-6">
              <Button asChild>
                <a href="/register">Get Started Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
