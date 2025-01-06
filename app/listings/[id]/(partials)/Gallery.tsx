'use client'

import { IListing } from '@/types/listings'
import React, { useEffect, useRef } from 'react'
import { tns } from "tiny-slider"

interface IGallery {
    listing: IListing
}

export const Gallery = ({ listing }: IGallery) => {

    const slider = useRef(null)

    useEffect(() => {
        tns({
            container: slider.current!,
            items: 2,
            slideBy: 1,
            autoplay: true,
            axis: "vertical",
            arrowKeys: true,
            navPosition: 'bottom',
            autoplayButton: false,
            nav: false,
            controls: false,
            gutter: 0,
            responsive: {
                425: {
                    // edgePadding: 20,
                    // // gutter: 20,
                    // items: 1
                },
                426: {
                    // edgePadding: 20,
                    // // gutter: 20,
                    // items: 3
                },
            }
        })
    }, [])

    const ASSET_BASE = process.env.NEXT_PUBLIC_CDN_IMAGE_BASE_URL;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `.tns-outer button{
                    display: none !important;
                } .tns-outer .tns-liveregion {display: none !important}`}} />

            <div ref={slider} className="flex flex-col items-center w-full h-full overflow-hidden">
                <div className="relative overflow-hidden h-full">
                    <img src={`${ASSET_BASE}${listing.image}`} className="object-contain w-full h-full aspect-video" alt="" />
                </div>


                {
                    listing.gallery.map(image => (
                        <div className="relative overflow-hidden h-full">
                            <img src={`${ASSET_BASE}${image}`} className="object-contain w-full h-full aspect-video" alt="" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
