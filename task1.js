const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can choose any port you prefer

app.get('/api', (req, res) => {
  // Get query parameters from the URL
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Get the current UTC time with a +/-2 minute window
  const currentUTC = new Date();
  currentUTC.setMinutes(currentUTC.getMinutes() + Math.floor(Math.random() * 5) - 2); // Adding or subtracting up to 2 minutes

  // Format the seconds to have exactly two digits
  const secondsWithTwoDigits = currentUTC.getSeconds().toString().padStart(2, '0');


  // Construct the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: `${currentUTC.toISOString().slice(0, -5)}Z`, // ${secondsWithTwoDigits}
    track: track,
    github_file_url: 'https://github.com/idowuseyi/hng-1/blob/master/task1.js',
    github_repo_url: 'https://github.com/idowuseyi/hng-1',
    status_code: 200,
  };


  console.log(currentUTC.toISOString().slice(0, -5));
  console.log(secondsWithTwoDigits);
  // Return the JSON response
  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

