import React, {PropTypes} from 'react';
import TaskView from './TaskView.react';

export default class ListTodos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let taskNodes= this.props.tasks.map((task) => {
      return <TaskView key={task.id} task = {task} />
    });
    return (<div>{taskNodes}</div>);
  }
}

ListTodos.propTypes = {
    tasks: PropTypes.array.isRequired
};
