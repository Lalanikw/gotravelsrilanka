const cron = require('node-cron');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs').promises;

// Schedule the task to run every day at 6:00 AM
cron.schedule('0 6 * * *', async () => {
  console.log('Running tweet fetch task...');
  const scriptPath = path.resolve(__dirname, 'fetch-tweets.js');
  console.log(`Executing script: ${scriptPath}`);
  
  try {
    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec(`node ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      await fs.appendFile(path.resolve(__dirname, '../logs/scheduler-error.log'), `${new Date().toISOString()}: ${stderr}\n`);
    }
    console.log(`fetch-tweets.js stdout: ${stdout}`);
    await fs.appendFile(path.resolve(__dirname, '../logs/scheduler.log'), `${new Date().toISOString()}: Task completed successfully\n`);
  } catch (error) {
    console.error(`Error executing fetch-tweets.js: ${error.message}`);
    await fs.appendFile(path.resolve(__dirname, '../logs/scheduler-error.log'), `${new Date().toISOString()}: ${error.stack}\n`);
  }
});

console.log('Tweet scheduler started. Will fetch tweets daily at 6:00 AM.');