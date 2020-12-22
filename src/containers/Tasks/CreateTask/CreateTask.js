import React from 'react'

const createTask = (props) => {
    return (
        <div
            onClick={props.createNewTask}
            className="text-4xl font-bold px-4 py-2 rounded-full bg-black text-white absolute cursor-pointer"
            style={{ bottom: '16px', right: '16px' }}
        >
            +
        </div>
    )
}

export default createTask
