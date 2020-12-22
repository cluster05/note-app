import React, { Component } from 'react'
import Tages from './../../containers/Tages/Tages';
import Tasks from './../../containers/Tasks/Tasks';
import Editor from './../../containers/Editor/Editor';

export class Layout extends Component {

    state = {
        tages: [
            { id: 1, title: '🏢 Office' },
            { id: 2, title: '🍲 food' },
            { id: 3, title: '😸 pet' }
        ],
        tasks: [
            {
                id: 1,
                title: 'PPT tommarow at 🕓😪 2pm ',
                description: 'Create PPT for new campaign for travel sale . \n Key points : \n ✈ travel service \n🏠 hotel service \n🏕 tourist spot ',
                tag: '1'
            },
            {
                id: 2,
                title: 'Buy fruits 🥝 ',
                description: 'Buy : \n🍎 apple \n🍏 green apple \n🍍 pinapple ',
                tag: '2'
            }
        ],
        currentTargetValue: '',
        currentTask: {
            title: '',
            description: '',
            tag: ''
        },
        createNewTask: true,

    }

    addTagHandler = () => {
        const tages = this.state.tages;

        if (this.state.currentTargetValue) {
            const tag = {
                id: Math.floor(Math.random() * 1000),
                title: this.state.currentTargetValue,
            }
            tages.push(tag);
            this.setState({ tages: tages, currentTargetValue: '' })
        }
    }


    deleteTagHandler = (tag) => {
        const tages = this.state.tages;
        const index = tages.indexOf(tag);
        tages.splice(index, 1);
        this.setState({ tages: tages });
    }


    setCreateNewTask = () => {
        this.setState(
            { createNewTask: true, currentTask: { title: '', description: '', tag: '' } }
        );
    }

    setCurrentTaskHandler = (task) => {

        this.setState({
            createNewTask: false,
            currentTask: { ...task }
        })
    }

    addUpdateTask = () => {

        if (this.state.currentTask.title.length > 4) {

            const tasks = this.state.tasks;
            if (this.state.createNewTask) {
                const task = {
                    ...this.state.currentTask,
                    id: new Date().getTime()
                };
                tasks.push(task);
            } else {
                const storedId = this.state.currentTask.id;
                const index = this.state.tasks.findIndex(task => storedId === task.id);
                tasks[index] = {
                    ...this.state.currentTask
                };
            }
            this.setState({
                tasks: tasks,
                createNewTask: true,
                currentTask: { title: '', description: '', tag: '' }
            })
        } else {
            alert(' 🕵 oh oh ... look like something is missing. try again \n try to add title with length 😸 greater than 4 charactor ');
        }

    }

    deleteTaskHandler = (task) => {

        const tasks = this.state.tasks;
        const idx = tasks.indexOf(task);
        tasks.splice(idx, 1);
        this.setState({ tasks: tasks });
    }

    render() {
        return (
            <div className="w-screen h-screen grid grid-cols-12">
                <section className="col-span-3">
                    <Tages
                        tagArray={this.state.tages}
                        addNewTag={this.addTagHandler}
                        deleteTask={this.deleteTagHandler}
                        currentTargetValue={this.state.currentTargetValue}
                        changeCurrentTagValue={(event) => this.setState({ currentTargetValue: event.target.value })} />
                </section>
                <section className="col-span-4">
                    <Tasks
                        tasks={this.state.tasks}
                        createNewTask={this.setCreateNewTask}
                        setCurrentTask={this.setCurrentTaskHandler}
                        deleteTask={this.deleteTaskHandler}
                    />
                </section>
                <section className="col-span-5">
                    <Editor
                        tages={this.state.tages}
                        createNewTask={this.state.createNewTask}
                        currentTask={this.state.currentTask}
                        addUpdateTask={this.addUpdateTask}
                        changeTitle={(event) => { this.setState({ currentTask: { ...this.state.currentTask, title: event.target.value } }) }}
                        changeDecription={(event) => this.setState({ currentTask: { ...this.state.currentTask, description: event.target.value } })}
                        changeTag={(event) => this.setState({ currentTask: { ...this.state.currentTask, tag: event.target.value } })}
                    />
                </section>
            </div>
        )
    }
}

export default Layout
