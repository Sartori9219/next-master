import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { FaRobot } from "react-icons/fa";
// import { useHandleMenuStore } from '@/lib/store';


export default function Projects() {

  return (
    <>
      <div className="grid grid-col-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mb-4">

        <div className="flex items-center flex-col justify-center h-72 rounded bg-gray-50 dark:bg-gray-800">
          <Link href="/projects/info">
            <button className='' >
              <MdOutlineLibraryAdd color='blue' size={40} />
            </button>
          </Link>
          <button className='text-blue-800 font-bold unerline'>
            +Create new project
          </button>
        </div>

        <div className="flex items-left pt-6 pl-3 pr-3 flex-col h-72 rounded bg-gray-50 dark:bg-gray-800">
          <div className='flex flex-row text-lg items-center gap-2'>
            <FaRobot size={40} color='#72b5f0' />  Sapphire
          </div>
          <div className='mt-3 h-40'>
            This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
          </div>
          <div>
            Created 2days ago
          </div>
        </div>

        <div className="flex items-left pt-6 pl-3 pr-3 flex-col h-72 rounded bg-gray-50 dark:bg-gray-800">
          <div className='flex flex-row text-lg items-center gap-2'>
            <FaRobot size={40} color='#72b5f0' />  Sparkle
          </div>
          <div className='mt-3 h-40'>
            This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
          </div>
          <div>
            Created 1week ago
          </div>
        </div>

        <div className="flex items-left pt-6 pl-3 pr-3 flex-col h-72 rounded bg-gray-50 dark:bg-gray-800">
          <div className='flex flex-row text-lg items-center gap-2'>
            <FaRobot size={40} color='#72b5f0' />  Harmony
          </div>
          <div className='mt-3 h-40'>
            This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
          </div>
          <div>
            Created 2weeks ago
          </div>
        </div>

      </div>
    </>
  )
}
