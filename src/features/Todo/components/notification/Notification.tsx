import { TodoContext } from "../../contexts/TodoContext";
import "./notification.scss";
import { useContext } from "react";

interface props {
    setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
}

const Notification = ({ setDeleteModal, id }: props): JSX.Element => {
    const { deleteTodo } = useContext(TodoContext);
    const handleClickNo = (): void => {
        setDeleteModal(false);
    };
    const handleClickYes = (): void => {
        void deleteTodo(id);
        setDeleteModal(false);
    };

    return (
        <div className="noti">
            <div className={!setDeleteModal ? "noti__container" : "active-noti"}>
                <h2 className="noti__title">You want To Delete?</h2>
                <div className="noti__button">
                    <div className="noti__btn btn-yes" onClick={handleClickYes}>
                        <i className="ri-check-line noti__icon"></i>
                    </div>
                    <div className="noti__btn btn-no" onClick={handleClickNo}>
                        <i className="ri-close-line noti__icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
