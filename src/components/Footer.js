import React from 'react'

function Footer() {
    return (
        
<footer className="flex justify-center px-4 text-gray-100 bg-pink-800 dark:text-white dark:bg-gray-800">
        <div className="container py-6">
            <h1 className="text-lg font-bold text-center lg:text-2xl">
                Följs oss för exklusiva erbjudanden och nyheter
            </h1>

            <div className="flex justify-center mt-6">
                <div className="bg-white border rounded-md focus-within:ring focus-within:border-blue-500">
                    <div className="flex flex-wrap justify-between md:flex-row">
                        <input type="email" className="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Skriv in din mejladress" aria-label="Enter your email"/>
                        <button className="w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md lg:w-auto hover:bg-gray-700">Prenumerera</button>
                    </div>
                </div>
            </div>

            <hr className="h-px mt-6 border-gray-300 border-none dark:bg-gray-700"/>

            <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Frisör.se</a>
                </div>

                <div className="flex mt-4 md:m-0">
                    <div className="-mx-4">
                        <span className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200">+46 7000000</span>
                        <span className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200">frisör@frisör.se</span>

                    </div>
                </div>
            </div>
        </div>
    </footer>

    )
}
export default Footer
