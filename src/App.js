import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const name = "Brad";

  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
