import React, {PropTypes} from 'react';
import {addTask} from '../redux/actions/task-actions';
import {connect} from 'react-redux';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e){
    e.preventDefault();
    var task = this.refs.task.value;
    this.props.addTask({
      title:task,
      id:new Date().getTime()
    });
    this.refs.task.value = ''
  }

  render() {
    return (<form onSubmit={this.handleFormSubmit}>
              <input placeholder='Add your todo' type='text' ref='task' />
              <input type="submit" value="add Task" />
            </form>);
  }
}

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default connect(null, {addTask})(TodoForm);
