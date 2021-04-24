import React from 'react'

function LPImages() {
    return (
        
        <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 className="text-xl font-medium text-pink-700 capitalize dark:text-white md:text-2xl">Tidigare kunder</h2>
        <div className="flex items-center justify-center">
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-49 mx-auto " src="https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="bayalage"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Bayalage</h3>
                    
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-49 mx-auto" src="https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="highlights"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Blonda slingor</h3>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-49 mx-auto " src="https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="styling"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Bruduppsättning</h3>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-49 mx-auto " src="https://images.unsplash.com/photo-1554519515-242161756769?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGhhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="colored-hair"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Färgat hår</h3>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}





        export default LPImages