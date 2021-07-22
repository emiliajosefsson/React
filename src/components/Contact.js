import React from 'react'
import emailjs from 'emailjs-com';

require('dotenv').config();

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }



    return (
        <>
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-20 mb-10">Kontaktformulär</h2>
            <p className="mb-10">Fyll i kontaktformuläret så återkommer vi till dig så fort som möjligt. Vi svarar oftast inom 24 timmar.</p>
        <div className="relative flex items-top justify-center min-h-screen">
            
            <form className="w-full max-w-lg" onSubmit={sendEmail}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Förnamn
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="firstname" type="text"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Efternamn
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="lastname" type="text"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Ämne
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="subject" name="subject" type="text"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Meddelande
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message" id="message"></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-pink-500 font-bold py-2 px-4 rounded" type="submit">
        Skicka
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
</div>
        </>
    )
}

export default Contact
