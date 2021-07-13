import './App.css';
import planetData from './data';
import Mercury from './pages/mercury';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mercury props={planetData} />
      </header>
    </div>
  );
}

export default App;
