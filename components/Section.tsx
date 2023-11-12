import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {

    imagePosition: "left" | "right";

}

export default function Section({ imagePosition }: Props) {
    return (
        <div className={ }>
            <section className='absolute'>
                {/* image 1 */}
                {/* image 2 */}
            </section>

            {/* text */}
            <div className='w-1/2'>


            </div>
            {/* hero image */}
            <div className='w-1/2'></div>

        </div>
    )
}