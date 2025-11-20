import React from "react";

export default function Modal({open, close}){
    if(!open) return null;

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

            <div className="bg-white p-6 rounded-xl text-center mx-180">
                <h2 className="text-xl font-semibold mb-2">Data Unavailable</h2>
                <p className="text-xl text-gray-700 mb-4">No data found for this card. please come again later</p>

                <button onClick={close}>Close</button>
            </div>

        </div>
    )
}