import dispatcher from "../dispatcher";

export function createTodo (text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo (id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos () {
    setTimeout (() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [
                {
                    id: 123123213,
                    text: "Go shipping again",
                    complete: false
                },
                {
                    id: 34234234,
                    text: "Pay bills again",
                    complete: true
                }
            ]
            });
    }, 1000);
}