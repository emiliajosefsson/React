import React from 'react'
import {Link} from "react-router-dom";
import LPImages from "./LPImages";


function LandingPage() {
    return (
      <div>
        <div className="relative bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
       
       </div>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-pink-700 sm:text-5xl md:text-6xl">
            <span className="block xl:inline italic">En salong som erbjuder</span>
            <span className="block text-pink-700 xl:inline italic"> något utöver det vanliga</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 md:py-4 md:text-lg md:px-10" to="/behandlingar">
                Våra behandlingar
              </Link>
            </div>
            </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.pixabay.com/photo/2016/11/29/11/32/woman-1869208_960_720.jpg" alt=""/>
  </div>
</div>
<LPImages />
</div>
    )
}

export default LandingPage
