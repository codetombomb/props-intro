import './App.css';
import Ball from './components/Ball'


function App() {
  const success = true;

  return (
    <div className="App">
      <Ball prop="true" perfectPutt={success}/>
    </div>
  );
}

export default App;