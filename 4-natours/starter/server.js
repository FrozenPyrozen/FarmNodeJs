const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// Watch video 11 mongo db section
