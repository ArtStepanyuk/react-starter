import React, { Fragment } from "react";
import TodoItem from "../../containers/Todos/TodTodoItemContainerItem";
import EmptyResult from "../common/EmptyResult";

export default function TodoList({ todos }) {
  const renderList = () =>
    todos.length > 0 ? (
      todos.map(i => <TodoItem {...i} key={i.id} />)
    ) : (
      <EmptyResult text="Add something" />
    );

  return <Fragment>{renderList()}</Fragment>;
}
