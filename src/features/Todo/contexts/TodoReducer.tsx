import { EActionType } from "../interfaces/cons";
import { ITodoState, ITodos } from "../interfaces/interfaces";
import { TodoAction } from "./TodoAction";

export const TodoReducer = (state: ITodoState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case EActionType.AllTodo:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            };
        case EActionType.AddTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case EActionType.DeleteTodo:
            return {
                ...state,
                todos: state.todos.filter((todo: ITodos) => todo.id !== action.payload)
            }
        case EActionType.EditTodo:
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    console.log({ todo })
                    if (todo.id === action.payload.id) {
                        todo = action.payload;
                    }
                    return todo;
                })
            };
        case EActionType.Loading:
            return {
                ...state,
                loading: action.payload
            };
        case EActionType.Fail:
            return {
                ...state,
                fail: action.payload
            };
        case EActionType.Succsess:
            return {
                ...state,
                succsess: action.payload
            };
        default:
            return state;
    }
}