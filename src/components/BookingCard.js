import React from 'react'
import axios from "axios";


function BookingCard({firstname, time, phone, hairdresser, id, treatmentName, treatmentDescription}) {

  
    function deleteBooking(){

        axios.delete(`http://localhost:1337/bookings/${id}`)
        window.location.reload()
    
    }


    return (
        <div className="m-5">
            <div className="bg-purple-100 shadow overflow-hidden sm:rounded-lg w-96">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-base leading-6 font-medium text-gray-900">
    {treatmentName}
    </h3>
  </div>
  <div className="border-t border-gray-300">
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Förnamn
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {firstname}
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Tid
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {time}
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Telefonnummer
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {phone}
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Frisör
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {hairdresser}
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Om
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {treatmentDescription}
        </dd>
      </div>
      <div className="flex justify-center items-center text-indigo-600 hover:text-indigo-900 p-4" onClick={deleteBooking}>Avboka</div>
    </dl>
  </div>
</div>
        </div>
    )
}

export default BookingCard
