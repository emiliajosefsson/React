import React from "react";

function Card({treatmentName, description, treatmentPrice}){

    return(

<tbody className="bg-white divide-y divide-gray-200">
    <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                
            </div>
                  
                    <div className="text-sm font-medium text-gray-900">
                    {treatmentName}
                    </div>
                    
                  
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{treatmentPrice}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Boka</a>
              </td>
            </tr>
          </tbody>



    )
}

export default Card