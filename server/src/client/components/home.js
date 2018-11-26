import React from 'react';
import Task from './task';
import taskDB from '../../data/tasks.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log("home props", props);
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            newTask: "",
            tasks: taskDB, // todo: read this from props
            currentTask: props.currentTask
        }
    }

    addTodo() {
        let newTask = {
            userId: 1,  // hardcoded user
            id: +new Date(),  // assign unique id, numeric date (quick fix)
            title: this.state.newTask, // grab newtodo from state
            completed: false
        }

        let tasks = [newTask, ...this.state.tasks];
        taskDB.push(newTask);

        this.setState({
            tasks
        });
    }


    handleChange(e) {
        this.setState({
            newTask: e.target.value
        })
    }

    showTodo(e, todoId) {
        e.preventDefault();
        let todo = this.state.tasks.find((t) => t.id === todoId);
        //alert(JSON.stringify(todo));
        this.setState({
            currentTask: todo
        });

    }

    render() {
        console.log("state: ", this.state.tasks);
        let currentTask = this.state.currentTask;
        let taskListUI = this.state.tasks.map((task) => {
            return (
                <li key={task.id}>
                    <a onClick={(e) => this.showTodo(e, task.id)}
                        href={`/todos/${task.id}`}>{task.title}</a>

                    <a title="open in new window"
                        href={`/todos/${task.id}`}
                        target="_blank">⬜</a>
                </li >
            );
        });
        return (
            <div>
                <h2>Task Application</h2>
                <input onChange={this.handleChange}
                    className="todo-input" type="text"
                    placeholder="what do you want to do today?"
                    value={this.state.newTask} />
                <button onClick={this.addTodo}>new todo</button>
                {taskListUI}

                {currentTask && <Task data={currentTask} />
                }
            </div >
        );
    }
};
export default Home;