import React ,{useState, useEffect} from 'react'
import BookingCard from "./BookingCard"
import axios from "axios";

function UserBookings() {

    const [bookings, setBookings] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem("userInfo"))

    useEffect(()=>{
   
      const fetchBookings = async ()=>{
       const response = await axios.get(`http://localhost:1337/bookings?users_id=${userId}`)
       
        setBookings(response.data)
      }
    fetchBookings()
    
    }, [])


    return (
        <div>
            
            <div className="flex justify-center items-center">
    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-20">Mina bokningar</h2>
    </div>
            <div className="flex items-center justify-center justify-around flex-wrap p-10">
            {bookings.map((bookings)=>{
                 return (
<BookingCard key={bookings.id} treatmentDescription={bookings.treatment_id.description}  treatmentName={bookings.treatment_id.name} id={bookings.id} firstname={bookings.firstname} time={bookings.time} phone={bookings.phone} hairdresser={bookings.hairdresser}/>
             )
            }) }
        </div>
        </div>
    )
}


export default UserBookings