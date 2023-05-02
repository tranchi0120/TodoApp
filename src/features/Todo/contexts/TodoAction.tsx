import { EActionType } from "../interfaces/cons";
import { ITodos } from "../interfaces/interfaces";


export type TodoAction =
    | { type: EActionType.AllTodo, payload: ITodos }
    | { type: EActionType.AddTodo, payload: ITodos }
    | { type: EActionType.DeleteTodo, payload: String }
    | { type: EActionType.EditTodo, payload: ITodos }
    // | { type: EActionType.TickTodo, payload: string }
    | { type: EActionType.Loading, payload: boolean }
    | { type: EActionType.Fail, payload: boolean }
    | { type: EActionType.Succsess, payload: boolean }