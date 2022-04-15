import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";
import { ListContext } from "../store/ListProvider";
import { useContext } from "react";

const ListItem = () => {
  const listCtx = useContext(ListContext);

  const items = listCtx.items;

  const deleteItemHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    listCtx.deleteItem(id);
  };

  const selectItemHandler = (e) => {
    const id = e.target.id;
    listCtx.selectedItem(id);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>
            <input type="checkbox" />
          </th>
          <th style={{ width: "50%" }}>Description</th>
          <th style={{ width: "20%" }}>Category</th>
          <th style={{ width: "20%" }}>Operate</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={selectItemHandler}
                  id={item.id}
                />
              </td>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/todo/${item.id}`}
                >
                  {item.Description}
                </Link>
              </td>
              <td>{item.Category}</td>
              <td
                onClick={deleteItemHandler}
                id={item.id}
                style={{ color: "red" }}
              >
                Delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListItem;
