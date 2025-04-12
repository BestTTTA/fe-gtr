import Haderbar from "@/components/layout/Haderbar"

export default function page() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white via-white to-orange-100">
            <Haderbar />
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="py-8 sm:py-12 md:py-[48px] flex flex-col items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black font-bold">Sign Up</h1>
                    <p className="text-base sm:text-lg text-black text-center py-2 sm:py-4">Get start to assessments for free.</p>

                    <div className="w-full max-w-md space-y-4 sm:space-y-[24px]">
                        <div>
                            <p className="text-sm font-medium mb-2">Your name</p>
                            <input
                                className="w-full border rounded-full px-3 sm:px-4 py-2 sm:py-3"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-medium mb-2">Your email</p>
                            <input
                                className="w-full border rounded-full px-3 sm:px-4 py-2 sm:py-3"
                                placeholder="Your email"
                            />
                        </div>

                        <div className="bg-[#F0F1F5] p-3 sm:p-4 rounded-[24px]">
                            <p className="text-xs sm:text-sm text-gray-700">
                                Providing this information improves the accuracy of your assessment and helps us give better recommendations to measure Good Times in your life. It also helps us understand social trends. We only collect demographic data—your personal details stay private and cannot be linked back to you.
                            </p>
                            <div className="flex items-start mt-3 sm:mt-4">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 mr-2"
                                />
                                <label htmlFor="terms" className="text-xs sm:text-sm">
                                    I agree to the <a href="#" className="underline">terms of use</a>
                                </label>
                            </div>
                        </div>

                        <div className="pt-4 sm:pt-[24px]">
                            <a href="/auth/otp-verification">
                                <button className="w-full text-center bg-[#ff9933] rounded-[24px] px-3 sm:px-4 py-2 sm:py-3 text-black font-medium text-sm sm:text-base hover:bg-[#f08827] transition-colors">
                                    Create Account
                                </button>
                            </a>
                        </div>

                        <div className="text-center pt-2">
                            <p className="text-xs sm:text-sm">
                                I have an account? <a href="/auth/login" className="font-medium underline">Login</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-8 sm:py-12 md:py-[48px]"></div>
            </div>
        </div>
    )
}
