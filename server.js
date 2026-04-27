import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

connectDB();

// Routes
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

// middleware
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/task', taskRoutes);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
