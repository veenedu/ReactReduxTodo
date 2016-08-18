import React, {PropTypes} from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(){
    var task = this.refs.task.value;
  }

  render() {
    return (<div>
              <input type='text' ref='task' />
              <button onClick={this.handleAddTask}>Add Task</button>
            </div>);
  }
}

TodoForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired
};
