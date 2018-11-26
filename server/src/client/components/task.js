import React from 'react';


class Task extends React.Component {
    render() {
        let currentTask = this.props.data ? this.props.data : {};
        return (
            <div className="current-task">
                <h3>{currentTask.title}</h3>
                <span>{currentTask.done}</span>
            </div>
        );
    }
};
export default Task;