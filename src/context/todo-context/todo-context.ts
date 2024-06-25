import { createContext, useContext } from "react";
import { ITodoContext, defaultTodos } from "./todo-context.types";

const TodoContext = createContext<ITodoContext>(defaultTodos)

export const TodoProvider = TodoContext.Provider;
export const useTodoContext = () => useContext(TodoContext);