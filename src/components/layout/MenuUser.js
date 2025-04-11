
"use client"
import React from 'react'
import Link from 'next/link'

function MenuUser({ activeTab, setActiveTab }) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-6 mb-6">
      <button
        className={`text-left px-2 py-2 sm:py-1 border-b-2 sm:border-b-2 transition-colors ${
          activeTab === 'profile'
            ? 'border-[#ff9933] text-[#0C2A55] font-bold'
            : 'border-transparent text-gray-500'
        }`}
        onClick={() => setActiveTab('profile')}
      >
        User Profile
      </button>
      <button
        className={`text-left px-2 py-2 sm:py-1 border-b-2 sm:border-b-2 transition-colors ${
          activeTab === 'billing'
            ? 'border-[#ff9933] text-[#0C2A55] font-bold'
            : 'border-transparent text-gray-500'
        }`}
        onClick={() => setActiveTab('billing')}
      >
        Billing & Payment
      </button>
    </div>
  )
}

export default MenuUser