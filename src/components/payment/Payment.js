"use client"
import React from 'react'
import Image from 'next/image'

function Payment() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Subscription Plan</h3>
      <div className="mb-8 flex">
        <div className="bg-gray-100 p-4 rounded-[24px] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col p-6 gap-3 flex-1 rounded-[24px] bg-[#F0F1F5]">
            <div className="flex items-center gap-[4px] px-[16px] py-[4px] pl-[4px] pr-[16px] bg-[#ff9933] rounded-[120px] w-[155px] h-[32px]">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#151B2A" />
                </svg>
              </div>
              <div className="text-[#151B2A] text-[14px] font-bold leading-[160%]">Premium Plan</div>
            </div>
            <p className="text-sm text-gray-600">1 assessments for free. Log in as many time as you want.</p>
          </div>

          <div className="flex items-center gap-[32px] flex-1 p-[24px]">
            <div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[48px] font-bold">10</span>
                <span className="text-[16px] -mt-5">USD</span>
              </div>
              <div className="text-[12px] leading-[160%] font-normal text-[#151B2A]">
                Per month <br />
                (120.0 USD per year)
              </div>
            </div>

            <div className='px-[32px]'>
              <button className="border border-gray-300 rounded-[24px] p-[10px] text-[14px] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 14.1674H4.81066L11.7959 7.1821L10.7353 6.12143L3.75 13.1067V14.1674ZM15.75 15.6674H2.25V12.4854L12.3262 2.40913C12.6192 2.11623 13.094 2.11623 13.3869 2.40913L15.5083 4.53044C15.8012 4.82334 15.8012 5.29821 15.5083 5.59111L6.93198 14.1674H15.75V15.6674ZM11.7959 5.06077L12.8566 6.12143L13.9172 5.06077L12.8566 4.00012L11.7959 5.06077Z" fill="black" />
                </svg>
                Update Plan
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[320px] p-6 items-start self-stretch">
          <div className="text-[14px] text-gray-600">Next Payment Due</div>
          <div className="text-[18px] font-medium">20 April, 2025</div>
        </div>
      </div>


      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">Billing History</h3>
        <div className="overflow-x-auto border border-[#E6E7F0] rounded-[24px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Header</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Header</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Header</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Header</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Header</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Header</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Header</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Header</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="gap-8">
        <div className="flex items-center gap-8 self-stretch mb-4">
          <h3 className="text-lg font-bold">Payment Method</h3>
          <div className="flex text-sm text-gray-500 px-8 py-2 rounded-[8px] bg-[#F0F1F5]">
            Manage payment by
            <div className="flex items-center gap-4 px-2">
              <Image src='/users_img/stripe.svg' alt='Stripe' className="w-[34px] h-[14px]" width={1920} height={1080} />
            </div>
          </div>
        </div>

        <div className="flex w-[480px] p-6 items-center gap-4 rounded-[24px] bg-[#F0F1F5]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="text-blue-600">
                <Image src="/users_img/visa.svg" alt="Payment Icon" className="w-[64px] h-[64px]" width={1920} height={1080}/>
              </div>
              <div>
                <div className="text-sm text-gray-500">Payment Method</div>
                <div className="font-medium">•••• •••• 1234 1234</div>
                <div className="text-sm text-gray-500">03/27</div>
              </div>
            </div>
            <button className="border border-gray-300 rounded-full px-4 py-1 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment