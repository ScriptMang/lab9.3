import type {TaskItemProps} from './../types'



function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
  
    return (
      <>
        <div id="taskContainer">
          <div id="taskTitleInfo1">
            <div id="taskTitle">
              <h3>{task.title}</h3>
            </div>
            <div id="taskItemOptions">
              <select
                defaultValue={task.status}
                onChange={() => {
                  onStatusChange("3", "completed");
                }}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </div>
          <p>{task.description}</p>
          <div id="taskInfo2">
            
       {
         task.priority ==='low' ? <span style={{color: "green"}}>Priority: {task.priority}</span> : 
         task.priority ==='medium' ? <span style={{color: "orange"}}>Priority: {task.priority}</span> :
         task.priority ==='high' ? <span style={{color: "red"}}>Priority: {task.priority}</span> : null
       }
            <span>Due: {task.dueDate}</span>
          </div>
        </div>
      </>
    );
}

export default TaskItem