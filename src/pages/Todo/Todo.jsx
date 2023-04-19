import { useState,useEffect } from "react";
import styled from "styled-components/macro";
import { CustomButton } from "@/components/Button/CustomButton";
import { InputWithLabel } from "@/components/InputWithLabel/InputWithLabel";

export function Todo() {
  const [tasks, setTasks] = useState([]); // 할 일 목록을 저장할 배열
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState("");

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(tasksFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 입력한 할 일을 추가하는 함수
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
  };


  // 선택한 할 일을 삭제하는 함수
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 선택한 할 일의 이름을 수정하는 함수
  const editTask = (id, newName) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, name: newName };
        }
        return task;
      })
    );
  };

  // 입력한 할 일을 처리하는 함수
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskName = event.target.elements.task.value;
    if (newTaskName.trim() !== "") {
      addTask(newTaskName);
      event.target.reset();
    }
  };
  
  // 입력한 일 수정하는 함수
  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskName(task.name);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditingTaskName("");
  };

  const handleModifyInputChange = (event) => {
    setEditingTaskName(event.target.value);
  };

  const handleModifySubmit = (event) => {
    event.preventDefault();
    editTask(editingTaskId, editingTaskName);
    setEditingTaskId(null);
    setEditingTaskName("");
  };

  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <StyledTodo>
      <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <InputWithLabel
          data-testid="new-todo-input"
          className="todoInput"
          type="text"
          name="task"
          placeholder="Add a Todo"
        />
        <CustomButton data-testid="new-todo-add-button" className="todoButton" type="submit">
          Add Todo
        </CustomButton>
      </form>
      <ul>
      {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <form onSubmit={handleModifySubmit}>
                <input
                  type="text"
                  value={editingTaskName}
                  onChange={handleModifyInputChange}
                  data-testid="modify-input"
                />
                <CustomButton data-testid="submit-button" type="submit">
                  수정
                </CustomButton>
                <CustomButton data-testid="cancel-button" onClick={handleCancelEdit}>
                  취소
                </CustomButton>
              </form>
            ) : (
              <>
                {task.name}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <CustomButton onClick={() => deleteTask(task.id)}>삭제</CustomButton>
                <CustomButton onClick={() => handleEditTask(task)}>수정</CustomButton>
              </>
            )}
          </li>
        ))}
      </ul>
    </StyledTodo>
  );
}

const StyledTodo = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 96px;
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    background-color: Lavender;
    padding: 0px 60px;
    border-radius: 10px;
    align-items: center;
  }

  .todoInput {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    margin-right: 10px;
    width:100%;
  }

  .todoButton { 
    padding: 10px;
    background-color: #008CBA;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin:15px 0 15px 155px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  li button {
    padding: 5px;
    background-color: #008CBA;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }
`