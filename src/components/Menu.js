import React from "react";
import {Link} from "react-router-dom";

 

function Menu(){


return(
  <>
<nav className="bg-pink-800 shadow dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      

      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
</svg>
          <Link to="/"><h2 className="hidden lg:block h-8 w-auto font-sans italic font-semibold text-3xl">Frisör.se</h2></Link>
          </div>

    <div className="absolute  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
          <div className="flex space-x-4">
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/behandlingar">Behandlingar</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/form">Admin</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/frisorer">Frisörer</Link>
    </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-items-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/skapa-konto">Skapa konto</Link>
        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/logga-in">Logga in</Link>
    <div>
           
          </div>

        </div>
      </div>
    </div>
<div className="sm:hidden text-gray-300" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
    
<Link className="bg-gray-900 text-white block px-3 py-2 hover:bg-gray-800 rounded-md text-base font-medium" aria-current="page" to="/">Behandlingar</Link>
<Link className="bg-gray-900 text-white block px-3 py-2 hover:bg-gray-800 rounded-md text-base font-medium" aria-current="page" to="/form">Admin</Link>
<Link className="bg-gray-900 text-white block px-3 py-2 hover:bg-gray-800 rounded-md text-base font-medium" aria-current="page" to="/frisorer">Frisörer</Link>
<Link className="bg-gray-900 text-white block px-3 py-2 hover:bg-gray-800 rounded-md text-base font-medium" aria-current="page" to="/skapa-konto">Skapa konto</Link>
<Link className="bg-gray-900 text-white block px-3 py-2 hover:bg-gray-800 rounded-md text-base font-medium" aria-current="page" to="/logga-in">Logga in</Link>
</div>
</div>
</nav>
</>
)


}

export default Menu;