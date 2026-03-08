import type {TaskStatus} from './types/index.ts'
import type {Task} from './types/index.ts'
// import type {TaskItemProps} from './types/index.ts'
import  TaskItem from './components/TaskItem'

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
  const [taskData, setTaskData] = useState<Task | null>({
        id: "001",
        title: "Task 1",
        description: "Clean the kitchen.",
        status: "pending",
        priority: "low",
        dueDate: "2/23/2026"
  })

  //  taskStatusHandler needs to change style of taskStatus dropdown
  const taskStatusHandler = (taskId: string, newStatus: TaskStatus) => {
    console.log("change task status style");
  }

   // removeTaskHandler takes the string-id and converts
  //  it to a number to be used to delete the task from the list
  const removeTaskHandler = (taskId: string) => {
    console.log(`Remove a task with id: ${taskId}`);
  }

  return (
    <>
    <TaskItem task= {taskData as Task} onStatusChange={taskStatusHandler} onDelete = {removeTaskHandler} />
    </>
  )
}

export default App
