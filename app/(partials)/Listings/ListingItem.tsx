import { Naira } from "@/components/naira";
import { Badge } from "@/components/ui/badge";
import { IListing } from "@/types/listings";
import React from "react";

interface IListingItemProps {
  listing: IListing
}

export const ListingItem = ({listing} : IListingItemProps) => {
	return (
		<div className="w-full mx-auto overflow-hidden duration-500 ease-in-out bg-white shadow group rounded-xl dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 lg:max-w-2xl">
			<div className="md:flex ">
				<div className="relative md:shrink-0">
					<img className="object-cover w-full h-full md:w-48" src={listing.image} alt="" />
					<div className="absolute top-4 end-4">
						<a href="javascript:void(0)" className="bg-white rounded-full shadow btn btn-icon dark:bg-slate-900 dark:shadow-gray-700 text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px" /></a>
					</div>
				</div>
				<div className="w-full p-6">
					<div className="pb-6 md:pb-4">
						<a href={`listings/${listing._id}`} className="text-lg font-medium duration-500 ease-in-out hover:text-green-600">{listing.title}</a>
					</div>
					<ul className="flex items-center py-6 list-none md:py-4 border-y border-slate-100 dark:border-gray-800">
						<li className="flex items-center me-4">
							<p className="line-clamp-2">{listing.description}</p>
							{/* <i className="text-2xl text-green-600 uil uil-bed-double me-2" />
							<span>{listing.type}</span> */}
						</li>
					</ul>
					<ul className="flex items-end justify-between pt-6 list-none md:pt-4">
						<li>
							<span className="text-slate-400">Price</span>
							<p className="text-lg font-medium"><Naira />{listing.price.toLocaleString()} </p>
						</li>
						<li className="align-middle">
							<Badge variant={'secondary'}  >{listing.type}</Badge>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
