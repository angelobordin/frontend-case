import { Item, ITodoTypes } from "../types";

interface Props {
  task: Item;
  index: number;
  handleDeleteTask: (id: string) => void;
  handleChangeTaskStatus: (id: string, status: ITodoTypes) => void;
}

function Task({
  task,
  index,
  handleDeleteTask,
  handleChangeTaskStatus,
}: Props) {
  return (
    <li key={task.id}>
      <span>
        {++index}
        {task.required ? "*" : ""}.
      </span>
      <div className="todo__content">
        <h3>
          {task.title}
          <span data-type={task.status}>{task.status}</span>
        </h3>
        <p>{task.description}</p>
        {task.links && task.links.length > 0 && (
          <div className="todo__links">
            {task.links.map((link) => (
              <a key={link.name} target="_blank" href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        )}
        <div className="todo__actions">
          <button onClick={() => handleDeleteTask(task.id)}>delete</button>
          <button onClick={() => handleChangeTaskStatus(task.id, task.status)}>
            change to{" "}
            <strong>
              <u>{task.status === "done" ? "pending" : "done"}</u>
            </strong>
          </button>
        </div>
      </div>
    </li>
  );
}

export default Task;
