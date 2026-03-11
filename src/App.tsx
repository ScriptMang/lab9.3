import type {TaskStatus} from './types/index.ts'
import type {Task} from './types/index.ts'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

import {useState} from 'react'
import './App.css'

// 1. Component Implementation:
//  Implement each component according to its interface requirements.
//  Use proper TypeScript types and interfaces.
//  Implement list rendering with unique keys.
//  Add conditional rendering based on task properties.

// 2. List Management:
//  Render the task list with proper key props.
//  Implement filtering functionality.
//  Handle task status changes.
//  Implement task deletion.

// 3. Visual Feedback:
//  Show different styles based on task status and priority.
//  Implement hover and active states.
//  Add visual indicators for task properties.

// 4. Component Composition:
//  Compose components to create a complete task management interface.
//  Handle prop passing between components.
//  Implement proper event handling.

function App() {
    const [taskList, setTaskList] = useState<Task[] | null>([{
        id: "001",
        title: "Task 1",
        description: "Clean the kitchen.",
        status: "pending",
        priority: "low",
        dueDate: "12/31/2023"
  }, {
        id: "002",
        title: "Task 2",
        description: "Clean the dishes.",
        status: "pending",
        priority: "medium",
        dueDate: "1/1/2024"
  },
{
        id: "003",
        title: "Task 3",
        description: "Sweep the floor.",
        status: "pending",
        priority: "high",
        dueDate: "1/24/2024"
  }])

  //  taskStatusHandler needs to change style of taskStatus dropdown
  const taskStatusHandler = (taskId: string, newStatus: TaskStatus) => {
    const numVal = Number(taskId)
    console.log("Inside the task handler the str_id to num_id is: ", numVal);
    if (taskList !== null) {
      setTaskList(prevTasks =>
        (prevTasks as Task[]).map(task =>
          Number(task.id) === numVal ? {...task, status: newStatus} : task
        )
      );
      console.log(`whats the value of numVal: ${numVal}`);
      console.log(`changed task status style to ${taskList[numVal-1].status}`);
    } else {
      console.log("couldn't change the task's status style, its value is null.")
    }
  }

   // removeTaskHandler takes the string-id and converts
  //  it to a number to be used to delete the task from the list
  const removeTaskHandler = (taskId: string) => {
    const numId = Number(taskId);
    console.log(`Remove a task with id: ${taskId}`);
    setTaskList(prevTasks => (prevTasks as Task[]).filter(task => Number(task.id) !== numId));
  }
  
  // copy of the tasklist prior to filtering 
  const preFilteredTaskList = taskList as Task[];

  // filters tasks based on status or priority changes for each of their drop downs 
  const filterTaskHandler = (filter: { status?: TaskStatus
    priority?: 'low' | 'medium' | 'high';}) =>{
      if (filter?.status !== undefined){
         setTaskList(prevTasks => (prevTasks as Task[]).filter(task => task.status === filter.status));
      } else if (filter?.priority !== undefined) {
         setTaskList(prevTasks => (prevTasks as Task[]).filter(task => task.priority === filter.priority));
      } else {
        setTaskList(preFilteredTaskList);
        console.log("Both the task status and the task priority passed are undefined")
        console.log("Resetting the TaskList.")
      }
  }

  return (
  <>
  <TaskFilter onFilterChange={filterTaskHandler}/>
  <TaskList tasks={taskList as Task[]} onStatusChange={taskStatusHandler} onDelete={removeTaskHandler} />
  </>
)


}

export default App
