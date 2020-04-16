import React, {Component} from 'react';
import { Redirect } from 'react-router'

class Home extends Component {

    state={
      link: 'YourLink',
      redirect: false
    }

    handleChange = (e) => {
        this.setState({
            link: e.target.value
        });
    }

    handleFocus = (e) =>{
      if(this.state.link === 'YourLink'){
        this.setState({
            link: ''
        });
      }
    }

    handleOnBlur = (e) => {
      if(this.state.link.length<1){
        this.setState({
            link: 'YourLink'
        });
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.link.length>0){
        this.setState({
          redirect: true
        })
      }
    }

    render () {
      if(this.state.redirect) {
        return <Redirect to={"/"+this.state.link} />
      }
      else{
        return (
        <div className="container">
          <div className="top-home">
            <div className="title-home">Hello to&nbsp;<span>MyTodos.Online/</span>
              <div className="input-field inline">
                  <form onSubmit={this.handleSubmit}>
                      <input id="linkInput" type="text" onFocus={this.handleFocus} onBlur={this.handleOnBlur} onChange={this.handleChange} value={this.state.link}/>
                      <button className="btn waves-effect waves-light" type="submit" name="action">
                        Go!
                        <i className="material-icons right">send</i>
                      </button>
                  </form>
              </div>
            </div>
          </div>
          <div className="features">
            Simple use, no login required <br />
            Simple link, MyTodos.Online/YourLink <br />
            Simple share, online for everyone <br />
            Simple organization, no overthink <br />
            Welcome to MyTodos.Online. The Simplest To Do App of the word!
          </div>
        </div>
      )
    }
  }

}

export default Home;
