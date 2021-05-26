import React, {useState, useEffect} from 'react'
import Card from "./Card.js"
import axios from "axios";


function Styling() {

const [styling, setStyling] = useState([]);

useEffect(()=>{

  const fetchStyling = async ()=>{
   const response = await axios.get("http://localhost:1337/treatments?type=styling")

    setStyling(response.data)
  }
fetchStyling()

}, [])

    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pt-6 pb-20">
    <div className="py-2 align-middle inline-block min-width-full  sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-purple-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Styling
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beskrivning
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pris
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Boka</span>
              </th>
            </tr>
          </thead>

          {styling.map((stylings)=>{
                 return (
<Card key={stylings.id}  treatment_id={stylings.id}  treatmentName={stylings.name} description={stylings.description} treatmentPrice={stylings.price} />
             )
            }) }
</table>
      </div>
    </div>
  </div>
</div>

    )}

    export default Styling