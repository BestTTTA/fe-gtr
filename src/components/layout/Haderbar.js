"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import MenuUser from './MenuUser'
import Link from 'next/link'

function Haderbar({ activeTab, setActiveTab }) {
  const pathname = usePathname()
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  // Define which pages should show the header
  const authPages = ['/signup', '/login', '/otp-verification']
  const userPages = ['/users', '/users/deleted', '/users/edit', '/users/billing']

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleTabChange = (tab) => {
    // Update the activeTab in the parent component
    setActiveTab(tab)
    
    // Close the menu after changing tab
    setShowMenu(false)
  }

  return (
    <div className="w-full">
      {/* Auth pages header */}
      {authPages.includes(pathname) && (
        <h3 className='text-[20px] md:text-[28px] py-[16px] px-[24px] text-center lg:text-start font-bold border border-gray-100 bg-white shadow-md text-[#ff9933]'>
          Good Time Ratio
        </h3>
      )}
      
      {/* User pages header */}
      {userPages.includes(pathname) && (
        <>
          <div className="hidden sm:flex flex-col sm:flex-row justify-end items-center px-4 sm:px-6 py-4 border-b border-gray-100 shadow-xs bg-white">
            <button className="w-full sm:w-auto bg-[#ff9933] text-[#151B2A] font-medium px-4 py-2 rounded-full">
              Start New Assessment
            </button>
          </div>

          <div className="sm:hidden flex justify-between items-center border-b border-gray-100 shadow-xs px-4 py-4 bg-white">
            <button 
              className="text-[#151B2A] font-medium p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black" />
              </svg>
            </button>
            <div className="flex gap-2">
              <button className="p-2" aria-label="Download">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z" fill="black" />
                </svg>
              </button>
              <button className="p-2" aria-label="Add">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden">
              <div className="bg-white w-[80%] max-w-[300px] h-full flex flex-col animate-slide-in">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-[#151B2A]">Menu</h3>
                  <button onClick={toggleMenu} className="p-2" aria-label="Close menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
                    </svg>
                  </button>
                </div>
                
                <div className="p-5">
                  <div className="mb-6">
                    <button 
                      className={`w-full text-left py-3 font-medium ${activeTab === 'profile' ? 'text-[#0C2A55] font-bold' : 'text-gray-500'}`}
                      onClick={() => handleTabChange('profile')}
                    >
                      User Profile
                    </button>
                    <button 
                      className={`w-full text-left py-3 font-medium ${activeTab === 'billing' ? 'text-[#0C2A55] font-bold' : 'text-gray-500'}`}
                      onClick={() => handleTabChange('billing')}
                    >
                      Billing & Payment
                    </button>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <button 
                      className="w-full bg-[#ff9933] text-[#151B2A] font-medium px-4 py-2 rounded-full"
                      onClick={toggleMenu}
                    >
                      Start New Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      
      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Haderbar