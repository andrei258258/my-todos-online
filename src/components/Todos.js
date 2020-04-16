import React, {Component} from 'react';
import Section from './Section.js';
import Title from './Title.js';
import {db} from '../config';

class Todos extends Component {

  state = {
    todo:[],
    done: [],
    backlog: [],
    doing: []
  }

  queryItem(type){
    const path = this.replaceStringUser(this.props.match.params.friendlyLink) + '/' + type;
    db.ref(path)
      .on('value', querySnapShot => {
        const dataReformated = []
        querySnapShot.forEach(doc => {
          dataReformated.push({
              id: doc.key,
              content: doc.val().content
          })
        });
        this.setState({
          [type]: dataReformated
        })
    });
  }

  componentDidMount(){
    this.queryItem('done');
    this.queryItem('doing');
    this.queryItem('backlog');
    this.queryItem('todo');
  }

  deleteItem = (type, id) => {
      const path = this.replaceStringUser(this.props.match.params.friendlyLink) + '/' + type;
      db.ref(path).child(id).remove();
  }


  addItem = async (type, item) => {
    const path = this.replaceStringUser(this.props.match.params.friendlyLink) +'/' + type
    await db.ref(path).push({
      content: item.content
    });
  }

  changeItemOfList = (oldType, newType, id) => {
    const item = this.state[oldType].filter(item => {
      return item.id === id
    });
    this.deleteItem(oldType, id)
    this.addItem(newType,item[0]);
  }

  replaceStringUser(user){
    return user.replace('.','_ponto_').replace('#','_hashtag_')
                .replace('$','_cifrao_').replace('[','_chaves_').replace(']','__chaves__')

  }




  render () {
    return (
      <div className="Todos">

        <Title friendlyLink={this.props.match.params.friendlyLink}/>

        <Section data={this.state.doing} deleteItem={this.deleteItem} title='Doing' type="doing"
            addItem={this.addItem} changeItemOfList={this.changeItemOfList} />

        <Section data={this.state.todo} deleteItem={this.deleteItem} title='To Do' type="todo"
          addItem={this.addItem} changeItemOfList={this.changeItemOfList} />

        <Section data={this.state.backlog} deleteItem={this.deleteItem} title='Backlog' type="backlog"
            addItem={this.addItem} changeItemOfList={this.changeItemOfList} />

        <Section data={this.state.done} deleteItem={this.deleteItem} title='Done' type="done" addItem={this.addItem}
            changeItemOfList={this.changeItemOfList}/>

      </div>
    );
  }
}

export default Todos;
