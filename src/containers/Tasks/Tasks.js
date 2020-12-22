import React from 'react'
import SearchTask from './Search/Search';
import Task from './Task/Task';
import CreateTask from './CreateTask/CreateTask';

const tasks = (props) => {

    return (
        <div className="w-full h-full border-black relative">
            <SearchTask />
            <div className="mt-5">
                {
                    props.tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            setCurrentTask={props.setCurrentTask}
                            deleteTask={props.deleteTask}
                        />
                    ))
                }
            </div>

            <CreateTask createNewTask={props.createNewTask} />
        </div>
    );

}

export default tasks
