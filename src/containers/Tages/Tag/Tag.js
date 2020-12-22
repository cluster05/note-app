import React from 'react'

const tag = (props) => {
    return (
        <div className="mx-4 mt-2 px-3 py-1 text-2xl tracking-wide font-medium cursor-pointer bg-white text-black rounded">
            <div className="my-2 border-l-4 border-gray-300 hover:border-gray-500 relative">
                <p className="ml-4 uppercase"> {props.title} </p>
                <div
                    className="px-3 pb-1 text-2xl bg-red-300 hover:bg-red-500 rounded-lg text-white absolute "
                    style={{ bottom: '0px', right: '5px' }}
                    onClick={props.deleteTask}
                >
                    x
                    </div>
            </div>
        </div>
    )
}

export default tag
