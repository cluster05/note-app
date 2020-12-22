import React from 'react'

const editor = (props) => {

    return (
        <div className="w-full h-full border-l-2 border-black capitalize text-sm">
            <div className="pt-10">
                {props.createNewTask ?
                    <h2 className="mb-2 mx-5 text-2xl font-medium">Super ! 😁 Let's create new task  </h2> :
                    <h2 className="mb-2 mx-5 text-2xl font-medium">Yooo ! 🧐 let's make it more cool </h2>}
            </div>
            <div className="px-4 flex flex-col">
                <input
                    className="w-full my-2 px-3 py-2 shadow focus:shadow-lg focus:outline-none rounded"
                    type="text"
                    maxLength="50"
                    value={props.currentTask ? props.currentTask.title : ''}
                    placeholder="Add title here "
                    onChange={props.changeTitle}
                />
                <textarea
                    rows="5"
                    maxLength="200"
                    className="w-full  my-2 px-3 py-2 shadow focus:shadow-lg focus:outline-none rounded"
                    value={props.currentTask ? props.currentTask.description : ''}
                    placeholder="Add description here"
                    onChange={props.changeDecription}

                />
                <select
                    onChange={props.changeTag}
                    className="w-full  my-2 px-3 py-2 shadow focus:shadow-lg focus:outline-none rounded" value={props.currentTask ? props.currentTask.tag : ''}>
                    <option value="" disabled>Select tags</option>
                    <option value="" >No Tags (default) </option>
                    {props.tages.map(tag => (<option value={tag.id} key={tag.id}>{tag.title}</option>))}
                </select>
                <button
                    onClick={props.addUpdateTask}
                    className="w-32 my-2 px-3 py-2 shadow focus:shadow-lg focus:outline-none rounded hover:bg-black hover:text-white float-right" >
                    {props.createNewTask ? 'ADD TASK' : 'UPDATE TASK'}

                </button>
            </div>
        </div>
    )


}

export default editor
