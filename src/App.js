import Calendar from "./Components/Calendar";
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <div className="calendar-container">
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;