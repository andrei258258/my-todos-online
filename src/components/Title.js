import React, {Component} from 'react';
import {db} from '../config';
import '../css/title.css';

class Title extends Component {

  timeout =  0;

  state={
    content: '',
    user: this.props.friendlyLink
  }

  componentDidMount(){
    const path = this.replaceStringUser(this.state.user) +'/title'
    db.ref(path)
      .once('value', querySnapShot => {
        let data = querySnapShot.val();
        if(data != null){
          this.setState({
              content: data[querySnapShot.node_.children_.root_.key].content
          })
        } else{
          this.setState({
              content: "My Todos. Give me a cool title :)"
          });
          this.upsertTitle(this.state.content)
        }
      });
  }

  replaceStringUser(user){
    return user.replace('.','_ponto_').replace('#','_hashtag_')
                .replace('$','_cifrao_').replace('[','_chaves_').replace(']','__chaves__')
  }

  handleChange = (e) => {
      this.setState({
          content: e.target.value
      });
      if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.upsertTitle(this.state.content)
      }, 1500);

  }

handleSubmit = (e) => {
  e.preventDefault();
  this.upsertTitle(this.state.content)
}


  upsertTitle = () => {
    const path = this.replaceStringUser(this.state.user) +'/title'
    db.ref(path)
      .once('value', querySnapShot => {
        if(querySnapShot.val() !== null){
          querySnapShot.forEach(doc => {
              db.ref(path).child(doc.key).update({
                content: this.state.content
              })
            });
        } else {
          db.ref(path).push({
            content: this.state.content
          });
        }
    });

  }


  render () {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input className="title-form" type="text" onChange={this.handleChange} value={this.state.content}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Title;
