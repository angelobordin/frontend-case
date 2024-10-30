import { useState, useEffect, ChangeEvent } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { Item, ITodoTypes } from "./types";

import "./index.css";

function Todo() {
  const [taskList, setTaskList] = useState(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event: ChangeEvent<EventTarget>) => {
    event.preventDefault();
    setSearch(searchInputValue);
  };

  const handleDeleteTask = (id: string) => {
    const editedItems: Item[] = [];

    taskList.map((item: Item) => {
      if (item.id !== id) {
        editedItems.push(item);
      }
    });

    setTaskList(editedItems);
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus = status === "pending" ? "done" : "pending";
    const editedItems: Item[] = [];

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === id) {
        editedItems.push({
          ...taskList[i],
          status: reversedStatus,
        });
      } else {
        editedItems.push(taskList[i]);
      }
    }

    setTaskList(editedItems);
  };

  useEffect(() => {
    if (search)
      setTaskList(() => [
        ...TODO_LIST.filter((item) => item.title.includes(search)),
      ]);
  }, [search]);

  return (
    <main id="page" className="todo">
      <div>
        <img src={logoImage} alt="Cora" title="Cora"></img>
        <h1>Weekly to-do list &#128467;</h1>
        <h2>
          Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong> list
        </h2>
        <p>
          Marque como{" "}
          <strong>
            <u>done</u>
          </strong>{" "}
          as tasks que você conseguir concluir (elas já precisam renderizar com
          o status <strong>done</strong>)
        </p>
        <p className="disclaimer">
          Items obrigatórios marcados com arteristico (<strong>*</strong>)
        </p>
        <div className="todo__wrapper">
          <form className="todo__search" onSubmit={handleSearch}>
            <input
              id="search"
              placeholder="busca por texto..."
              value={search}
              onChange={handleChange}
            />
            <button type="submit">buscar</button>
          </form>
          <ul className="todo__list">
            {taskList.length === 0 && (
              <span>
                <strong>Ops!!!</strong> Nenhum resultado foi encontrado
                &#128533;
              </span>
            )}
            {taskList.map((task, i) => {
              return (
                <li key={task.id}>
                  <span>
                    {i}
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
                      <button onClick={() => handleDeleteTask(task.id)}>
                        delete
                      </button>
                      <button
                        onClick={() =>
                          handleChangeTaskStatus(task.id, task.status)
                        }
                      >
                        change to{" "}
                        <strong>
                          <u>{task.status === "done" ? "pending" : "done"}</u>
                        </strong>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Todo;
