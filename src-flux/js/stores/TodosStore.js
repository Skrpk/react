import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor () {
        super();
        this.todos = [
            {
                id: 123456789,
                text: "Go shipping",
                complete: false
            },
            {
                id: 987654321,
                text: "Pay bills",
                complete: false
            }
        ];
    }

    createTodo (text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }

    deleteTodo (id) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id)
                this.todos.splice(i, 1);
        }

        this.emit("change");
    }

    getAll () {
        return this.todos;
    }

    handleActions (action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
                break;
            }
            case "DELETE_TODO": {
                this.deleteTodo(action.id);
                break;
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
                break;
            }

        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;