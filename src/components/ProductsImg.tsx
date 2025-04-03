'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/7318903/pexels-photo-7318903.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/7318908/pexels-photo-7318908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 3,
        url: 'https://images.pexels.com/photos/2115473/pexels-photo-2115473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 4,
        url: 'https://images.pexels.com/photos/3377799/pexels-photo-3377799.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
]
export const ProductsImg = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className=''>
            <div className='h-[490px] relative mt-5'>
                <Image src={images[index].url} alt='' sizes='50vw' fill className='object-cover rounded-md' />
            </div>
            <div className='flex justify-between gap-4 mt-4 cursor-pointer'>
                {images.map((img,i) => (
                    <div className='w-1/4 h-32 relative gap-4 mt-8' key={img.id} onClick={()=>setIndex(i)}>
                        <Image src={img.url} alt='' fill sizes='30vw' className='object-cover rounded-md' />
                    </div>
                ))}
            </div>
        </div>
    );
};