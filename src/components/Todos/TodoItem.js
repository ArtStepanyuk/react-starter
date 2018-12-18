import React from "react";
import { Alert, Button } from "reactstrap";
import { css } from "emotion";

const itemStyle = css`
  .alert {
    display: flex;
    justify-content: space-between;
  }
`;

export default function TodoItem({
  removeTodo,
  toggleCompleted,
  text,
  id,
  completed
}) {
  const handleStatusChange = fn => {
    fn(id);
  };

  return (
    <div className={itemStyle}>
      <Alert color={completed ? "primary" : "secondary"}>
        {text} - {completed ? "Done" : "Undone"}
        <div>
          <Button
            outline
            color="warning"
            onClick={handleStatusChange(toggleCompleted)}
          >
            {completed ? "Undone" : "Done"}
          </Button>{" "}
          <Button
            outline
            color="danger"
            onClick={handleStatusChange(removeTodo)}
          >
            Remove Todo
          </Button>
        </div>
      </Alert>
    </div>
  );
}
