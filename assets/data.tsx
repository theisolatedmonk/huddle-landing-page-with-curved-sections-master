
import bgSectionBottomDesktop1 from '@/public/images/bg-section-bottom-desktop-1.svg';
import bgSectionBottomDesktop2 from '@/public/images/bg-section-bottom-desktop-2.svg';
import bgSectionBottomMobile1 from '@/public/images/bg-section-bottom-mobile-1.svg'; // Note: * added to the name
import bgSectionBottomMobile2 from '@/public/images/bg-section-bottom-mobile-2.svg';
import bgSectionTopDesktop1 from '@/public/images/bg-section-top-desktop-1.svg';
import bgSectionTopDesktop2 from '@/public/images/bg-section-top-desktop-2.svg';
import bgSectionTopMobile1 from '@/public/images/bg-section-top-mobile-1.svg';
import bgSectionTopMobile2 from '@/public/images/bg-section-top-mobile-2.svg';

import illustrationFlowingConversation from '@/public/images/illustration-flowing-conversation.svg';
import illustrationGrowTogether from '@/public/images/illustration-grow-together.svg';
import illustrationYourUsers from '@/public/images/illustration-your-users.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';




// Assuming that illustrationGrowTogether, illustrationFlowingConversation, illustrationYourUsers,
// bgSectionTopMobile1, bgSectionTopDesktop1, bgSectionBottomMobile1, bgSectionBottomDesktop1,
// bgSectionTopMobile2, bgSectionTopDesktop2, bgSectionBottomMobile2, bgSectionBottomDesktop2
// are already defined or imported

export type CardData = {
    title: string;
    paragraph: string;
    svgImage: string | StaticImport; // Replace 'any' with the actual type of your SVG images
    bgTopMobile: string; // Replace 'string' with the actual type of your background images
    bgTopDesktop: string | StaticImport;
    bgBottomMobile: string | StaticImport;
    bgBottomDesktop: string | StaticImport;
    imagePosition: 'left' | 'right';
};

export const cardData: CardData[] = [
    {
        title: 'Grow Together',
        paragraph: 'Generate meaningful discussion with your audience and build a strong, loyal community. Think of the insightful conversation you miss out on with a feedback form.',
        svgImage: illustrationGrowTogether,
        bgTopMobile: bgSectionTopMobile1,
        bgTopDesktop: bgSectionTopDesktop1,
        bgBottomMobile: bgSectionBottomMobile1,
        bgBottomDesktop: bgSectionBottomDesktop1,
        imagePosition: 'right',
    },
    {
        title: 'Flowing Conversations',
        paragraph: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        svgImage: illustrationFlowingConversation,
        bgTopMobile: '',
        bgTopDesktop: '',
        bgBottomMobile: '',
        bgBottomDesktop: '',
        imagePosition: 'left',
    },
    {
        title: 'Your Users ',
        paragraph: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        svgImage: illustrationYourUsers,
        bgTopMobile: bgSectionTopMobile2,
        bgTopDesktop: bgSectionTopDesktop2,
        bgBottomMobile: bgSectionBottomMobile2,
        bgBottomDesktop: bgSectionBottomDesktop2,
        imagePosition: 'right',
    },
];
