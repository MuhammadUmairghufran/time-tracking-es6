import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  };

  handleEditClick() {
    this.openForm();
  }

  handleFormClose() {
    this.closeForm();
  }

  handleSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.closeForm();
  }

  closeForm() {
    this.setState({editFormOpen: false});
  }

  openForm() {
    this.setState({editFormOpen: true });
  }

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit.bind(this)}
          onFormClose={this.handleFormClose.bind(this)}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick.bind(this)}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default EditableTimer;
