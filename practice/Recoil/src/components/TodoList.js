import React from "react";
import {useRecoilValue} from "recoil";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import FontButton from "./FontButton";
import TodoItem from "./TodoItem";
import {filteredTodoListState} from "../recoil_state";
import Text from "./Text";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <FontButton />
      <Text />
      <TodoListStats />
      <div style={{display: "flex", gap: "10px"}}>
        <TodoItemCreator />
        <TodoListFilters />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default TodoList;
