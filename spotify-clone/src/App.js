import './App.css';
import { LeftMenu } from './Components/leftMenu';
import { MainContainer } from './Components/MainContainer';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />

      <div className='background'></div>
    </div>
  );
}

export default App;
