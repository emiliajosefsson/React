import React, {useState} from 'react'
import Modal from 'react-modal';
import axios from "axios";

function BookingModal() {


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

  const initialValue = {
    firstname: " ",
    phone:" ",
    time: " "
    }  

  const [modalOpen, setModalOpen] = useState(false)
  const [formValues, setFormValues] = useState(initialValue)

  function onHandleSubmit(e){
    e.preventDefault();

    
      axios.post('http://localhost:1337/bookings', {

      firstname: formValues.firstname,
      phone: formValues.phone,
      time: formValues.time,
     }).then ( (e) => {console.log(e.data)})


    }
    
    function onHandleChange(e){

    setFormValues( {
        ...formValues,
        [e.target.name]:e.target.value
       
    })
    }



  function openModal(){
    setModalOpen(true)
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
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
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
    
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 m-2">Önskad tid för behandling</label>
          <input name="time" value={formValues.time} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
          </div>
            
            
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900 mt-3">Boka</button>
            </form>
        </div>
        </div>
        </Modal>
        </>
    )
}


export default BookingModal