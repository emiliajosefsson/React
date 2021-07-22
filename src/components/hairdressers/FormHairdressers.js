import React, {useState} from 'react'
import axios from "axios";

function FormHairdressers() {

    const initialValue = {
        firstname: " ",
        specialty:" ",
        years: ""
        }  
        
        const [formValues, setFormValues] = useState(initialValue)
        const [fileData, setFileData ]= useState();
        const [token, setToken] = useState(localStorage.getItem("jwt"))

        
        function onHandleSubmit(e){
        e.preventDefault();
    
        
          axios.post(`http://localhost:1337/hairdressers`, {
    
          name: formValues.firstname,
          specialty: formValues.specialty,
          years: formValues.years,
         },
         {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      }).then ( (e) => {console.log(e.data)
    

         const data = new FormData();
         data.append("files" , fileData )


         data.append("ref", "hairdressers")
         data.append("refId", e.data.id)
         data.append("field", "img")


         axios.post("http://localhost:1337/upload",  data)
         .then( (image)=> console.log(image))
         .catch( (error)=> console.log(error))
 
      }).catch(  (err)=> {
             console.log(err)
      })

        }
        
        function onHandleChange(e){
    
        setFormValues( {
            ...formValues,
            [e.target.name]:e.target.value
           
        })
        }

        function handleOnchangePic(e) {
            setFileData(e.target.files[0])
         }

    return (
        <div>
    
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
        <form onSubmit={onHandleSubmit}>
        <h2 className=" text-center text-3xl font-extrabold text-pink-700 mb-5">Lägg till ny Frisör</h2>
      <div className="rounded-md shadow-sm -space-y-px">
    
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 m-2">Namn på frisör</label>
          <input name="firstname" value={formValues.firstname} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
    
    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 m-2">Specialområden</label>
    <input name="specialty" value={formValues.specialty} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
    </div>
          <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="years" className="block text-sm font-medium text-gray-700 m-2">
                År aktiv som frisör
              </label>
          <input name="years" type="number" value={formValues.years} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
        </div>
        <input type="file" name="file" onChange={handleOnchangePic} required className="mt-4 text-sm font-medium text-gray-800"/>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900 mt-3">Lägg till ny frisör</button>
            </form>
        </div>
        </div>
    
        </div>
    )
}

export default FormHairdressers