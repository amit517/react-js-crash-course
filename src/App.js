import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {
  const name = "Brad";
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      reminder: true,
      day: "Monday 1 PM",
    },
    {
      id: 2,
      text: "Meeting at school",
      reminder: true,
      day: "Monday 5 PM",
    },
    {
      id: 3,
      text: "Food shopping",
      reminder: false,
      day: "Monday 12 PM",
    },
    {
      id: 4,
      text: "Doctors Appointment",
      reminder: true,
      day: "Monday 05 PM",
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((tasks) => tasks.id !== id));
    //console.log(id);
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    //console.log(id);
  };

  return (
    <div className="container">
      <Header />
      {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
