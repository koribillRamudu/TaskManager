import './App.css';
import Footter from './components/Footter';
import Header from './components/Header';
import Home from './components/Home';
import Tasklist from './components/Tablecontant';



function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <br></br>
      <Header/>
      <br></br>
      <Home/>
      <br></br>
      <Tasklist/>
      <Footter/>
    </div>
  );
}

export default App;
