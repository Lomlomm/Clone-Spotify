import './App.css';
import { LeftMenu } from './Components/leftMenu';
import { RightMenu } from './Components/rightMenu';
import { MainContainer } from './Components/MainContainer';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className='background'></div>
    </div>
  );
}

export default App;
