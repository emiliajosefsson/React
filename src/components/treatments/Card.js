import React from "react";
import BookingModal from "../bookings/BookingModal";

function Card({treatment_id, treatmentName, description, treatmentPrice}){

    return(

<tbody className="bg-white divide-y divide-gray-200">
    <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            
                    <div className="text-sm font-medium text-gray-900">
                    {treatmentName}
                    </div>
                
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{treatmentPrice}</div>
              </td>
              
              <BookingModal treatment_id={treatment_id}/>
            </tr>
          </tbody>



    )
}

export default Card