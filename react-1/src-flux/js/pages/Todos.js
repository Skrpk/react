import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodosStore";
import * as TodoActions from "../actions/todoAction";

export default class Featured extends React.Component {
    constructor () {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    getTodos () {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos)
    };

    componentWillUnmount () {
        TodoStore.removeListener("change", this.getTodos);
    }

    createTodo () {
        const input = document.querySelector('.form-control');

        if (input.classList.contains('red-border')) {
            input.classList.remove(('red-border'));
        }

        if (input.value) {
            TodoActions.createTodo(input.value);
            input.value = '';
        } else {
            input.classList.add('red-border');
        }
    };

    reloadTodos () {
        TodoActions.reloadTodos();
    };

    render () {
        const { todos } = this.state;

        const TodoComponent = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        const buttonStyle = {
            margin: "2%"
        }

        return (
            <div>
                <input class="form-control" type="text"/>
                <button style={buttonStyle} class="btn btn-success" onClick={this.createTodo.bind(this)}>Create!</button>
                <button style={buttonStyle} class="btn btn-success" onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <h1>Todos</h1>
                <ul>{TodoComponent}</ul>
            </div>
        );
    }
}