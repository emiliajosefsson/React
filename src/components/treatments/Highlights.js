import React from 'react'
import Card from "./Card.js"

const arrayOfHighlights = [
    {treatmentName:"Kort hår", description:"Slingor för axellångt hår", treatmentPrice:"1200 Kr"} ,
    {treatmentName:"Långt hår", description:"Slingor för långt hår", treatmentPrice:"2000 Kr"},
    {treatmentName:"Kort hår", description:"Bayalage för axellångt hår", treatmentPrice:"1800 Kr"} ,
    {treatmentName:"Långt hår", description:"Bayalage för långt hår", treatmentPrice:"2400 Kr"}
]

function Highlights() {
    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pt-6 pb-3">
    <div className="py-2 align-middle inline-block w-8/12  sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slingor
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

          {arrayOfHighlights.map((treatment)=>{
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

    export default Highlights