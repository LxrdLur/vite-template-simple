import React from 'react';
import AddTaskForm from "@/components/AddTaskForm.jsx";
import SearchTaskForm from "@/components/SearchTaskForm.jsx";
import TodoInfo from "@/components/TodoInfo.jsx";
import TodoList from "@/components/TodoList.jsx";

const ToDo = () => {
    const tasks = [
        {id: 'task-1', title: 'Купить молоко', isDone: false,},
        {id: 'task-2', title: 'Погладить кота', isDone: true,},
    ]

    const deleteAllTasks = () => {

    }
    const deleteTask = (taskId) => {

    }
    const toggleTaskComplete = (taskId, isDone) => {

    }
    const filterTasks = (query) => {
        console.log('fdfd' + query)
    }

    const addTask = () => {

    }
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
            <SearchTaskForm onSearchInput={filterTasks}/>
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length} //аналогично (task) => task.isDone
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    );
};

export default ToDo;