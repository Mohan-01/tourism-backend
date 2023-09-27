import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import tourRouter from './routes/tourRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(cors({
    origin: ['http://localhost:3000', 'https://tourism-backend-ce6w.onrender.com'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
}));
// app.use(cors());

app.use('/api/v1/tours/', tourRouter);
app.use('/api/v1/users/', userRouter);

app.use('*', function(req, res) {
    res.status(404).json({
        status: 'error',
        message : `There is no route with this ${req.originalUrl}`,
    })
})

export default app;