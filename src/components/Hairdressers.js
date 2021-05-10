import React, {useState, useEffect} from 'react'
import ImageCard from "./ImageCard.js";
import axios from "axios";

export default function Hairdressers() {

    const [hairdressers, setHairdressers] = useState([]);

    useEffect(()=>{
    
      const fetchHairdressers = async ()=>{
       const response = await axios.get("http://localhost:1337/hairdressers")
        console.log(response)
        setHairdressers(response.data)
      }
    fetchHairdressers()
    
    }, [])


    return (
        <>
<div className="bg-white ">
    <div className="flex justify-center items-center">
    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-20">Våra Frisörer</h2>
    </div>
    <div className="flex justify-around flex-wrap">
{hairdressers.map((hairdresser)=>{
                 return (
            <ImageCard key={hairdresser.id} img={hairdresser.img} name={hairdresser.name} years={hairdresser.years} specialty={hairdresser.specialty}/>
            )
        }) }
       </div>
        </div>
        </>
    )
}
