import React, {PropTypes} from 'react';
import TaskView from './TaskView.react';
import {connect} from 'react-redux';

class ListTodos extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let taskNodes= this.props.tasks.map((task) => {
      return <TaskView key={task.id} task={task} />
    });
    return (<div>{taskNodes}</div>);
  }
}

ListTodos.propTypes = {
    tasks: PropTypes.array.isRequired
};

function mapStateToProps(state){
  return{
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(ListTodos);
