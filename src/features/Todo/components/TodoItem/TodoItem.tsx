import Notification from "../notification/Notification";
import "./todoItem.scss";
import { useState } from "react";

interface props {
  description: string;
  id: string;
}
const TodoItem = ({ description, id }: props): JSX.Element => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [idDelete, setId] = useState<string>("");
  // const [descriptionE, setDescription] = useState<string>('');

  const showNotification = (id: string): void => {
    setDeleteModal(true);
    setId(id);
  };

  return (
    <>
      {deleteModal ? (
        <Notification setDeleteModal={setDeleteModal} id={idDelete} />
      ) : (
        ""
      )}

      <div className="todoItem">
        <div className="todoItem__content">
          <div className="todoItem__list">
            <li className="todoItem__items">
              <div className="">
                <input
                  id="packers"
                  type="checkbox"
                  className="todoItem__check "
                />
                <label htmlFor="packers" className="todoItem__list--name ">
                  {description}
                </label>
              </div>
              <div className="todoItem__icons">
                <i
                  className="todoItem__icon ri-delete-bin-line"
                  onClick={() => showNotification(id)}
                ></i>
                <i className="todoItem__icon ri-pencil-line"></i>
              </div>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
