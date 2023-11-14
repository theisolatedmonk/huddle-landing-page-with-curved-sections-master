import clsx from 'clsx';
import React from 'react'
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';


import bgFooterTopDesktop from '@/public/images/bg-footer-top-desktop.svg';
import bgFooterTopMobile from '@/public/images/bg-footer-top-mobile.svg';
import iconCommunities from '@/public/images/icon-communities.svg';
import iconEmail from '@/public/images/icon-email.svg';
import iconPhone from '@/public/images/icon-phone.svg';
import { CardData } from '@/assets/data';
import { cn } from '@/lib/utlits';





export default function Section(props: CardData) {
    return (

        <div className={cn('relative w-full   flex items-center justify-between h-[700px] border-2 border-red-400', { 'flex-row-reverse': props.imagePosition === 'left' })}>
            <section className='flex flex-col h-full  absolute inset-0 z-0'>

                {props.bgTopDesktop &&
                    <Image src={props.bgTopDesktop} alt={''} className='w-full   object-left   h-full' height={200} width={200} />
                }

                {props.bgBottomDesktop &&
                    <Image src={props.bgBottomDesktop} alt={''} className='w-full    object-left  h-full' height={200} width={200} />}

            </section>

            {/* text */}
            <div className='w-1/2 z-40 flex flex-col justify-between -slate-500 px-44 gap-6'>
                <h4 className=" font-bold text-4xl">{props.title}</h4>
                <p className="">{props.paragraph}</p>
            </div>

            {/* hero image */}
            <div className='w-1/2 z-40 -gray-800 flex justify-end px-44'>
                <Image src={props.svgImage} alt={''} className='w-full' />

            </div>

        </div>

    )
}