import DeleteSelect from "./DeleteSelect";
import ListItem from "./ListItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <DeleteSelect className={styles.delete}></DeleteSelect>
      <ListItem className={styles.list}></ListItem>
    </div>
  );
};

export default TodoList;
