import './App.scss';
import DataCoins from './Components/DataCoins';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="panel">
        <Navbar></Navbar>
        <DataCoins></DataCoins>
      </div>
    </div>
  );
}

export default App;
