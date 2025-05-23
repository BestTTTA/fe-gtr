import Haderbar from "@/components/layout/Haderbar"
import Link from "next/link"

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white via-white to-orange-100">
            <Haderbar />
            <div className="w-full max-w-md mx-auto px-4 py-8 sm:py-12 md:py-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black font-bold">Login</h1>
                <p className="text-base sm:text-lg text-black text-center py-3 sm:py-4">Get started with assessments for free.</p>

                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    <div>
                        <p className="text-sm font-medium mb-2">Your name</p>
                        <input
                            type="text"
                            className="w-full border rounded-[24px] px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-medium mb-2">Your email</p>
                        <input
                            type="email"
                            className="w-full border rounded-[24px] px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Your email"
                        />
                    </div>

                    <div className="pt-4 sm:pt-6">
                        <Link href="/auth/login">
                            <button className="w-full text-center bg-[#ff9933] hover:bg-[#ff8000] transition-colors rounded-[24px] px-4 py-2 sm:py-3 text-black font-medium">
                                Login
                            </button>
                        </Link>
                    </div>

                    <div className="text-center pt-4 sm:pt-6">
                        <p className="text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/auth/signup" className="font-medium underline hover:text-[#ff9933] transition-colors">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
