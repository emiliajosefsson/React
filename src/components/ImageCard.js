import React from 'react'

function ImageCard({img, years, name, specialty}) {
    return (
    <div >
        <div className="m-h-screen flex items-center justify-center">
        <div className="bg-pink-50 rounded-lg overflow-hidden shadow min-w-min max-w-sm m-20">
            <img src={`http://localhost:1337/uploads/girl_919048_1920_ee5c0dc618.jpg`} alt=" " />
            {img.url}
            <div className="p-6">
            <h4>{name}</h4>
            <div>
                Aktiv som frisör: {years} 
            </div>
            <div>
                Specialistområden: {specialty}
                </div>
                </div>
                </div>
        </div>
        </div>
    )
}

export default ImageCard
