import React from 'react';
import { connect } from 'react-redux';
import {addTodo, toggleTodo} from '../actions';
import '../App.css';

class Todo extends React.Component{
    state ={
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: '' })
    }

    toggleTodo = id => {
        this.props.toggleTodo(id)
    }

    render(){
        return(
            <div className="TodoWrapper">
                <h1>Todo App by HP</h1>
                <div className="todolist">

                {this.props.todos && this.props.todos.map(todo => (
                <div className= {todo.completed = true ? "completed": "unfinished" }
                onClick={ () =>  this.toggleTodo(todo.id) } 
                key={todo.id}>

                {todo.task}
                </div>
                    ))}
                </div> 
                {/* End todolist */}

                <div className= 'todoform'>
            
                    <form onSubmit={this.addTodo}> 
                    <input
                    placeholder= 'Add your Task'
                    type = 'Text' 
                    value ={this.state.newTodo} 
                    onChange={this.handleChanges}
                    name= "task"></input> 

                    <button className="Add">Add Todo</button> 


                    </form>

                </div>
            </div>

        )

    }

}

const mapStatetoProps = state => {
    return{
        todos: state.todos
    };
};

export default connect(mapStatetoProps, {addTodo, toggleTodo})(Todo);