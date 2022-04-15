import styles from "./Todo.module.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useContext } from "react";
import { ListContext } from "../store/ListProvider";

const Todo = () => {
  const listCtx = useContext(ListContext);

  const addTodoHandler = (newTodo) => {
    listCtx.addItem(newTodo);
  };
  return (
    <div className={styles.todo}>
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList></TodoList>
    </div>
  );
};

export default Todo;
