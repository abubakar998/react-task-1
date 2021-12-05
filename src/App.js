import Table from "./components/Table";
import Todo1 from "./components/Todo1";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      
      <Modal/>
      <Todo/>
      
      <Todo1/>
      <Table/>
      
    </div>
  );
}

export default App;
