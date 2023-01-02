import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ConfigureDatabase from './config/mongoose.js';
import routes from './routes/index.js';

if (process.env.NODE_ENV !== 'production') dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: '50MB' }));
app.use(express.urlencoded({ extended: true }));

ConfigureDatabase();
app.use('/', routes);

app.listen(port, error => {
  if (error) {
    console.log(`Error in starting the server, ${error}`);
    return;
  }

  console.log(`Server is running on port, ${port}`);
});
