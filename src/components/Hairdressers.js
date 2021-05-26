import React, {useState, useEffect} from 'react'
import ImageCard from "./ImageCard.js";
import axios from "axios";

export default function Hairdressers() {

    const [hairdressers, setHairdressers] = useState([]);
    const [loadPage, setLoadPage] = useState(2);

    useEffect(()=>{
    
      const fetchHairdressers = async ()=>{
       const response = await axios.get(`http://localhost:1337/hairdressers?_limit=${loadPage}`)
        setHairdressers(response.data)
      }
    fetchHairdressers()
    console.log(loadPage)
    }, [loadPage])

function loadMore(){
let pagination = loadPage + 2;

setLoadPage(pagination)
console.log(pagination)

}

function loadLess(){
    setLoadPage(2)

}


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
        {(hairdressers.length === loadPage) ?
       <button onClick={loadMore} className="mb-3 p-1 rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900">Load More</button>
            :
            <button onClick={loadLess}className="mb-3 p-1 rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900">Show less</button>
    }
        </div>
        </>
    )
}
