import React from 'react'
import ImageCard from "./ImageCard.js";

const arrayOfHairdressers = [
    {img:"https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048__340.jpg", name:"Anna", years:"3 år", specialty:"Fön med styling"} ,
    {img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name:"Amanda", years:"2 år", specialty:"Bayalage"} ,
    {img:"https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",name:"Elin", years:"6 år", specialty:"Slingor, blondering"} ,
    {img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,name:"Erik", years:"5 år", specialty:"Fön med styling"} ,
   
]

export default function Hairdressers() {
    return (
        <>
<div className="bg-white ">
    <div className="flex justify-center items-center">
    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-20">Våra Frisörer</h2>
    </div>
    <div className="flex justify-around flex-wrap">
{arrayOfHairdressers.map((hairdresser)=>{
                 return (
            <ImageCard key={Math.random()} img={hairdresser.img} name={hairdresser.name} years={hairdresser.years} specialty={hairdresser.specialty}/>
            )
        }) }
       </div>
        </div>
        </>
    )
}
