import React, { useEffect } from 'react'

const Item = ({item}) => {
  return (
    <div className='  flex flex-col bg-slate-50 justify-between rounded-md p-1 min-h-[490px] max-h-[520px] hover:scale-105  transition-all duration-300'>
      <div className=' flex items-center justify-center rounded-md bg-white'><img src={item?.image} className=' w-60 h-60 object-contain'/></div>
      <div className='px-6 py-4'>
        <div className='text-sm text-gray-600 mb-2'>Category: {item?.category}</div>
        <div className='font-bold text-xl mb-2'>{item?.title}</div>
        <div className='text-gray-700 text-base'>{(item?.description)}</div>
      </div>
      <div className='text-xl font-bold text-red-500 px-6'>Price: {item?.price}$</div>
    </div>
  )
}

export default Item
