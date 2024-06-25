export interface ITodoContext {
    todos:Array<Todo>
    addTodo: (todo:string)=>void
    deleteTodo: (id:string)=>void
}

interface Todo {
    todo: string
    id: string
}

export const defaultTodos: ITodoContext={
    todos: [],
    addTodo: function (): void {
        throw new Error("Function not implemented.")
    },
    deleteTodo: function (): void {
        throw new Error("Function not implemented.")
    }
}