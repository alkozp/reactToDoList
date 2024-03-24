// TODO TODOReducer App
import { useReducer } from "react";
import "./App.css";

const initTodoList = [
  { id: 1, name: "Learn React", state: true },
  { id: 2, name: "Learn Redux", state: true },
  { id: 3, name: "Learn JS", state: true },
  { id: 4, name: "Learn HTML", state: false },
  { id: 5, name: "Learn CSS", state: false },
  { id: 6, name: "Learn SASS", state: true },
  { id: 7, name: "Learn Tailwind", state: true },
  { id: 8, name: "Learn Bootstrap", state: true },
];

const TODO_ACTION = {
  NEW: "NEW",
  DELETE: "DELETE",
  DONE: "DONE",
};

function todoReducer(todoList, action) {
  console.log(todoList, action);
  switch (action.type) {
    case TODO_ACTION.DONE:
      return todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, state: !todo.state };
        }
        return todo;
      });

    case TODO_ACTION.NEW:
      return [...todoList, { id: Date.now(), name: action.name, state: false }];

    default:
      return [...todoList];
  }
}

function App() {
  const [todoList, dispatch] = useReducer(todoReducer, initTodoList);

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" name="todo" id="todo" placeholder="New todo" />
        <button onClick={() => dispatch({ type: TODO_ACTION.NEW })}>Add</button>
      </div>
      <hr />
      <div className="todo-list">
        {todoList.map((todo) => {
          return (
            <>
              <span
                key={todo.id}
                {...{
                  style: {
                    textDecoration: !todo.state ? "line-through" : "none",
                  },
                }}
              >
                {todo.name}
              </span>
              <button
                key={todo.id + 1000}
                onClick={() =>
                  dispatch({ type: TODO_ACTION.DONE, id: todo.id })
                }
              >
                Done
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
