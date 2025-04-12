"use client"

import Menu from "@/components/layout/Menu"
import Haderbar from "@/components/layout/Haderbar"
import Link from "next/link"
import { useState, useEffect } from "react"

// Change the component name from 'page' to 'Page'
export default function Page() {
    const [countdown, setCountdown] = useState(60);
    const [isResending, setIsResending] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (isResending) {
            setIsResending(false);
        }
    }, [countdown, isResending]);

    const handleResendOTP = (e) => {
        e.preventDefault();
        if (countdown === 0) {
            setCountdown(60);
            setIsResending(true);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white via-white to-orange-100">
            <Haderbar />
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="pt-8 sm:pt-12 md:pt-16 flex flex-col items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black font-bold">OTP Password</h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-black font-bold">Verification</h2>

                    <div className="py-4 sm:py-6">
                        <p className="text-base sm:text-lg text-black text-center">We have sent a verification code to your e-mail address.</p>
                    </div>

                    <div className="w-full max-w-md py-8 sm:py-12 flex flex-col items-center">
                        <div className="flex justify-center gap-2 sm:gap-3">
                            <input type="text" maxLength="1" className="w-10 h-12 sm:w-12 sm:h-14 text-[#151B2A] text-center border border-[#737685] rounded-full text-sm" value="1" readOnly />
                            <input type="text" maxLength="1" className="w-10 h-12 sm:w-12 sm:h-14 text-[#151B2A] text-center border border-[#737685] rounded-full text-sm" value="2" readOnly />
                            <input type="text" maxLength="1" className="w-10 h-12 sm:w-12 sm:h-14 text-[#151B2A] text-center border border-[#737685] rounded-full text-sm" value="-" readOnly />
                            <input type="text" maxLength="1" className="w-10 h-12 sm:w-12 sm:h-14 text-[#151B2A] text-center border border-[#737685] rounded-full text-sm" value="-" readOnly />
                            <input type="text" maxLength="1" className="w-10 h-12 sm:w-12 sm:h-14 text-[#151B2A] text-center border border-[#737685] rounded-full text-sm" value="-" readOnly />
                            <input type="text" maxLength="1" className="w-10 h-12 sm:w-12 sm:h-14 text-[#151B2A] text-center border border-[#737685] rounded-full text-sm" value="-" readOnly />
                        </div>
                    </div>

                    <div className="py-4 sm:py-6">
                        <p className="text-xs sm:text-sm text-center">
                            {countdown > 0 ? (
                                <span className="text-[#2B2E38]">Able to resend OTP password again in <span className="text-[#2B2E38]">{countdown}s</span></span>
                            ) : (
                                <>
                                    <span className="text-[#2B2E38]">Don&apos;t received code? </span>
                                    <Link href="#" onClick={handleResendOTP} className="font-medium underline text-[#2B2E38]">
                                        Resend OTP password
                                    </Link>
                                </>
                            )}
                        </p>
                    </div>
                </div>

                <div className="py-8 sm:py-12"></div>
            </div>
        </div>
    )
}
