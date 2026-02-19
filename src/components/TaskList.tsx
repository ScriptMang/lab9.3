import type { TaskListProps } from ".././types";
import type { Task } from ".././types";

const tasks: Task[] = [
    {
        id: "001",
        title: "Task 1",
        description: "Clean the kitchen.",
        status: "pending",
        priority: "low",
        dueDate: "2/13/2026"
    },
    {
        id: "002",
        title: "Task 2",
        description: "Clean the kitchen.",
        status: "in-progress",
        priority: "low",
        dueDate: "2/13/2026"
    },
    {
        id: "003",
        title: "Task 3",
        description: "Clean the kitchen.",
        status: "completed",
        priority: "low",
        dueDate: "2/13/2026"
    }
]

function TaskList({tasks, onStatusChange, onDelete}: TaskListProps){
    return(
        <>
        </>
    )
}