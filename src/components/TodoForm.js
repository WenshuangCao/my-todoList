import { Fragment } from "react";
import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [inputDesc, setInputDesc] = useState("");
  const [inputCate, setInputCate] = useState("");
  const [inputCont, setInputCont] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo({
      Description: inputDesc,
      Category: inputCate,
      Content: inputCont,
    });
    setInputDesc("");
    setInputCate("");
    setInputCont("");
  };

  return (
    <Fragment>
      <form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="Description">Description:</label>
          <input
            type="text"
            name="Description"
            value={inputDesc}
            onChange={(e) => setInputDesc(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="Category">Category:</label>
          <select
            id="programming-language"
            value={inputCate}
            onChange={(e) => setInputCate(e.target.value)}
          >
            <option value=""></option>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="react">react</option>
          </select>
        </div>
        <div className={styles.input}>
          <label htmlFor="Content">Content:</label>
          <input
            type="text"
            name="Content"
            value={inputCont}
            onChange={(e) => setInputCont(e.target.value)}
          />
        </div>
        <button type="button" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default TodoForm;
