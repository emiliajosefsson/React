import React from 'react'
import Card from "./Card.js"

const arrayOfStyling = [
    {treatmentName:"Fön", description:"Fön med styling", treatmentPrice:"500 Kr"} ,
    {treatmentName:"Fön och tvätt", description:"För, tvätt och styling", treatmentPrice:"600 Kr"}
]

function Styling() {
    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pt-6 pb-20">
    <div className="py-2 align-middle inline-block w-8/12  sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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

          {arrayOfStyling.map((treatment)=>{
                 return (
<Card key={Math.random()} treatmentName={treatment.treatmentName} description={treatment.description} treatmentPrice={treatment.treatmentPrice}/>
             )
            }) }
</table>
      </div>
    </div>
  </div>
</div>

    )}

    export default Styling