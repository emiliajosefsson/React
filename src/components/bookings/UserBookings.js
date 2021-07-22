import React ,{useState, useEffect} from 'react'
import BookingCard from "./BookingCard"
import axios from "axios";
import UserModal from "./UserModal"
import {useHistory} from "react-router-dom";

function UserBookings() {

    const [bookings, setBookings] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem("userInfo"))
    const history= useHistory();
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    function deleteUser(){

      axios.delete(`http://localhost:1337/users/${userId}`,
      // 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    }).then(localStorage.clear());
    history.push("/logga-in")
    window.location.reload()
  }

  console.log(userId)

    useEffect(()=>{
   
      const fetchBookings = async ()=>{
       const response = await axios.get(`http://localhost:1337/bookings?users_id=${userId}`
       ,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
    })
       
        setBookings(response.data)
      }


      const fetchUserInfo = async ()=>{
        const res = await axios.get(`http://localhost:1337/users?id=${userId}`
        ,{
         headers: {
           Authorization: `Bearer ${token}`,
         }
     })
        
         setUserInfo(res.data[0])
         console.log(res.data)
       }
     fetchUserInfo()
     

    fetchBookings()
  


    }, [])

    

    return (
      <>
      <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Namn</div>
    <div class="px-4 py-2">{userInfo.name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Användarnamn</div>
                                <div className="px-4 py-2">{userInfo.username}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Mejladress</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">{userInfo.email}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Födelsedag</div>
                                <div className="px-4 py-2">{userInfo.birthday}</div>
                            </div>
                        </div>
                    </div>
                    
                    <UserModal userId={userId}/>
                    <button
                        className="block w-full text-red-500 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" onClick={deleteUser}>Ta bort </button>
                </div>
        <div>
            
            <div className="flex justify-center items-center">
    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-20">Mina bokningar</h2>
    </div>
            <div className="flex items-center justify-center justify-around flex-wrap p-10">
            {bookings.map((bookings)=>{
                 return (
<BookingCard key={bookings.id} treatmentDescription={bookings.treatment_id.description} price={bookings.treatment_id.price} treatmentName={bookings.treatment_id.name} id={bookings.id} firstname={bookings.firstname} time={bookings.time} phone={bookings.phone} hairdresser={bookings.hairdresser}/>
             )
            }) }
        </div>
        </div>
        </>
    )
}


export default UserBookings