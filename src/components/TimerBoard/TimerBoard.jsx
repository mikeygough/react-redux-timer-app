import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTimer } from '../../features/timers/TimerSlice';
import TimerCard from '../TimerCard/TimerCard';

export default function TimerBoard() {
  const timers = useSelector((state) => state.timers);
  const dispatch = useDispatch();

  const handleAddTimer = () => {
    const label = prompt('Enter a timer label:') || 'New Timer';
    dispatch(addTimer(label));
  };

  return (
    <div>
      <h2>All Timers</h2>
      <h3>({timers.length})</h3>
      <button onClick={handleAddTimer}>Add Timer</button>
      <div>
        {timers.map((timer) => (
          <TimerCard key={timer.id} timer={timer} />
        ))}
      </div>
    </div>
  );
}
