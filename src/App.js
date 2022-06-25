import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar classN={'nav'}/>
      <Sidebar classN={'side'}/>
      <Main classN={'main'}/>
    </div>
  );
}

export default App;
