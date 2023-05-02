import { createContext } from "react";
import { ITodoState } from "../interfaces/interfaces";

export interface TodoContextProps {
  todoState: ITodoState;
  addTodo: (body: { description: string }) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  editTodo: (
    id: string,
    body: { description: string }
  ) => Promise<void>;
  // tickTodo: (id: string, body: { isCompleted: boolean }) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
