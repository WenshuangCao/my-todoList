import styles from "./DeleteSelect.module.css";
import { ListContext } from "../store/ListProvider";
import { useContext } from "react";

const DeleteSelect = () => {
  const listCtx = useContext(ListContext);

  const deleteSelectedHandler = (e) => {
    listCtx.deleteSelected();
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={deleteSelectedHandler}
    >
      Delete selected
    </button>
  );
};

export default DeleteSelect;
