import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={(nav) => (nav.isActive ? styles.active : "")}
                to="/todo"
              >
                todo
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(nav) => (nav.isActive ? styles.active : "")}
                to="/about"
              >
                about
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainHeader;
