export interface ITodos {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface ITodoState {
  todos: ITodos[];
  loading: boolean;
  fail: boolean;
  succsess: boolean;
}
