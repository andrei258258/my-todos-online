import React from 'react';
import List from './List.js';
import AddForm from './AddForm.js';


const Section = ({data, deleteItem, addItem, title, type, changeItemOfList}) => {

    const icon = type === 'doing' ?
        (<span><i className="fa fa-headphones"></i></span>)
      : type === 'todo' ?
        (<span><i className="fa fa-coffee"></i></span>)
      : type === 'backlog' ?
        (<span><i className="fa fa-hourglass-start"></i></span>)
      : type === 'done' ?
        (<span><i className="fa fa-check"></i></span>)
      : ( null )

    return (
      <div className="container">
        <h3 className="header">
          {icon} {title}
        </h3>
        <List changeItemOfList={changeItemOfList} data={data} deleteItem={deleteItem} title={title} type={type} />
        <AddForm addItem={addItem} title={title} type={type}/>
      </div>
    )

}

export default Section;
