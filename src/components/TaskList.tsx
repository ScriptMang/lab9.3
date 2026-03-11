import type { TaskListProps } from ".././types";
import TaskItem from ".././components/TaskItem"

function TaskList({tasks, onStatusChange, onDelete}: TaskListProps){
   const listItems = tasks.map((task) => (
     <li key={task.id}>
      <TaskItem task= {task} onStatusChange={onStatusChange} onDelete={onDelete} />
     </li>
   )); 
   
    return(
        <>
         <ul id="taskListContainer">
          {listItems}
         </ul>
        </>
    );
}

export default TaskList