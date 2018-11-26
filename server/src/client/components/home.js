import React from 'react';
import Task from './task';

class Home extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            newTask: "",
            tasks: [
                { id: 1, "title": "Task 1", done: false, edit: false, rating: 5 },
                { id: 2, "title": "Task 2", done: true, edit: false, rating: 0 },
                { id: 3, "title": "Task 3", done: false, edit: false, rating: 2 }
            ],
            currentTask: null
        }
    }

    addTodo() {
        let newTask = {
            userId: 1,  // hardcoded user
            id: +new Date(),  // assign unique id, numeric date (quick fix)
            title: this.state.newTask, // grab newtodo from state
            completed: false
        }

        this.setState({
            tasks: [newTask, ...this.state.tasks]
        })
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
        let currentTask = this.state.currentTask;
        let taskListUI = this.state.tasks.map((task) => {
            return (
                <li key={task.id}>
                    <a onClick={(e) => this.showTodo(e, task.id)}
                        href={`/todos/${task.id}`}>{task.title}</a>
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

                {currentTask && <Task currentTask={currentTask} />
                }
            </div >
        );
    }
};
export default Home;