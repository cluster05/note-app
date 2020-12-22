import React from 'react'

const search = (props) => {
    return (
        <div className="px-4">
            <input
                className="px-4 py-2  mt-5 w-full text-lg border-b-2 border-black focus:outline-none bg-white"
                type="text"
                placeholder="Search ..." />
        </div>
    )
}

export default search
