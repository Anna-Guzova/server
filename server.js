import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

connectDB();

// Routes
import authRoutes from './routes/authRoutes.js';

const app = express();

// middleware
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
