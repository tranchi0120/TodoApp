import TodoItem from "./components/TodoItem/TodoItem";
import Filter from "./components/Filters/Filter";
import "./todo.css";
import { useContext, useState } from 'react';
import { TodoContext } from "./contexts/TodoContext";
import { ITodos } from "./interfaces/interfaces";

import { BsCheck2Circle } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
import AddTodo from "./components/AddTodo/AddTodo";

const Todo = (): JSX.Element => {
  const { todoState } = useContext(TodoContext);
  const todos = todoState.todos;


  // const [idDelete, setId] = useState<string>("");
  // const [descriptionE, setDescription] = useState<string>('');

  // const handleEdit = (id: string, description: string): void => {
  //   setId(id);
  //   setDescription(description);
  //   console.log("aâ");

  // }

  return (
    <>
      <div>
        {todoState.loading === true ? (
          <div className="loading">
            <div className="loading-detail"></div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {todoState.fail === true || todoState.succsess === true ? (
          <div className="return">
            <div className="return-title">
              {todoState.fail === true ? (
                <>
                  <div className="return-icon fail">
                    <MdErrorOutline />
                  </div>
                  <p>Fail!</p>
                </>
              ) : (
                ""
              )}
              {todoState.succsess === true ? (
                <div className="succsess">
                  <div className="return-icon success">
                    <BsCheck2Circle />
                  </div>
                  <p>Success!</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <Filter />
      <div className="todoList">
        {todos.map((todo: ITodos, _key: number) => (
          <TodoItem key={_key} description={todo.description} id={todo.id} />
        ))}
      </div>
      <AddTodo />
    </>
  );
};

export default Todo;
