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
import logoWhite from '@/public/images/logo-white.svg';
import screenMockups from '@/public/images/screen-mockups.svg';

import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'


export default function Home() {
  return (
    <div className=" w-full h-screen  flex flex-col">
      <div className="flex justify-between">
        <div className="flex items-center">
          {/* <Image src={iconMessages} alt={''} /> */}
          {/* <Image src={iconMessages} alt={''} /> */}
          <Image src={logo} alt={''} />
        </div>
        <Button className={'bg-white text-Pink  hover:text-LightPink rounded-full py-2 px-8'} ButtonName={'Try It Free'} />

      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">
          Build The Community Your Fans Will Love
        </h4>
        <p className="">
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </p>
        <Button className={'bg-Pink hover:bg-LightPink text-white rounded-full w-80 p-4 '} ButtonName={'Get Started For Free'} />
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
      <div className='flex flex-col gap-20'>
        {cardData.map((item, index) => (
          <Section
            {...item}
            key={index}
          />
        ))
        }

      </div >
      <div className="flex flex-col z-40 items-center">
        <h4 className='font-bold text-3xl'>Ready To Build Your Community?</h4>
        <Button className={'bg-Pink hover:bg-LightPink text-white rounded-full w-80 p-4 '} ButtonName={'Get Started For Free '} />
      </div>



      <div className="flex flex-col">
        <section className='absolute z-0'>
          <div className="flex flex-col bg-red-500 ">


            <Image src={bgFooterTopDesktop} alt={''} className='w-full  rotate   h-60 mb-10' height={200} width={200} />
            {/* <Image src={bgFooterTopMobile} alt={''} className='w-full  rotate-180  h-80' height={200} width={200} /> */}
          </div>
          {/* image 1 */}
          {/* image 2 */}
        </section>
        <div className="flex w-full z-40 items-center">
          <div className="flex flex-col">
            <Image src={logoWhite} alt={''} />
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
            <div className="flex ">
              <Image src={iconPhone} alt={''} className='bg-slate-400' />
              <p className="">Phone: +1-543-123-4567</p>
            </div>
            <div className="flex ">
              <Image src={iconEmail} alt={''} className='bg-slate-400' />
              <p className="">example@huddle.com</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="">NEWSLETTER</h3>
            <p className="">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
            <div className="flex">
              <input type="text" className='' />
              <Button className={'bg-Pink hover:bg-LightPink text-white rounded-md w-40 px-4 py-2'} ButtonName={'Subscribe'} />
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-red-600 z-40">
          <AiFillFacebook className='text-white' />
          <AiFillInstagram className='text-white' />
          <AiFillTwitterSquare className='text-white' />
        </div>
      </div>
    </div>
  )
}






import React from 'react'
import Section from '@/components/Section';
import { cardData } from '@/assets/data';

type Props = {
  className: string
  ButtonName: string
}

function Button(props: Props) {
  return (
    <button className={`  border   border-Pink   hover:border-LightPink ${props.className}`}>{props.ButtonName}</button>
  )
}