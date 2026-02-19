import type {TaskItemProps} from './../types'


  function(){

    
  }
  


function TaskItems({task, onStatusChange, onDelete}: TaskItemProps) {
  

  
  
    return (
        <>
        <div>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div>
                <select defaultValue={ task.Status} onChange={() => {
                     return onStatusChange(
                        "3", "completed"
                     );
                }}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button>Delete</button>
        </div>
        <div>
            <span></span>
            <span></span>
        </div>
        </>
    )

}