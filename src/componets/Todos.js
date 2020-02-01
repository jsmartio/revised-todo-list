import React from 'react';
import Todo from './Todo';

class Todos extends React.Component{
    render(){
        return (
            <div>
                { this.props.todos.map(todo => 
                    <Todo   key={todo.title}
                            title={todo.title}
                            completed={todo.completed}
                            id={todo.id}
                            bChecked={this.props.bChecked}
                            todo={this.props.todo}
                            deleteItem={this.props.deleteItem}
                    />) }
            </div>
        )

    }
}

export default Todos