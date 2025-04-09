
"use client"
import React from 'react'

function MenuUser({ activeTab, setActiveTab }) {
    return (
        <div className="border-b border-gray-200 mb-[16px] overflow-x-auto">
            <div className="flex space-x-4 sm:space-x-8 min-w-max">
                <button
                    className={`pb-4 font-medium ${activeTab === 'profile' ? 'border-b-2 border-[#0C2A55]' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('profile')}
                >
                    User Profile
                </button>
                <button
                    className={`pb-4 font-medium ${activeTab === 'billing' ? 'border-b-2 border-[#0C2A55]' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('billing')}
                >
                    Billing & Payment
                </button>
            </div>
        </div>
    )
}

export default MenuUser