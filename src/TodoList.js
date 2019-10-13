import React from 'react';
import TodoListItem from './TodoListItem'
import './App.css';

export default class TodoList extends React.Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodo={this.props.markTodoDone} />
        );
      });
      return (
        <ul className="list-group" id="ul_style"> {items} </ul>
      );
    }
  }
  