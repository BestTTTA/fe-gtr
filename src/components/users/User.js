"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Payment from '../payment/Payment'
import MenuUser from '../layout/MenuUser'

function User() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="flex-1">
      <div className="hidden sm:flex flex-col sm:flex-row justify-end items-center px-[24px] py-[16px] border-b border-gray-100 shadow-xs">
        <button className="w-full sm:w-auto bg-[#ff9933] text-[#151B2A] font-medium px-4 py-2 rounded-full">
          Start New Assessment
        </button>
      </div>

      <h1 className="hidden sm:flex flex-col sm:flex-row ml-[48px] mt-[20px] mb-[20px] py-[16px] text-[32px] sm:text-[24px] font-bold">User Account</h1>
      
      <div className='ml-[48px] mr-[48px] mt-[48px] bg-white overflow-auto'>
        <div className="sm:hidden flex justify-between items-center mb-[16px]">
          <h2 className="text-xl font-bold">Profile</h2>
          <Link href="#" className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="ml-[48px] mr-[48px] mb-[48px] bg-white rounded-[40px] p-[16px] shadow-sm sm:p-[16px] sm:h-[calc(100vh-140px)] overflow-auto">
        <div className="flex flex-col h-full">
          <div className="hidden sm:flex flex-col sm:flex-rowsticky top-0 bg-white z-10">
            <MenuUser activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="flex-1 overflow-y-auto">
            {activeTab === 'profile' && (
              <div>
                <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center mb-[16px]">
                  <h2 className="text-xl font-bold">User Profile</h2>
                  <Link href="/users/edit" className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit Profile
                  </Link>
                </div>

                <div className="flex items-center gap-4 mb-[16px] pb-[16px] border-b border-[#9CA0B0]">
                  <div className="h-auto w-auto rounded-lg overflow-hidden relative">
                    <Image
                      src="/users_img/profile.svg"
                      alt="Profile"
                      className="w-[120px] h-[120px] object-cover"
                      width={1920}
                      height={1080}
                    />
                    <div className="absolute top-1 right-1 cursor-pointer sm:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.7279 9.57678L14.3137 8.16256L5 17.4763V18.8905H6.41421L15.7279 9.57678ZM17.1421 8.16256L18.5563 6.74835L17.1421 5.33414L15.7279 6.74835L17.1421 8.16256ZM7.24264 20.8905H3V16.6479L16.435 3.21282C16.8256 2.82229 17.4587 2.82229 17.8492 3.21282L20.6777 6.04124C21.0682 6.43177 21.0682 7.06493 20.6777 7.45546L7.24264 20.8905Z" fill="#31363F"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold">Chris Westwood</h3>
                    <p className="text-[16px] text-gray-600">Chris.w@gmail.com</p>
                  </div>
                </div>

                {/* Rest of profile content */}
                <div className="mb-[16px] pb-[16px] border-b border-[#9CA0B0]">
                  <h3 className="font-bold mb-4">Personal Information</h3>
                  <div className='flex'>
                    <div className='flex flex-col gap-[16px]'>
                      <p className='text-[14px]'>Year of birth</p>
                      <p className='text-[14px]'>Gender</p>
                      <p className='text-[14px]'>Gender</p>
                      <p className='text-[14px]'>Nationality</p>
                      <p className='text-[14px]'>Living</p>
                    </div>
                    <div className='flex flex-col gap-[16px] px-[8px] '>
                      <p className='px-[8px] font-bold text-[14px]'>1 Jan 1788</p>
                      <p className='px-[8px] font-bold text-[14px]'>Male</p>
                      <p className='px-[8px] font-bold text-[14px]'>Male</p>
                      <p className='px-[8px] font-bold text-[14px]'>United Kingdom</p>
                      <p className='px-[8px] font-bold text-[14px]'>Ladprao, Bangkok, Thailand</p>
                    </div>
                  </div>
                </div>

                <div className="mb-[16px]">
                  <h3 className="font-bold mb-4">Consent</h3>
                  <div className='flex'>
                    <div className='flex flex-col gap-[16px]'>
                      <p className='text-[14px]'>Time and condition</p>
                      <p className='text-[14px]'>Data privacy</p>
                      <p className='text-[14px]'>Privacy policy</p>
                    </div>
                    <div className='flex flex-col gap-[16px] px-[8px] '>
                      <Link href="#" className='underline font-bold text-[14px]'>Read</Link>
                      <Link href="#" className='underline font-bold text-[14px]'>Read</Link>
                      <Link href="#" className='underline font-bold text-[14px]'>Read</Link>
                    </div>
                  </div>
                </div>
                <div className="py-[48px]"></div>
              </div>
            )}

            {activeTab === 'billing' && (
              <Payment />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
