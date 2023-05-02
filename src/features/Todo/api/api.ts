import axios from "axios";
import { ITodos } from "../interfaces/interfaces";

const BaseUrl = "https://6448913ab88a78a8f0ef57dc.mockapi.io/todoApp";

const getAll = async (): Promise<ITodos> => {
  const res = await axios.get(`${BaseUrl}`);
  return res.data;
};

const addNewTodo = async (body: { description: string }): Promise<ITodos> => {
  const res = await axios.post(`${BaseUrl}`, body);
  return res.data;
};

const deleteATodo = async (id: string): Promise<Function> => {
  const res = await axios.delete(`${BaseUrl}/${id}`);
  return res.data;
};

const editATodo = async (
  id: string,
  body: { description: string }
): Promise<ITodos> => {
  const res = await axios.put(`${BaseUrl}/${id}`, body);
  return res.data;
};
export { getAll, addNewTodo, deleteATodo, editATodo };
