import React from 'react'
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ix6UkLlsbnoKYkou3sIOkAgpOzAHmmlLepKXmdcWiTRVnybJPLsfBnpiknAswlaPsTc3Qg1TsF6w2y3XHGLvMMy00686h76f1');


function BookingCard({firstname, time, phone, price,  hairdresser, id, treatmentName, treatmentDescription}) {

  
    function deleteBooking(){

        axios.delete(`http://localhost:1337/bookings/${id}`)
        window.location.reload()
    
    }



    const handleClick = async (event) => {
      //   // Get Stripe.js instance
       const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        
       const response = await axios.post("http://localhost:4242/create-checkout-session", {name:treatmentName, price:price})
    
    
        const sessionId = response.data.id
    
      //   // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
       });
    
       if (result.error) {
      //     // If `redirectToCheckout` fails due to a browser or network
      //     // error, display the localized error message to your customer
      //     // using `result.error.message`.
       }
      };









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
          Frisör
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {hairdresser}
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
          Pris
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {price} SEK
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
      <div className="flex justify-center items-center text-indigo-600 hover:text-indigo-900 p-4" onClick={handleClick}><button>Betala</button></div>
      <div className="flex justify-center items-center text-sm text-indigo-600 hover:text-indigo-900 p-4" onClick={deleteBooking}><button>Avboka</button></div>
    </dl>
  </div>
</div>
        </div>
    )
}

export default BookingCard
