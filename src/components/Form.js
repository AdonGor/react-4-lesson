import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = event => {
    const { name, value }= event.currentTarget;
    this.setState({[name]: value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({name: '', tag: ''})
  }

  handleLicenceChange = event => {
    this.setState({licence: event.currentTarget.checked })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name <input 
            type="text"
            name= "name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.tagInputId}>
            Tag <input 
            type="text"
            name= "tag"
            value={this.state.tag}
            onChange={this.handleChange}     
            id={this.tagInputId}       
          />
          </label>

            <p>Your level:</p>

            <label>
              <input 
              type="radio" 
              name="experience" 
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === "junior"}
              />Junior
            </label>
            <label>
              <input 
              type="radio" 
              name="experience" 
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === "middle"}
              />Middle 
            </label>
            <label>
              <input 
              type="radio" 
              name="experience" 
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === "senior"}
              />Signore
            </label> 
              <input 
              type="checkbox" 
              name="licence"
              checked={this.state.licence} 
              onChange={this.handleLicenceChange}
              />I agree  

          <button type="submit" disabled={!this.state.licence}> Отправить</button>
        </form>
    );
  }
}

export default Form;
