import React, {PropTypes} from 'react';

export default class TaskView extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let {title} =  this.props.task;
    return (<div>{title}</div>);
  }
}

TaskView.propTypes = {
  task: PropTypes.object.isRequired
};
