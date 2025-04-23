import Header from './components/Header/Header';
import TimerBoard from './components/TimerBoard/TimerBoard';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="timer-board">
        <TimerBoard />
      </div>
    </>
  );
}

export default App;
