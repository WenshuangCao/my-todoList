import "./App.css";
import MainHeader from "./components/MainHeader";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import About from "./pages/About";
import DetailedTodo from "./pages/DetailedTodo";
import ListProvider from "./store/ListProvider";

function App() {
  return (
    <ListProvider className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/:itemId" element={<DetailedTodo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ListProvider>
  );
}

export default App;
