import React from 'react';
import { useDispatch } from 'react-redux';
import {
  pauseTimer,
  resumeTimer,
  resetTimer,
  removeTimer,
} from '../../features/timers/TimerSlice';

export default function TimerCard({ timer }) {
  const dispatch = useDispatch();

  const handlePause = () => dispatch(pauseTimer(timer.id));
  const handleResume = () => dispatch(resumeTimer(timer.id));
  const handleReset = () => dispatch(resetTimer(timer.id));
  const handleDelete = () => dispatch(removeTimer(timer.id));

  const elapsedSeconds = Math.floor(timer.elapsed / 1000);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: 10,
        marginBottom: 10,
      }}
    >
      <h3>{timer.label}</h3>
      <p>Elapsed Time: {elapsedSeconds}s</p>
      <p>Status: {timer.isRunning ? 'Running' : 'Paused'}</p>
      {timer.isRunning ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleResume}>Resume</button>
      )}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
