import { atom } from "jotai";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
    todos.map((todo) => ({
        ...todo,
        text: todo.id === id ? text : todo.text
    }))

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
    todos.map((todo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done
    }))

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id)

export const addTodo = (todos: Todo[], text: string): Todo[] =>
    [
        ...todos,
        {
            id: Math.max(0, Math.max(...todos.map(({id})=>id)))+1,
            text,
            done: false
        }
    ]

// Jotai
export const newTodoAtom = atom<string>("")
export const todosAtom = atom<Todo[]>([])
export const addTodoAtom = atom(
    () => "",
    (get, set) => {
        set(todosAtom, addTodo(get(todosAtom), get(newTodoAtom)))
        set(newTodoAtom,"")
    }
)
export const toggleTodoAtom = atom(
    () => "",
    (get, set, id: number) => {
        set(todosAtom, toggleTodo(get(todosAtom), id));
    }
)