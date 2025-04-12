"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Payment from '../payment/Payment'
import MenuUser from '../layout/MenuUser'
import Navbar from '../layout/Navbar'

function User() {
  const [activeTab, setActiveTab] = useState('profile')

  const EditProfileIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )

  const EditProfileButton = () => (
    <Link href="/users/edit" className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-50">
      <EditProfileIcon />
      Edit Profile
    </Link>
  )

  const ProfileSection = () => (
    <div>
      <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User Profile</h2>
        <EditProfileButton />
      </div>

      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#9CA0B0]">
        <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg overflow-hidden relative">
          <Image
            src="/users_img/profile.svg"
            alt="Profile"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 right-1 cursor-pointer sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.7279 9.57678L14.3137 8.16256L5 17.4763V18.8905H6.41421L15.7279 9.57678ZM17.1421 8.16256L18.5563 6.74835L17.1421 5.33414L15.7279 6.74835L17.1421 8.16256ZM7.24264 20.8905H3V16.6479L16.435 3.21282C16.8256 2.82229 17.4587 2.82229 17.8492 3.21282L20.6777 6.04124C21.0682 6.43177 21.0682 7.06493 20.6777 7.45546L7.24264 20.8905Z" fill="#31363F" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold">Chris Westwood</h3>
          <p className="text-base text-gray-600">Chris.w@gmail.com</p>
        </div>
      </div>

      <div className="p-4 mb-4 mt-4 border-b border-[#9CA0B0]">
        <h3 className="font-bold mb-4">Personal Information</h3>
        <div className='flex gap-4'>
          <div className='space-y-4'>
            {['Year of birth', 'Gender', 'Nationality', 'Living'].map((label) => (
              <p key={label} className='text-sm'>{label}</p>
            ))}
          </div>
          <div className='flex flex-col space-y-4'>
            {['1 Jan 1788', 'Male', 'United Kingdom', 'Ladprao, Bangkok, Thailand'].map((value) => (
              <p key={value} className='font-bold text-sm'>{value}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 mb-4">
        <h3 className="font-bold mb-4">Consent</h3>
        <div className='flex gap-4'>
          <div className='space-y-4'>
            {['Time and condition', 'Data privacy', 'Privacy policy'].map((label) => (
              <p key={label} className='text-sm'>{label}</p>
            ))}
          </div>
          <div className='flex flex-col space-y-4'>
            {[...Array(3)].map((_, index) => (
              <Link key={index} href="#" className='underline font-bold text-sm'>Read</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-1">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='px-4 sm:px-12 h-screen bg-[#F0F1F5] overflow-auto'>
        <h1 className="hidden sm:flex flex-col sm:flex-row px-4 sm:px-12 mt-5 mb-5 py-4 text-2xl sm:text-3xl font-bold">
          User Account
        </h1>

        <div className="flex justify-between items-center mt-4 mb-4 sm:hidden">
          <h2 className="text-xl font-bold">Profile</h2>
          <EditProfileButton />
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm h-auto sm:h-auto overflow-auto">
          <div className="flex flex-col h-full">
            <div className="hidden sm:flex sticky top-0 bg-white z-10 text-base">
              <MenuUser activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="flex-1 overflow-y-auto">
              {activeTab === 'profile' ? <ProfileSection /> : <Payment />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
