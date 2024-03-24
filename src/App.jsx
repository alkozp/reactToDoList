// TODO TODOReducer App
import { useReducer, Fragment } from "react";
import "./App.css";

const initTodoList = [
  { id: 1, name: "Learn React", complete: false },
  { id: 2, name: "Learn Redux", complete: false },
  { id: 3, name: "Learn JS", complete: false },
  { id: 4, name: "Learn HTML", complete: true },
  { id: 5, name: "Learn CSS", complete: true },
  { id: 6, name: "Learn SASS", complete: false },
  { id: 7, name: "Learn Tailwind", complete: false },
  { id: 8, name: "Learn Bootstrap", complete: false },
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
          return { ...todo, complete: !todo.complete };
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
        <button
          onClick={() => dispatch({ type: TODO_ACTION.NEW, name: todo.value })}
        >
          Add
        </button>
      </div>
      <hr />
      <div className="todo-list">
        {todoList.map((todo) => {
          return (
            <Fragment key={todo.id}>
              <span
                {...{
                  style: {
                    textDecoration: todo.complete ? "line-through" : "none",
                  },
                }}
              >
                {todo.name}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: TODO_ACTION.DONE, id: todo.id })
                }
              >
                Done
              </button>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default App;
