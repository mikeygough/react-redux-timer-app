export function createTimer(
  label = 'Untitled Timer',
  color = '#FFFFFF',
  notes = 'Timer'
) {
  return {
    id: crypto.randomUUID(),
    label,
    startTime: Date.now(),
    elapsed: 0,
    isRunning: true,
    color,
    notes,
  };
}
