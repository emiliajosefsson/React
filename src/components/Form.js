import React, {useState} from "react";
import axios from "axios";

function Form(){

    const initialValue = {
    treatmentName: " ",
    treatmentPrice:" ",
    description: " "
    }  
    
    const [formValues, setFormValues] = useState(initialValue)
    
    function onHandleSubmit(e){
    e.preventDefault();

    axios.post('http://localhost:1337/stylings', {

      name: formValues.treatmentName,
      description: formValues.description,
      price: formValues.treatmentPrice,
     }).then ( (e) => {console.log(e.data)})


    }
    
    function onHandleChange(e){
    setFormValues( {
        ...formValues,
        [e.target.name]:e.target.value
       
    })
    }
    
        return(
    
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
        <form onSubmit={onHandleSubmit}>
        <h2 className=" text-center text-3xl font-extrabold text-pink-700 mb-5">Lägg till ny behandling</h2>
      <div className="rounded-md shadow-sm -space-y-px">
    
          <label htmlFor="treatmentName" className="block text-sm font-medium text-gray-700 m-2">Namn på behandling</label>
          <input name="treatmentName" value={formValues.treatmentName} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="treatmentPrice" className="block text-sm font-medium text-gray-700 m-2">
                Behandlingstyp
              </label>
              <select className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm">
              <option>Styling</option>
              <option>Klippning</option>
              <option>Slingor</option>
              </select>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="treatmentPrice" className="block text-sm font-medium text-gray-700 m-2">
                Pris
              </label>
          <input name="treatmentPrice" type="number" value={formValues.treatmentPrice} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 m-2">
                Om behandlingen
              </label>
          <textarea name="description" value={formValues.description} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Lösenord">
        </textarea>
        </div>
            
            
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900 mt-3">Lägg till behandling</button>
            </form>
        </div>
        </div>
    
    
        )
    }
    
    export default Form