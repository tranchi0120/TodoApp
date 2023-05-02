import { useReducer, useEffect } from "react";
import { ITodoState, ITodos } from "../interfaces/interfaces";
import { TodoReducer } from "./TodoReducer";
import { EActionType } from "../interfaces/cons";
import { addNewTodo, deleteATodo, editATodo, getAll } from "../api/api";
import { TodoContext } from "./TodoContext";

const INITIAL_STATE: ITodoState = {
  todos: [],
  succsess: false,
  fail: false,
  loading: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const loading = (): void => {
    dispatch({ type: EActionType.Succsess, payload: true });
    setTimeout(() => {
      dispatch({ type: EActionType.Loading, payload: false });
      dispatch({ type: EActionType.Succsess, payload: false });
    }, 500);
  };

  const fail = (): void => {
    dispatch({ type: EActionType.Fail, payload: true });
    dispatch({ type: EActionType.Loading, payload: false });
    setTimeout(() => {
      dispatch({ type: EActionType.Fail, payload: false });
    }, 500);
  };

  const allTodo = (): void => {
    dispatch({ type: EActionType.Loading, payload: true });
    try {
      void getAll().then((res: ITodos) => {
        dispatch({ type: EActionType.AllTodo, payload: res });
        dispatch({ type: EActionType.Loading, payload: false });
      });
    } catch (error) {
      fail();
    }
  };
  useEffect(() => {
    void allTodo();
  }, []);


  const addTodo = async (body: { description: string }): Promise<void> => {
    dispatch({ type: EActionType.Loading, payload: true });
    try {
      void addNewTodo(body).then((res: ITodos) => {
        dispatch({ type: EActionType.AddTodo, payload: res });
        loading();
      });
    } catch (error) {
      fail();
    }
  };


  const deleteTodo = async (id: string): Promise<void> => {
    dispatch({ type: EActionType.Loading, payload: true });
    try {
      void deleteATodo(id).then(() => {
        dispatch({ type: EActionType.DeleteTodo, payload: id })
        loading();
      })
    } catch (error) {
      fail();
    }
  }

  const editTodo = async (id: string, body: { description: string }): Promise<void> => {
    dispatch({ type: EActionType.Loading, payload: true })
    try {
      void editATodo(id, body).then((res: ITodos) => {
        dispatch({ type: EActionType.EditTodo, payload: res })
        loading()
      })
    } catch (error) {
      fail();
    }
  }

  const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const value = { todoState, addTodo, deleteTodo, editTodo }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
