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

        <div className={cn('relative w-full  flex items-center justify-between', { 'flex-row-reverse': props.imagePosition === 'left' })}>
            <section className='absolute z-0'>
                <div className="flex flex-col ">

                    {props.bgTopDesktop &&
                        <Image src={props.bgTopDesktop} alt={''} className='w-full  rotate-180  h-80' height={200} width={200} />
                    }

                    {props.bgBottomDesktop &&
                        <Image src={props.bgBottomDesktop} alt={''} className='w-full  rotate-180  h-80' height={200} width={200} />}
                </div>
                {/* image 1 */}
                {/* image 2 */}
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