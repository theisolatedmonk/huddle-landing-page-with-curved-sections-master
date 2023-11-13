import clsx from 'clsx';
import React from 'react'
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';


import bgFooterTopDesktop from '@/public/images/bg-footer-top-desktop.svg';
import bgFooterTopMobile from '@/public/images/bg-footer-top-mobile.svg';
import bgSectionBottomDesktop1 from '@/public/images/bg-section-bottom-desktop-1.svg';
import bgSectionBottomDesktop2 from '@/public/images/bg-section-bottom-desktop-2.svg';
import bgSectionBottomMobile1 from '@/public/images/bg-section-bottom-mobile-1.svg'; // Note: * added to the name
import bgSectionBottomMobile2 from '@/public/images/bg-section-bottom-mobile-2.svg';
import bgSectionTopDesktop1 from '@/public/images/bg-section-top-desktop-1.svg';
import bgSectionTopDesktop2 from '@/public/images/bg-section-top-desktop-2.svg';
import bgSectionTopMobile1 from '@/public/images/bg-section-top-mobile-1.svg';
import bgSectionTopMobile2 from '@/public/images/bg-section-top-mobile-2.svg';
import iconCommunities from '@/public/images/icon-communities.svg';
import iconEmail from '@/public/images/icon-email.svg';
import iconPhone from '@/public/images/icon-phone.svg';
import illustrationFlowingConversation from '@/public/images/illustration-flowing-conversation.svg';
import illustrationGrowTogether from '@/public/images/illustration-grow-together.svg';
import illustrationYourUsers from '@/public/images/illustration-your-users.svg';

const cardData = [
    {
        title: 'Grow Together',
        paragraph: 'Generate meaningful discussion with your audience and build a strong, loyal community. Think of the insightful coversation you miss out on with a feedback form.',
        svgImage: illustrationGrowTogether,
        bgTopMobile: bgSectionTopMobile1,
        bgTopDesktop: bgSectionTopDesktop1,
        bgBottomMobile: bgSectionBottomMobile1,
        bgBottomDesktop: bgSectionBottomDesktop1,
    },
    {
        title: 'Flowing Conversations',
        paragraph: " You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        svgImage: illustrationFlowingConversation,
        bgTopMobile: '',
        bgTopDesktop: '',
        bgBottomMobile: '',
        bgBottomDesktop: '',
    },
    {
        title: 'Your Users ',
        paragraph: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ",
        svgImage: illustrationYourUsers,
        bgTopMobile: bgSectionTopMobile2,
        bgTopDesktop: bgSectionTopDesktop2,
        bgBottomMobile: bgSectionBottomMobile2,
        bgBottomDesktop: bgSectionBottomDesktop2,
    },
]




type Props = {

    imagePosition: "left" | "right";

}

export default function Section({ imagePosition }: Props) {
    return (
        <div className='flex flex-col gap-20'>
            {cardData.map((item, index) => (
                <div className={'relative w-full bg-yellow-700 flex items-center justify-between '}>
                    <section className='absolute z-0'>
                        <div className="flex flex-col bg-red-500 ">


                            <Image src={item.bgTopDesktop} alt={''} className='w-full  rotate-180  h-80' height={200} width={200} />
                            <Image src={item.bgBottomDesktop} alt={''} className='w-full  rotate-180  h-80' height={200} width={200} />
                        </div>
                        {/* image 1 */}
                        {/* image 2 */}
                    </section>

                    {/* text */}
                    <div className='w-1/2 z-40 flex flex-col justify-between bg-slate-500 px-44 gap-6'>
                        <h4 className=" font-bold text-4xl">{item.title}</h4>
                        <p className="">{item.paragraph}</p>

                    </div>
                    {/* hero image */}
                    <div className='w-1/2 z-40 bg-gray-800 flex justify-end px-44'>
                        <Image src={item.svgImage} alt={''} className='w-full' />

                    </div>

                </div>
            ))}

        </div>
    )
}