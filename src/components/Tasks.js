import { useState } from "react";

export const Tasks = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      reminder: true,
    },
    {
      id: 4,
      text: "Doctors Appointment",
      reminder: true,
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
