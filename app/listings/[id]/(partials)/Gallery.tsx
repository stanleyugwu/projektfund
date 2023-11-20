'use client'

import { IListing } from '@/types/listings'
import React, { useEffect, useRef } from 'react'
import { tns } from "tiny-slider"

interface IGallery {
    listing: IListing
}

export const Gallery = ({listing} : IGallery) => {

    const slider = useRef(null)

    useEffect(() => {
        tns({
            container: slider.current!,
            items: 2,
            slideBy: 1,
            autoplay: true,
            arrowKeys: true,
            navPosition: 'bottom',
            autoplayButton: false,
            prevButton: false,
            nav: false,
            controls: false,
            gutter: 0
        })
    }, [listing])

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `.tns-outer button{
                    display: none !important;
                } .tns-outer .tns-liveregion {display: none !important}`}} />

            <div ref={slider} className="flex-row items-center w-screen overflow-hidden md:flex">

                <div className="relative overflow-hidden group">
                    <img src={`/${listing.image}`} className="object-cover w-full h-96 aspect-video" alt="" />
                </div>
                {
                    listing.gallery.map(image => (
                        <div className="relative overflow-hidden group">
                            <img src={`/${image}`} className="object-cover w-full h-96 aspect-video" alt="" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
