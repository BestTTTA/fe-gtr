import Menu from "@/components/layout/Menu"
import Link from "next/link"

export default function page() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white via-white to-orange-100">
            <Menu />
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="py-8 sm:py-12 md:py-16 flex flex-col items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black font-bold">Create Account Success!</h1>
                    <p className="text-lg sm:text-xl text-black text-center py-2 sm:py-4 font-bold">Welcome to Good Time Ratio</p>
                    <p className="text-sm sm:text-md text-black text-center">Unlock your self-assessment capabilities.</p>
                    <p className="text-sm sm:text-md text-black text-center mb-[64px] sm:mb-[64px]">Inform users to understand what you can do with portal and quiz</p>

                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-2xl">
                        <div className="border border-[#737685] bg-[#F0F1F5] rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 flex-1">
                            <h2 className="text-lg sm:text-xl font-bold mb-2">Get start your first assessment</h2>
                            <p className="text-xs sm:text-sm mb-4 sm:mb-6">Description</p>
                            <button className="w-full text-center bg-[#FF9933] rounded-[16px] sm:rounded-[24px] px-3 sm:px-4 py-2 sm:py-3 text-black font-medium text-sm sm:text-base hover:bg-[#ff8c1a] transition-colors">
                                Start The First Assessment
                            </button>
                        </div>

                        <div className="border border-[#737685] bg-[#F0F1F5] rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 flex-1">
                            <h2 className="text-lg sm:text-xl font-bold mb-2">Explore personal life dashboard</h2>
                            <p className="text-xs sm:text-sm mb-4 sm:mb-6">Description</p>
                            <Link href="/" className="w-full text-center bg-transparent border border-gray-300 rounded-[16px] sm:rounded-[24px] px-3 sm:px-4 py-2 sm:py-3 text-black font-medium text-sm sm:text-base hover:bg-gray-50 transition-colors block">
                                Go To Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="py-8 sm:py-12 md:py-16"></div>
            </div>
        </div>
    )
}
