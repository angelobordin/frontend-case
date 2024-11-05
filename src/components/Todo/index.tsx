import { useState, useEffect, ChangeEvent } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { Item, ITodoTypes } from "./types";

import "./index.css";
import Task from "./Task";

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
    const newTaskList = taskList.filter((t) => t.id !== id);
    setTaskList(newTaskList);
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
    if (search) {
      setTaskList(
        TODO_LIST.filter((item) =>
          item.title.toUpperCase().includes(search.toUpperCase())
        )
      );
    } else {
      setTaskList(TODO_LIST);
    }
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
              value={searchInputValue}
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
            {taskList.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                handleChangeTaskStatus={handleChangeTaskStatus}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Todo;
