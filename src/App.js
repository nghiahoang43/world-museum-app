import './App.css';
import Museum from './components/Museum/Museum';
import Slider from './components/Slider/Slider';
import Timeline from './components/Timeline/Timeline';
import Solution from './components/Solution/Solution';
import Member from './components/Member/Member';

function App() {
  return (
    <div className='App'>
      <Museum />
      <Slider />
      <Solution />
      <Timeline />
      <Member />
    </div>
  );
}

export default App;
