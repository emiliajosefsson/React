import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import Modal from 'react-modal';
import axios from "axios";


function UserModal() {


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
    name: "",
    birthday:"",
    username: "",
    email: ""
    }  
   

  const [modalOpen, setModalOpen] = useState(false)
  const [formValues, setFormValues] = useState(initialValue)
  const [userId, setUserId] = useState()
  const [jwt, setJwt] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwt"))
  
    

  useEffect(()=>{
    const userId = localStorage.getItem("userInfo")
    setUserId(userId)  
  

    const JWT = localStorage.getItem("jwt")
    setJwt(JWT)  

},  [])


  function onHandleSubmit(e){
    e.preventDefault();
    
    
      axios.put(`http://localhost:1337/users/${userId}`,  {

      name: formValues.name,
      email: formValues.email,
      birthday: formValues.birthday,
      username: formValues.username,
    //  id: userId,
},
{
    headers: {
      Authorization: `Bearer ${token}`,
    }
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
    setModalOpen(true)

  }
  
  
  function closeModal(){
    setModalOpen(false)
  }


    return (
        <>
            <button
                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" onClick={openModal}>??ndra</button>
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
        <h2 className=" text-center text-3xl font-extrabold text-pink-700 mb-5">??ndra dina Uppgifter</h2>
      <div className="rounded-md shadow-sm -space-y-px">
    
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 m-2">Namn</label>
          <input name="name" type="text" value={formValues.name} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
          </div>


          <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 m-2">
                Mejladress
              </label>
          <input name="email" type="text" value={formValues.email} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
        </div>
          <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 m-2">
                Anv??ndarnamn
              </label>
          <input name="username" type="text" value={formValues.username} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 m-2">
                F??delsedag
              </label>
          <input name="birthday" type="date" value={formValues.birthday} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"/>
        </div>
            
            
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900 mt-3" role="link" >Spara</button>
            </form>
        </div>
        </div>
        </Modal>
        </>
    )
}


export default UserModal