import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import Modal from 'react-modal';
import axios from "axios";

function BookingModal({treatment_id}) {


  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const history= useHistory();

  const initialValue = {
    firstname: " ",
    phone:" ",
    time: " ",
    hairdresser: "Erik"
    }  


  const [modalOpen, setModalOpen] = useState(false)
  const [formValues, setFormValues] = useState(initialValue)
  const [userId, setUserId] = useState()
  const [jwt, setJwt] = useState(null);

  useEffect(()=>{
    const userId = localStorage.getItem("userInfo")
    setUserId(userId)  
  

    const JWT = localStorage.getItem("jwt")
    setJwt(JWT)  

},  [])


  function onHandleSubmit(e){
    e.preventDefault();

    
      axios.post('http://localhost:1337/bookings', {

      firstname: formValues.firstname,
      phone: formValues.phone,
      time: formValues.time,
      hairdresser: formValues.hairdresser,
      users_id: userId,
      treatment_id: treatment_id,
     }).then ( (e) => {console.log(e.data)})
     
     history.push("/mina-bokningar")
     window.location.reload()
    }
    
    function onHandleChange(e){
        
    setFormValues( {
        ...formValues,
        [e.target.name]:e.target.value
      
       
    })
   
    }

  function openModal(){
    {jwt ? setModalOpen(true)
    : 
    history.push("/logga-in")
  }
  
  }
  
  function closeModal(){
    setModalOpen(false)
  }


    return (
        <>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={openModal}>Boka</a>
              </td>
            <Modal
          isOpen={modalOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
          <div className="flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
        <form onSubmit={onHandleSubmit}>
        <h2 className=" text-center text-3xl font-extrabold text-pink-700 mb-5">Boka ny behandling</h2>
      <div className="rounded-md shadow-sm -space-y-px">
    
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 m-2">Förnamn</label>
          <input name="firstname" value={formValues.firstname} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
          </div>


          <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 m-2">
                Telefonnummer
              </label>
          <input name="phone" type="number" value={formValues.phone} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="treatmentPrice" className="block text-sm font-medium text-gray-700 m-2">
                Frisör
              </label>
              <select name="hairdresser" onChange={onHandleChange} value={formValues.hairdresser} className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm">
              <option value="Erik">Erik</option>
              <option value="Anna" >Anna</option>
              <option value="Amanda" >Amanda</option>
              <option value="Elin" >Elin</option>
              </select>
          </div>

        <div className="rounded-md shadow-sm -space-y-px">
    
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 m-2">Önskad tid för behandling</label>
          <input name="time" value={formValues.time} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
          </div>
            
            
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900 mt-3" >Boka</button>
            </form>
        </div>
        </div>
        </Modal>
        </>
    )
}


export default BookingModal