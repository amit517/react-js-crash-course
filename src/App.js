import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTask(taskFromServer);
    };
    getTasks();
  }, []);

  //Fetch Task
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  //Add task

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTask([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    // const newTask = { id, ...task };
    // setTask([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTask(tasks.filter((tasks) => tasks.id !== id));
    //console.log(id);
  };

  //Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
    //console.log(id);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No task to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
