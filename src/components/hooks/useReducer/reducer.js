import React, { useState, useReducer } from "react";

const intialState = {
  count: 0,
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "Inc":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Dec":
      return {
        ...state,
        count: state.count - 1,
      };
    case "add_todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((todo, idx) =>
          idx === action.idx ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}

const Reducer = () => {
  const [{ count, todos }, dispatch] = useReducer(reducer, intialState);
  const [text, setText] = useState();

  return (
    <div>
      <h1>useReducer</h1>
      <div>Counter : {count}</div>
      <button onClick={() => dispatch({ type: "Inc" })}>Increment</button>
      {console.log("state.count", count)}
      <button onClick={() => dispatch({ type: "Dec" })}>Decrement</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add_todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {todos.map((todo, idx) => (
        <div
          key={todo.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{
            textDecoration: todo.completed ? "line-through" : "",
          }}
        >
          {todo.text}{" "}
        </div>
      ))}
    </div>
  );
};

export default Reducer;
