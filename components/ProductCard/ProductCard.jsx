import Link from 'next/link'
import React from 'react'

export default function ProductCard() {
  return (
    <Link className='hover:bg-black/[0.02] transition-all' href={`/products/1`}>
        <div className='w-full overflow-hidden'>
            <img className='w-full h-full object-cover hover:scale-[1.01] transition-all' src="/product-1.webp" alt="" />
        </div>
        <div className='p-4 pb-0'>
        <p className='text-[16px] font-semibold'>
            Product Name
        </p>
        <div className='flex'>
            <p className='text-[15px] font-semibold text-black/[0.5]'>$25.00</p>
            <p className='text-[13px] font-semibold text-black/[0.5] ml-[7px] line-through'>$50.00</p>
            <p className='text-[15px] font-semibold text-green-500 ml-auto'>50% off</p>
        </div>
        </div>
    </Link>
  )
}
