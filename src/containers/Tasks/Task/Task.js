import React from 'react'
import './Task.module.css';

const task = (props) => {

    return (

        <div
            onClick={() => props.setCurrentTask(props.task)}
            className="mt-2 p-4 hover:bg-black hover:text-white cursor-pointer relative Task"

        >
            <h2 className="text-lg font-medium ">
                {props.task.title.length > 30 ? props.task.title.slice(0, 30) + ' . . .' : props.task.title}
            </h2>
            <p className="text-base font-light">
                {props.task.description > 90 ? props.task.description.slice(0, 90) + ' . . .' : props.task.description}
            </p>
            <div
                className="bg-red-500 text-white px-3 py-1 absolute rounded CLOSE"
                style={{ top: '-10px', right: '5px' }}
                onClick={(event) => {
                    props.deleteTask(props.task);
                    event.stopPropagation();
                }}
            >
                X
            </div>

        </div>
    )
}



export default task
