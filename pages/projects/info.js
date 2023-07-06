import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MdErrorOutline, MdFileCopy } from 'react-icons/md';
import { FaEllipsisH, FaEdit } from "react-icons/fa";
// import { useHandleMenuStore } from '@/lib/store';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center w-full justify-between">
          <div>
            <p className="text-2xl font-bold ">
              Sapphire
            </p>
            <p className="text-gray-700 mt-2">
              You can edit projects.
            </p>
          </div>
          <div className="rounded-full hover:bg-white active:bg-gray-200">
            <button className='flex h-8 w-8 items-center justify-center '>
              <FaEllipsisH />
            </button>
          </div>
        </div>

        <div className='mt-4'>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2 border-b-2 border-blue-500">
              <Link href="/projects/info" aria-current="page" className="inline-block p-4 rounded-t-lg hover:bg-gray-50">
                Info
              </Link>
            </li>
            <li className="mr-2">
              <Link href="#" className="inline-block p-4 rounded-t-lg hover:bg-gray-50 ">
                Messages
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-6 font-semibold">
          Add Website Domain
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col md:flex-row items-center pt-3 w-full lg:w-[700px]'>
            <input className='focus:outline-blue-300 h-10 w-full lg:w-full p-2' placeholder='www.examplewebsite.com' />
            <button className="bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 md:ml-4 w-full md:w-20">
              Add
            </button>
          </div>
        </div>

        <div className='flex flex-row mt-4'>
          <div>
            <MdErrorOutline color='black' size={24} />
          </div>
          <p>
            Copy the chatbot embeddable code below, and paste it into your website's HTML code to integrate the chatbot.
          </p>
        </div>

        <div className='flex flex-row mt-6 justify-between p-4 bg-gray-300 w-full lg:w-[700px]'>
          <p>
            Python
          </p>
          <button className='flex flex-row items-center active:ring'>
            <MdFileCopy size={20} color='blue' /> Copy
          </button>
        </div>
        <div className=' w-full lg:w-[700px]'>
          <textarea className='w-full focus:outline-blue-300 h-80 p-2' />
        </div>

        <div className='mt-3'>
          <p>Agent</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col md:flex-row items-center pt-3 w-full lg:w-[700px]'>
            <input className='focus:outline-blue-300 h-10 w-full lg:w-full p-2' />
            <button className="flex flex-row items-center bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 md:ml-4 w-full md:w-20">
              <FaEdit /> Edit
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
