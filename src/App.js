import './App.css';
import planetData from './data';
import Mercury from './pages/mercury';

function App() {
  return (
    <div className="App">
        <Mercury props={planetData} />
    </div>
  );
}

export default App;
