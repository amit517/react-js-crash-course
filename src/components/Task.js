import { FaTimes } from "react-icons/fa";

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.get("reminder") ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.get("text")}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.get("day")}</p>
    </div>
  );
};
