"use client"
import React from 'react'
import Link from 'next/link'

export default function DeleteUser() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Delete Profile</h1>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Delete account?</h2>
            <p className="text-gray-600 mb-2">
              When the account gets deleted, it means removal of all your information be removed from the system in next 30 days.
            </p>
            <p className="text-gray-600">
              Without logging in back within duration, you have to start from beginning again.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Link 
              href="/admin/users" 
              className="py-2 px-4 border border-gray-300 rounded-full text-center"
            >
              Cancel
            </Link>
            <button 
              className="py-2 px-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center gap-2"
              onClick={() => confirm("Are you sure you want to delete this account?")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}