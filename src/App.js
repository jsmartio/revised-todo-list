import React from 'react';
import axios from 'axios';
import Header from './componets/Header'
import Todos from './componets/Todos'
import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }
  bChecked = (id) => {
    console.log('checked = ' + id )
    var todos = this.state.todos;
    todos.forEach ( e => {
      if(e.id == id) e.completed = !e.completed;
    })
    this.setState({tods: todos})
  }
  deleteItem = (id) => {
    console.log('delete id ' + id);
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)})
  }
  componentDidMount() {
    axios
      .get('https://jsmart.tech/jsondata/todos10.json')
      .then( res => this.setState({ todos: res.data}) )
  }
  
  render(){
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos} 
              bChecked={this.bChecked}
              deleteItem={this.deleteItem}
            />
      </div>

    );
  }

}

export default App;
