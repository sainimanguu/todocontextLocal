import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})//ek object hh ye 


export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider
