import Image from 'next/image'

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
import iconMessages from '@/public/images/icon-messages.svg';
import iconPhone from '@/public/images/icon-phone.svg';
import illustrationFlowingConversation from '@/public/images/illustration-flowing-conversation.svg';
import illustrationGrowTogether from '@/public/images/illustration-grow-together.svg';
import illustrationYourUsers from '@/public/images/illustration-your-users.svg';
import logo from '@/public/images/logo.svg';
import screenMockups from '@/public/images/screen-mockups.svg';


export default function Home() {
  return (
    <div className=" w-full h-screen p-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          {/* <Image src={iconMessages} alt={''} /> */}
          {/* <Image src={iconMessages} alt={''} /> */}
          <Image src={logo} alt={''} />
        </div>
        <Button className={'bg-white text-Pink  hover:text-LightPink rounded-3xl'} ButtonName={'Try It Free'} />

      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">
          Build The Community Your Fans Will Love
        </h4>
        <p className="">
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </p>
        <Button className={'bg-Pink hover:bg-LightPink text-white rounded-3xl w-80'} ButtonName={'Get Started For Free'} />
      </div>

      <Image src={screenMockups} alt={''} />

      <div className="flex justify-between">
        <div className="flex flex-col">
          <Image src={iconMessages} alt={''} />
          <h4 className="font-bold text-3xl">1.4k+</h4>
          <h1 className="">Communities Formed</h1>
        </div>
        <div className="flex flex-col">
          <Image src={iconMessages} alt={''} />
          <h4 className="font-bold text-3xl">1.4k+</h4>
          <h1 className="">Communities Formed</h1>
        </div>
      </div>
    </div>
  )
}






import React from 'react'

type Props = {
  className: string
  ButtonName: string
}

function Button(props: Props) {
  return (
    <button className={`p-2  border  px-4 border-Pink   hover:border-LightPink ${props.className}`}>{props.ButtonName}</button>
  )
}