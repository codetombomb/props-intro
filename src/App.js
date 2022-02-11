import './App.css';
import Ball from './components/Ball'


function App() {
  const success = true;

  /*
    Pass a prop named perfectPutt
    that contains the value of the
    success variable to the Ball 
    component in order make the shot!
  */
  return (
    <div className="App">
      <Ball />
    </div>
  );
}

export default App;

function childComponent(props) {
  return (<div>

  </div>
  )
}

childComponent()