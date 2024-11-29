import cron from 'node-cron';
import { updateStreaks } from '../services/streakService';
import { assignWeeklyTasks } from '../services/taskService';

// Schedule task assignment at the start of each week (e.g., every Monday at 00:00)
cron.schedule('0 0 * * 1', async () => {
  console.log('Assigning weekly tasks...');

  await assignWeeklyTasks();
});

// Schedule streak updates at the end of each week (e.g., every Sunday at 23:59)
cron.schedule('59 23 * * 0', async () => {
  console.log('Updating streaks...');
  await updateStreaks();
});
