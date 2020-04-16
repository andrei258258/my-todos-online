import React, {Component} from 'react';

class AddForm extends Component {
  state={
    content: ''
  }

  handleChange = (e) => {
      this.setState({
          content: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.props.type, this.state)
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className="add-item">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input id={this.props.title} type="text" className="validate" onChange={this.handleChange} value={this.state.content}/>
            <label htmlFor={this.props.title}>Add new item</label>
          </div>
        </form>
      </div>
    )
  }
}

export default AddForm;
