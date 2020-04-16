import React from 'react';
import '../css/list.css';

const List = ({data, deleteItem, title, type, changeItemOfList}) => {


  function icons (type, id, changeItemOfList) {

    return (
      type === 'doing' ?
        (<><span><i className="fa fa-coffee" onClick={() => {changeItemOfList(type,'todo', id)}} title="Mover para A Fazer"></i></span>
          <span><i className="fa fa-hourglass-start" onClick={() => {changeItemOfList(type,'backlog', id)}} title="Mover para Backlog"></i> </span>
          <span><i className="fa fa-check" onClick={() => {changeItemOfList(type,'done', id)}} title="Mover para Feito"></i></span></>)
      : type === 'todo' ?
        (<><span><i className="fa fa-headphones" onClick={() => {changeItemOfList(type,'doing', id)}} title="Mover para Fazendo"></i></span>
          <span><i className="fa fa-hourglass-start" onClick={() => {changeItemOfList(type,'backlog', id)}} title="Mover para Backlog"></i> </span>
          <span><i className="fa fa-check" onClick={() => {changeItemOfList(type,'done', id)}} title="Mover para Feito"></i></span></>)
      : type === 'backlog' ?
        (<><span><i className="fa fa-headphones" onClick={() => {changeItemOfList(type,'doing', id)}} title="Mover para Fazendo"></i></span>
          <span><i className="fa fa-coffee" onClick={() => {changeItemOfList(type,'todo', id)}} title="Mover para A Fazer"></i> </span>
          <span><i className="fa fa-check" onClick={() => {changeItemOfList(type,'done', id)}} title="Mover para Feito"></i></span></>)
      : type === 'done' ?
        (<><span><i className="fa fa-headphones" onClick={() => {changeItemOfList(type,'doing', id)}} title="Mover para Fazendo"></i></span>
          <span><i className="fa fa-coffee" onClick={() => {changeItemOfList(type,'todo', id)}} title="Mover para A Fazer"></i> </span>
          <span><i className="fa fa-hourglass-start"  onClick={() => {changeItemOfList(type,'backlog', id)}} title="Mover para Backlog"></i></span></>)
      : ( null )
    )
  }



  const ItemsList = data.length ? (
      data.map(data =>{
        return (
          <div className="collection-item" key={data.id}>
            <span className="collection-item-description">
                {data.content}
                <span className="badge icons">
                    {icons(type, data.id, changeItemOfList)}
                    <span><i className="fa fa-times" onClick={() => {deleteItem(type, data.id)}} title="Excluir"></i></span>
                </span>
            </span>
          </div>
        )
      })
  ) : (
    <p className='center'>Empty list. Add more things \o/</p>
  )

  return (
    <div className="list-item">
      <div className="collection todos">
        {ItemsList}
      </div>
    </div>
  )
}


export default List;
