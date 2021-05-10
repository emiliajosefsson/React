import React  , {useState} from "react";
import BookingModal from "../BookingModal";

function Card({treatmentName, description, treatmentPrice}){

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
              
              <BookingModal />
            </tr>
          </tbody>



    )
}

export default Card