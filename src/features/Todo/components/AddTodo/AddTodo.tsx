import { useState, useContext } from "react";
import { ITodos } from "../../interfaces/interfaces";
import { TodoContext } from "../../contexts/TodoContext";

const AddTodo = () => {
    const { todoState, addTodo } = useContext(TodoContext);

    const [description, setDescription] = useState<string>("");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDescription(e.target.value);
    };

    const checkDesc = todoState.todos.filter((todo: ITodos): boolean => {
        return todo.description === description;
    });

    const [validation, setValidation] = useState<{ description: string }>({
        description: "",
    });

    const valid = (): void => {
        const errors = JSON.parse(JSON.stringify(validation));
        if (description.trim().length === 0) {
            errors.description = "Description is required!";
        } else {
            errors.description = "";
            if (checkDesc.length > 0) {
                errors.description = "Description is exist!";
            } else {
                errors.description = "";
            }
        }
        return setValidation(errors);
    };

    const handleAdd = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        void addTodo({ description });
        setDescription("");
    };

    return (
        <div className="todoItem__submit">
            <form className="form" onSubmit={handleAdd}>
                <input
                    value={description}
                    className="todoItem__input"
                    type="text"
                    placeholder="enter the course"
                    onChange={handleOnChange}
                />
                <button className="todoItem__btn">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
