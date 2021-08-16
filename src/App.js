import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Parse from 'parse/dist/parse.min.js';
import keys from "./constants/Keys";
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTask(taskFromServer);
    };
    getTasks();
  }, [tasks]);

  //Fetch Task
  const fetchTasks = async () => {
    
    const parseQuery = new Parse.Query("Task");
    try {
      let persons = await parseQuery.find();
      setTask(persons);
      console.log(persons);
      console.log(tasks);
      return persons;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert("Error!", error.message);
      console.log("Error!", error.message);

      return false;
    }
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  //Add task

  const addTask = async (task) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // });

    // const data = await res.json();
    // setTask([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    // const newTask = { id, ...task };
    // setTask([...tasks, newTask]);

    try {
      //create a new Parse Object instance
      const newPerson = new Parse.Object("Task");
      //define the attributes you want for your Object
      newPerson.set("text", task.text);
      newPerson.set("day", task.day);
      newPerson.set("reminder", task.reminder);
      //save it on Back4App Data Store
      const data = await newPerson.save();
      setTask([...tasks, data]);
      alert("Success!", "Successfully Added");
      return true;
    } catch (error) {
      console.log("Error saving new person: ", error);
    }
  };

  //Delete task
  const deleteTask = async (todoId) => {
    // await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    // setTask(tasks.filter((tasks) => tasks.id !== id));
    //console.log(id);

        // Create a new todo parse object instance and set todo id
        const Person = new Parse.Object("Task");
        Person.set("objectId", todoId);
        // .destroy should be called to delete a parse object
        try {
          await Person.destroy();
          alert("Success!", "Todo deleted!");
          setTask(tasks.filter((tasks) => tasks.id !== todoId));
          return true;
        } catch (error) {
          // Error can be caused by lack of Internet connection
          alert("Error!", error.message);
          return false;
        }
  };

  //Toggle reminder
  const toggleReminder = async (id) => {
    // const taskToToggle = await fetchTask(id);
    // const updTask = {
    //   ...taskToToggle,
    //   reminder: !taskToToggle.reminder,
    // };

    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(updTask),
    // });

    // const data = await res.json();

  // const newTasks = tasks.
    const taskToToggle = tasks.find(item => item.id === id);

    console.log(taskToToggle);
    let UpdTask = new Parse.Object("Task");
    UpdTask.set("objectId", taskToToggle.id);
    UpdTask.set("text", taskToToggle.text);
    UpdTask.set("day", taskToToggle.day);
    UpdTask.set("reminder", taskToToggle.reminder? false : true);
    
     /* UpdTask = {
      ...taskToToggle,
      reminder: !taskToToggle.get("reminder"),
    }; */

    console.log(UpdTask);

     try {
      await UpdTask.save();
      // Success
      alert("Success!", "Todo updated!");
      readTodos();
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert("Error!", error.message);
      console.log(error.message);
    }
    //console.log(id);
  };

  const readTodos = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query('Task');
    try {
      let todos = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setTask(todos);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
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
