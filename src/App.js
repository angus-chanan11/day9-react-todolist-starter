import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./context/todoReducer";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";
import Help from "./components/Help";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <nav>
            <Link to={"/"}>Home</Link> | <Link to={"/done-list"}>Done List</Link> | <Link to={"/help"}>Help</Link>
          </nav>
          <Routes>
            <Route path={"/"} element={<Navigate to="/todo-list"/>}/>
            <Route path={"/todo-list"} element={<TodoList/>}/>
            <Route path={"/done-list"} element={<DoneList/>}/>
            <Route path={"/help"} element={<Help/>}/>
            <Route path={"*"} element={<NotFound/>}/>
          </Routes>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
