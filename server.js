import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRout.js';
//configure env
dotenv.config();

//database config
connectDB();

//rest object created to create rest api
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);
//rest api create
app.get("/",(req,res) => { //req means request and res means respond
    res.send("<h1>Welcome to Ecommerce App</h1>");
});
//port 
// for React, port works on 3000, Angular port = 4200, Node port = 8000/8080
const PORT  = process.env.PORT || 8080; // when your port is empty then it will be work
//Now app has to run
//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white); //to make it dynamic keep it in back quotation
});