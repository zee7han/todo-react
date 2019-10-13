import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoData from './TodoData';
import './App.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: TodoData};
  }
  addItem(todoItem) {
    TodoData.unshift({
      index: TodoData.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: TodoData});
  }
  removeItem (itemIndex) {
    TodoData.splice(itemIndex, 1);
    this.setState({todoItems: TodoData});
  }
  markTodoDone(itemIndex) {
    var todo = TodoData[itemIndex];
    TodoData.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? TodoData.push(todo) : TodoData.unshift(todo);
    this.setState({todoItems: TodoData});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={TodoData} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <br />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}