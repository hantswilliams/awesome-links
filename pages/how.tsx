import React from 'react'

const How = () => {
    return (
        <div>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Is it appropriate? Find out...</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600"></p>
                    </div>

                    <ul className="max-w-md mx-auto mt-16 space-y-12">
                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Select a single image</h3>
                                <p className="mt-4 text-base text-gray-600">Choose either a png or jpeg image that you would like to to process. Once selected, hit the 'Analyze Image' button </p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Image processing</h3>
                                <p className="mt-4 text-base text-gray-600">Within a few seconds, we will analyze your image to give you a recommendation on whether or not it may need additional review to be safetly shared on a social media platform</p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Interpreting your results</h3>
                                <p className="mt-4 text-base text-gray-600"> 
                                    <a className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"> Green </a> means your good to go and can share your image on social media. 
                                    While <a className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full"> yellow </a> or 
                                    <a className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"> red </a> means you should further review the image. A low number (below 20) means it is a likely safe for sharing on social media and is marked as green. While a yellow (between 20 and 29) or red (30+) should be further reviewed by you</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default How





